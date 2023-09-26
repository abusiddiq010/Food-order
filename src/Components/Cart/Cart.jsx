import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  console.log(totalAmount);
  const hasItems = cartCtx?.items?.length >= 0;

  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = cartCtx?.items?.map((item) => (
    <CartItem
      key={item.id} // Make sure to provide a unique key when mapping over items
      price={item.price}
      quantity={item.quantity}
      name={item.available}
      onRemove={() => cartItemRemoveHandler(item.id)}
      onAdd={() => cartItemAddHandler(item)}
    />
  ));
  console.log(cartCtx.items);

  return (
    <Modal>
      <div className={classes["cart-items"]}>
        <span>{cartItems} </span>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.CardIsClosed}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  console.log(totalAmount);
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (item) => {};
  const cartItemAddHandler = (id) => {};

  const cartItems = (
    <ul>
      <li>
        {cartCtx.items.map(({ available, price, quantity }) => (
          <CartItem
            price={price}
            quantity={quantity}
            name={available}
            onRemove={cartItemRemoveHandler}
            onAdd={cartItemAddHandler}
          />
        ))}
      </li>
    </ul>
  );
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

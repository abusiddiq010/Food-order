import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../Store/CartContext";
const MealItem = (props) => {
  //   const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      available: props.available,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <>
      <li className={classes.meal}>
        <div className="flex flex-col gap-4">
          <h3>{props.available}</h3>
          <p className={classes.price}>$ {props.price}</p>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
      </li>
    </>
  );
};

export default MealItem;

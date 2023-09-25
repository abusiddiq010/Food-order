import React, { useState, Fragment, useContext } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../Store/CartContext";

const HeaderCartBUtton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((current, item) => {
    return current + item.quantity;
  }, 0);
  return (
    <Fragment>
      <button className={classes.button} onClick={props.CardIsOpen}>
        <span className={classes.icon}>
          <HiMiniShoppingCart size={35} />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartBUtton;

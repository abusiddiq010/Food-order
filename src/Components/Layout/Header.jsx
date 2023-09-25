import React, { Fragment } from "react";
import Meals from "../../Assets/meals.jpg";
import HeaderCartBUtton from "./HeaderCartBUtton";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBUtton CardIsOpen={props.CardIsOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Meals} />
      </div>
      <p>hello</p>
    </Fragment>
  );
};

export default Header;

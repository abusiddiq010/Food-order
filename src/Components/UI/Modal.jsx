import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return reactDom.createPortal(
    <>
      <div className={classes.backdrop}>
        <div className={classes.modal}>{props.children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

import React from "react";
import css from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={css.backdrop}></div>
      <div className={css.modal}>{props.children}</div>
    </React.Fragment>
  );
};

export default Modal;

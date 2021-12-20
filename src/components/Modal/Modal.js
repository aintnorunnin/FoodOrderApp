import React from "react";
import ReactDOM from "react-dom";
import css from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.onClose}></div>;
};

const ModalContent = (props) => {
  return <div className={css.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const modalOverlayDiv = document.getElementById("modal_overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, modalOverlayDiv)}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        modalOverlayDiv
      )}
    </React.Fragment>
  );
};

export default Modal;

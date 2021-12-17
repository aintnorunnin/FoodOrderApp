import React from "react";
import css from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={css.input}>
      <label>{props.label}</label>
      <input />
    </div>
  );
};

export default Input;

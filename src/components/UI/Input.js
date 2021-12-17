import React, { useImperativeHandle, useRef } from "react";
import css from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      count: inputRef.current.value,
    };
  });
  return (
    <div className={css.input}>
      <label>{props.label}</label>
      <input
        ref={inputRef}
        value={props.value}
        min="0"
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;

import React, { useContext, useRef, useState } from "react";
import css from "./MealItemForm.module.css";
import CartContext from "../context/CartContext";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const cartCxt = useContext(CartContext);
  const [amountValue, setAmount] = useState("");
  const amountRef = useRef();

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    cartCxt.addItemToCart({
      name: props.mealName,
      count: parseInt(amountRef.current.count, 10),
    });
    setAmount("");
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        type="number"
        value={amountValue}
        onChange={amountChangeHandler}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;

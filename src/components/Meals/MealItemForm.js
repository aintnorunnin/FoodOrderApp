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
    if (amountRef.current.count === "0" || amountRef.current.count === "")
      return;
    cartCxt.addItemToCart({
      name: props.mealName,
      count: parseInt(amountRef.current.count, 10),
      price: props.price,
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

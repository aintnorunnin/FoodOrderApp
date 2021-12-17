import React, { useContext } from "react";
import css from "./MealItemForm.module.css";
import CartContext from "../context/CartContext";
import Input from "../UI/Input";

const MealItemForm = () => {
  const cartCxt = useContext(CartContext);

  return (
    <form className={css.form}>
      <Input label="Amount" />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;

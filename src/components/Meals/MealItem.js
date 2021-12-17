import React from "react";
import css from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <div className={css.meal}>
      <h3>{props.name}</h3>
      <span className={css.description}>{props.description}</span>
      <span className={css.price}>{`$${props.price}`}</span>
      <MealItemForm mealName={props.name} />
    </div>
  );
};

export default MealItem;

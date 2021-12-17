import React from "react";
import css from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.description}>{props.description}</div>
        <div className={css.price}>{`$${props.price}`}</div>
      </div>
      <MealItemForm mealName={props.name} />
    </li>
  );
};

export default MealItem;

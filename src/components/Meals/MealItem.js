import React from "react";
import css from "./MealItem.module.css";

const MealItem = (props) => {
    return(
        <div className={css.meal}>
            <h3>{props.name}</h3>
            <span className={css.description}>{props.description}</span>
            <span className={css.price}>{props.price}</span>
        </div>
    )
};

export default MealItem;

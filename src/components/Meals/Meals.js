import React, { useContext } from "react";
import MealsContext from "../context/MealsContext";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import css from "./Meals.module.css";

const Meals = () => {
  const mealsCxt = useContext(MealsContext);
  return (
    <Card className={css.meals}>
      <ul>
        {mealsCxt.meals.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            ></MealItem>
          );
        })}
      </ul>
    </Card>
  );
};
export default Meals;

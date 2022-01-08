import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import css from "./Meals.module.css";
import useHttp from "../../hooks/use-http";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const http = useHttp();
  
  const convertAndSetMeals = (mealsObj) => {
    setMeals(Object.keys(mealsObj).map((key) => mealsObj[key]));
  };

  useEffect(() => {
    http.sendRequest(
      {
        url: "https://food-app-8ce78-default-rtdb.firebaseio.com/meals.json",
      },
      convertAndSetMeals
    );
  }, [http.sendRequest]);

  return (
    <Card className={css.meals}>
      {http.loading && <p>Loading...</p>}
      <ul>
        {meals.map((meal) => {
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

export default React.memo(Meals);

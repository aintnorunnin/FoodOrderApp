import React, { useState } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsContext = React.createContext({
  meals: [],
  mealToPriceMap: {},
  addNewMeal: () => {},
});

export const MealsContextProvider = (props) => {
  const [meals, setMeals] = useState(DUMMY_MEALS);
  const initialMealToPriceMap = {};
  meals.forEach((meal) => (initialMealToPriceMap[meal.name] = meal.price));
  const [mealToPriceMap, setMealToPriceMap] = useState(initialMealToPriceMap);

  const addNewMeal = (meal) => {
    setMeals((prevMeals) => {
      return [meal, ...prevMeals];
    });
    setMealToPriceMap((prevMap) => {
      return {
        ...prevMap,
        [meal.name]: meal.price,
      };
    });
  };
  const mealsCxt = {
    meals: meals,
    mealToPriceMap: mealToPriceMap,
    addMeal: addNewMeal,
  };
  return (
    <MealsContext.Provider value={mealsCxt}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;

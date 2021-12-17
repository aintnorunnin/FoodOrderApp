import React, { useContext, useState } from "react";
import MealsContext from "./MealsContext";

const CartContext = React.createContext({
  cart: {},
  itemsInCart: 0,
  totalPrice: 0,
  addItemToCart: () => {},
});

export const CartContextProvider = (props) => {
  const mealsCxt = useContext(MealsContext);
  const initialCart = {};

  mealsCxt.meals.forEach((meal) => (initialCart[meal.name] = 0)); //Initialize Cart

  const [cart, setCart] = useState(initialCart);

  const addItemToCart = (item) => {
    console.log(item);
    setCart((prevCart) => {
      return {
        ...prevCart,
        [item.name]: prevCart[item.name] + item.count,
      };
    });
  };
  
  const cartCxt = {
    cart: cart,
    itemsInCart: Object.values(cart).reduce((item1, item2) => item1 + item2),
    totalPrice: calculateTotalPrice(cart, mealsCxt.mealToPriceMap),
    addItemToCart: addItemToCart,
  };

  return (
    <CartContext.Provider value={cartCxt}>
      {props.children}
    </CartContext.Provider>
  );
};

function calculateTotalPrice(cart, mealToPriceMap) {
  let total = 0;
  for (const [name, count] of Object.entries(cart)) {
    const priceOfMeal = mealToPriceMap[name]
    total += count * priceOfMeal;
  }
  return total;
}

export default CartContext;

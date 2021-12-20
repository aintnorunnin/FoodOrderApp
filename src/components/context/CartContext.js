import React, { useContext, useState } from "react";
import MealsContext from "./MealsContext";

const CartContext = React.createContext({
  cart: {},
  itemsInCart: 0,
  totalPrice: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartContextProvider = (props) => {
  const mealsCxt = useContext(MealsContext);
  const initialCart = { "": 0 };

  const [cart, setCart] = useState(initialCart);

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const newCount = prevCart[item.name] ?
        prevCart[item.name] + item.count : item.count;
      return {
        ...prevCart,
        [item.name]: newCount,
      };
    });
  };

  const removeItemFromCart = (item) => {
    setCart((prevCart) => {
      const newCount = prevCart[item.name] ?
        prevCart[item.name] - 1 : 0;
      return {
        ...prevCart,
        [item.name]: newCount,
      };
    });
  };

  const cartCxt = {
    cart: cart,
    itemsInCart: Object.values(cart).reduce((item1, item2) => item1 + item2),
    totalPrice: calculateTotalPrice(cart, mealsCxt.mealToPriceMap),
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
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
    if (name === "") continue;
    const priceOfMeal = mealToPriceMap[name];
    total += count * priceOfMeal;
  }
  return total.toFixed(2);
}

export default CartContext;

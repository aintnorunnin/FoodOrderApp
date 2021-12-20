import React, { useContext, useReducer } from "react";
import MealsContext from "./MealsContext";

const INITIAL_CART_STATE = {
  cart: {},
  itemsInCart: 0,
  totalPrice: 0,
};
const CartContext = React.createContext(INITIAL_CART_STATE);

export const CartContextProvider = (props) => {
  const mealsCxt = useContext(MealsContext);

  const reducer = (state, action) => {
    const prevCart = state.cart;
    const item = action.item;
    const priceOfMeal = mealsCxt.mealToPriceMap[item.name];
    let newCount = 0;
    let newCart = {};
    switch (action.type) {
      case "ADD_ITEM":
        newCount = prevCart[item.name]
          ? prevCart[item.name] + item.count
          : item.count;
        newCart = { ...prevCart, [item.name]: newCount };
        return {
          cart: newCart,
          itemsInCart: state.itemsInCart + item.count,
          totalPrice: state.totalPrice + priceOfMeal * item.count,
        };
      case "REMOVE_ITEM":
        newCount = prevCart[item.name] ? prevCart[item.name] - 1 : 0;
        newCart = { ...prevCart, [item.name]: newCount };
        return {
          cart: newCart,
          itemsInCart: state.itemsInCart - 1,
          totalPrice: state.totalPrice - priceOfMeal,
        };
      default:
        return INITIAL_CART_STATE;
    }
  };

  const [cartState, dispatchCart] = useReducer(reducer, INITIAL_CART_STATE);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (item) => {
    dispatchCart({ type: "REMOVE_ITEM", item: item });
  };

  const cartCxt = {
    cart: cartState.cart,
    itemsInCart: cartState.itemsInCart,
    totalPrice: cartState.totalPrice,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartCxt}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

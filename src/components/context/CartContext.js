import React, { useEffect, useReducer } from "react";

const DEFAULT_CART_STATE = {
  cart: {},
  itemsInCart: 0,
  totalPrice: 0,
};

const DEFAULT_CART_CONTEXT = {
  cart: DEFAULT_CART_STATE.cart,
  itemsInCart: DEFAULT_CART_STATE.itemsInCart,
  totalPrice: DEFAULT_CART_STATE.totalPrice,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
};

const INITIAL_CART_STATE =
  JSON.parse(localStorage.getItem("cart")) || DEFAULT_CART_STATE;

const CartContext = React.createContext(DEFAULT_CART_CONTEXT);

export const CartContextProvider = (props) => {
  const reducer = (state, action) => {
    const prevCart = state.cart;
    const item = action.item;
    const priceOfMeal = item.price;

    let newCount = 0;
    let newCart = {};
    switch (action.type) {
      case "ADD_ITEM":
        newCount = prevCart[item.name]
          ? prevCart[item.name].count + item.count
          : item.count;
        newCart = {
          ...prevCart,
          [item.name]: { count: newCount, unitPrice: priceOfMeal },
        };
        return {
          cart: newCart,
          itemsInCart: state.itemsInCart + item.count,
          totalPrice: state.totalPrice + priceOfMeal * item.count,
        };
      case "REMOVE_ITEM":
        newCount = prevCart[item.name] ? prevCart[item.name].count - 1 : 0;
        newCart = {
          ...prevCart,
          [item.name]: { count: newCount, unitPrice: priceOfMeal },
        };
        return {
          cart: newCart,
          itemsInCart: state.itemsInCart - 1,
          totalPrice: state.totalPrice - priceOfMeal,
        };
      default:
        return DEFAULT_CART_STATE;
    }
  };

  const [cartState, dispatchCart] = useReducer(reducer, DEFAULT_CART_STATE);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (item) => {
    dispatchCart({ type: "REMOVE_ITEM", item: item });
  };

  const resetCart = () => {
    dispatchCart({ type: "DEFAULT", item: {} });
  };

  const cartCxt = {
    cart: cartState.cart,
    itemsInCart: cartState.itemsInCart,
    totalPrice: cartState.totalPrice.toFixed(2),
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    resetCart: resetCart,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={cartCxt}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

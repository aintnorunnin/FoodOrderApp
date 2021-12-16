import React, { useState } from "react";

const CartContext = React.createContext({
  cart: [],
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addItemToCart = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };
  const cartCxt = {
    cart: cart,
  };

  return (
    <CartContext.Provider value={cartCxt}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

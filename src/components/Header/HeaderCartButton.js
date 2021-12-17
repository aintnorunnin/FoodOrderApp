import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../context/CartContext";
import css from "./HeaderCart.module.css";

const HeaderCartButton = (props) => {
  const cartCxt = useContext(CartContext);
  const buttonHandler = () => {
    console.log(cartCxt.cart);
    console.log(`There are ${cartCxt.itemsInCart} items in the cart`);
    console.log(`The total price is ${cartCxt.totalPrice}`);
    props.displayCart();
  };
  return (
    <button className={css.button} onClick={buttonHandler}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>User's Cart</span>
      <span className={css.badge}>{cartCxt.itemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;

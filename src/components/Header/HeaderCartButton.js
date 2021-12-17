import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../context/CartContext";
import css from "./HeaderCart.module.css";

const HeaderCartButton = (props) => {
  const cartCxt = useContext(CartContext);
  const buttonHandler = () => {
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

import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../context/CartContext";
import css from "./HeaderCart.module.css";

const HeaderCartButton = () => {
    const cartCxt = useContext(CartContext);

  return <button className={css.button}>
      <span className={css.icon}><CartIcon /></span>
      <span>User's Cart</span>
      <span className={css.badge}>{cartCxt.itemsInCart}</span>
  </button>;
};

export default HeaderCartButton;

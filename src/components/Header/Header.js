import React, { useState } from "react";
import css from "./Header.module.css";
import mealImage from "../../static/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const showCart = () => {
    setDisplayCart(true);
  };
  const hideCart = () => {
    setDisplayCart(false);
  };
  return (
    <React.Fragment>
      <header className={css.header}>
        <h1>Brandon's Restaurant</h1>
        <HeaderCartButton displayCart={showCart} />
      </header>
      <div className={css["main-image"]}>
        <img src={mealImage} alt="Food on dining table"></img>
      </div>
      {displayCart && <Cart onClose={hideCart} />}
    </React.Fragment>
  );
};

export default Header;

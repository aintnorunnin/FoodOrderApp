import React from "react";
import css from "./Header.module.css";
import mealImage from "../../static/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  console.log("Header");
  return (
    <React.Fragment>
      <header className={css.header}>
        <h1>Brandon's Restaurant</h1>
        <HeaderCartButton displayCart={props.displayCart} />
      </header>
      <div className={css["main-image"]}>
        <img src={mealImage} alt="Food on dining table"></img>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Header);

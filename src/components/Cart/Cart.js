import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import css from "./Cart.module.css";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import MealsContext from "../context/MealsContext";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const mealCxt = useContext(MealsContext);

  const cartItems = (
    <ul>
      {Object.keys(cartCxt.cart).map((itemName) => {
        return (
          cartCxt.cart[itemName] > 0 && (
            <CartItem
              key={itemName}
              name={itemName}
              count={cartCxt.cart[itemName]}
              price={mealCxt.mealToPriceMap[itemName]}
              addItem={cartCxt.addItemToCart}
              removeItem={cartCxt.removeItemFromCart}
            ></CartItem>
          )
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={css["cart-items"]}>{cartItems}</div>
      <div className={css.total}>
        <span>Total Amount</span>
        <span>{`$${cartCxt.totalPrice}`}</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={css.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

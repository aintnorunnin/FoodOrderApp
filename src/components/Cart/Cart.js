import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import css from "./Cart.module.css";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import MealsContext from "../context/MealsContext";

const Cart = () => {
  const cartCxt = useContext(CartContext);
  const mealCxt = useContext(MealsContext);

  return (
    <Modal>
      <div className={css["cart-items"]}>
        <ul>
          {Object.keys(cartCxt.cart).map((itemName) => {
            return (
              <li key={itemName}>
                <CartItem
                  name={itemName}
                  count={cartCxt.cart[itemName]}
                  price={mealCxt.mealToPriceMap[itemName]}
                ></CartItem>
              </li>
            );
          })}
        </ul>
        <div className={css.total}>
          <span>Total Amount</span>
          <span>{`$ ${cartCxt.totalPrice}`}</span>
        </div>
        <div className={css.actions}>
          <button>Close</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

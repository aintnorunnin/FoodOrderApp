import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import css from "./Cart.module.css";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import CheckoutForm from "./Checkout";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const [showCheckout, setCheckout] = useState(false);

  const cartItems = (
    <ul>
      {Object.keys(cartCxt.cart).map((itemName) => {
        return (
          cartCxt.cart[itemName].count > 0 && (
            <CartItem
              key={itemName}
              name={itemName}
              count={cartCxt.cart[itemName].count}
              price={cartCxt.cart[itemName].unitPrice}
              addItem={cartCxt.addItemToCart}
              removeItem={cartCxt.removeItemFromCart}
            ></CartItem>
          )
        );
      })}
    </ul>
  );

  const displayCheckout = () => {
    setCheckout(true);
  }
  
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
        <button className={css.button} onClick={displayCheckout}>Order</button>
      </div>
      {showCheckout && <CheckoutForm />}
    </Modal>
  );
};

export default Cart;

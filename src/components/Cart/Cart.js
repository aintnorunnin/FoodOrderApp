import React, { useContext } from "react";
import Card from "../UI/Card";
import CartContext from "../context/CartContext";
import css from "./Cart.module.css";

const Cart = () => {
  const cartCxt = useContext(CartContext);

  return (
    <Modal>
      <Card>
        <div className={css["cart-items"]}>Items</div>
        <span className={css.total}>Total</span>
        <div className={css.actions}>
          <button>Close</button>
          <button>Order</button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;

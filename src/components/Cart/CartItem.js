import css from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={css["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={css.summary}>
          <span className={css.price}>${props.price}</span>
          <span className={css.count}>{props.count}x</span>
        </div>
      </div>
      <div className={css.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;

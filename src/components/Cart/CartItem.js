import css from "./CartItem.module.css";

const CartItem = (props) => {
 return (
     <div className={css["cart-item"]}>
         <h2>{props.name}</h2>
         <span className={css.count}>{props.count}x</span>
         <span className={css.price}>${props.price}</span>
         <span></span>
     </div>
 )
}

export default CartItem;
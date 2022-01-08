import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import css from "./Checkout.module.css";
import useHttp from "../../hooks/use-http";
import Order from "../../Models/Order";

const CheckoutForm = () => {
  const cartCxt = useContext(CartContext);
  const http = useHttp();
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const postRequestConfig = {
    url: "https://food-app-8ce78-default-rtdb.firebaseio.com/orders.json",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const items = extractItems(cartCxt.cart);
    const order = new Order(
      name,
      street,
      city,
      state,
      postal,
      items,
      cartCxt.totalPrice
    );
    postRequestConfig.body = order;
    http.sendRequest(postRequestConfig, null);

    cartCxt.resetCart();
    setName("");
    setPostal("");
    setCity("");
    setState("");
    setStreet("");
  };

  const inputOnchange = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case "name":
        setName(value);
        break;
      case "street":
        setStreet(value);
        break;

      case "city":
        setCity(value);
        break;

      case "state":
        setState(value);
        break;

      case "postal":
        setPostal(value);
        break;
      default:
        break;
    }
  };

  let content = "";
  if (cartCxt.itemsInCart == 0) {
    content = <p>There are no items in your cart to order.</p>;
  } else {
    content = (
      <form onSubmit={submitHandler}>
        <div className={css.control}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={inputOnchange} />
        </div>
        <div className={css.control}>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={inputOnchange}
          />
        </div>
        <div className={css.control}>
          <label htmlFor="city">City</label>
          <input id="city" type="text" value={city} onChange={inputOnchange} />
        </div>
        <div className={css.control}>
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            value={state}
            onChange={inputOnchange}
          />
        </div>
        <div className={css.control}>
          <label htmlFor="postal">Postal Code</label>
          <input
            id="postal"
            type="text"
            value={postal}
            onChange={inputOnchange}
          />
        </div>
        <div className={css.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

function extractItems(cart) {
  return Object.keys(cart).map((itemName) => {
    return {
      item: itemName,
      count: cart[itemName].count,
    };
  });
}

export default CheckoutForm;

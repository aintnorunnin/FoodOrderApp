import React, { useCallback, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const showCart = useCallback(() => {
    setDisplayCart(true);
  }, []);

  const hideCart = useCallback(() => {
    setDisplayCart(false);
  }, []);

  return (
    <React.Fragment>
      <Header displayCart={showCart} />
      <Meals />
      {displayCart && <Cart onClose={hideCart} />}
    </React.Fragment>
  );
};

export default App;

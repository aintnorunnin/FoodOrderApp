import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { CartContextProvider } from "./components/context/CartContext";
import { MealsContextProvider } from "./components/context/MealsContext";

ReactDOM.render(
  <MealsContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </MealsContextProvider>,
  document.getElementById("root")
);

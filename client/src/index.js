import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthenticationContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthenticationContextProvider>
);

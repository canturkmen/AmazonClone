import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./store/cart-context";
import { UserProvider } from "./store/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </UserProvider>
);

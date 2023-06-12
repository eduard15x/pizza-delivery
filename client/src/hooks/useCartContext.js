import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);
  const { state, addToCart, deleteFromCart, clearCart } = context;
  return { state, addToCart, deleteFromCart, clearCart };
};

import { useContext } from "react";
import CartContext from "../../context/CartContext.jsx";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
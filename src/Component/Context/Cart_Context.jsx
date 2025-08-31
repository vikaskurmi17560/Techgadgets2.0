import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  try {
    const localCartData = localStorage.getItem("Cart");
    return localCartData ? JSON.parse(localCartData) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 150,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    if (amount < 1) return;
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };

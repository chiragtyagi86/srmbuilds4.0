import React, { createContext, useState } from "react";
import all_product from "../Context/BusContext.jsx";

export const BusContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { all_product, cartItems,addToCart,removeFromCart};

  return (
    <BusContext.Provider.Provider value={contextValue}>
      {props.children}
    </BusContext.Provider.Provider>
  );
};

export default ShopContextProvider;

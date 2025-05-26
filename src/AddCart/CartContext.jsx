import React, { createContext, useState, useEffect } from "react";

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to wrap around your app
export const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return [];
    }
  });

  // Save cartItems to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to localStorage:", error);
    }
  }, [cartItems]);

  // Add item to cart, avoid duplicates based on name
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart by name
      if (prevItems.some((cartItem) => cartItem.name === item.name)) {
        return prevItems; // Don't add duplicates
      }
      return [...prevItems, item];
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Optionally, remove a single item by name
  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        removeFromCart, // if you want to support removing individual items later
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

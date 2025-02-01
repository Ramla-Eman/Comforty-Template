import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); // 🛒 Counter for items

  // 🛒 Update cart when an item changes
  const updateCart = (updatedItem) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === updatedItem.id ? { ...item, quantity: updatedItem.quantity } : item
      )
    );
  };

  // 🔄 Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // 💾 Save cart & update count when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0)); // ✅ Update counter
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, updateQuantity, removeFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Ensure `CartContext` is used properly
export const useCart = () => useContext(CartContext);

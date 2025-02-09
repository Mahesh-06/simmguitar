import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const cartTotal = cartItems.reduce((total, item) => {
    console.log("Processing item:", item);

    const itemPrice =
      !isNaN(item.price) && item.price !== null ? Number(item.price) : 0;
    const itemQuantity =
      !isNaN(item.quantity) && item.quantity !== null
        ? Number(item.quantity)
        : 1;

    console.log(
      "Validated itemPrice:",
      itemPrice,
      "Validated itemQuantity:",
      itemQuantity
    );

    const newTotal = total + itemPrice * itemQuantity;

    console.log("Updated total after item:", newTotal);

    return newTotal;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

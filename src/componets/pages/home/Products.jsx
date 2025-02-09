import React, { useState } from "react";
import { useCart } from "../../Redux/CartContext";

const Products = () => {
  return (
    <div className="ProductsFile">
      <div className="Totalprod">
        <p className="HeadTag">Trending Products</p>

        <Items />
      </div>
    </div>
  );
};

//import { useCart } from "./useCart"; // Assuming useCart provides cart-related functionality

export const Items = () => {
  let items = [
    {
      id: 1,
      name: "Acoustic Guitar",
      brand: "Yamaha",
      price: 11999,
      image: "/assets/images/products/img1.png",
    },
    {
      id: 2,
      name: "Electric Guitar",
      price: 18999,
      brand: "Yamaha",
      image: "/assets/images/products/img2.png",
    },
    {
      id: 3,
      name: "RG Electric Guitar",
      brand: "Ibanez",
      price: 21999,
      image: "/assets/images/products/img3.png",
    },
    {
      id: 4,
      name: "Golden Guitar",
      brand: "Ibanez",
      price: 42999,
      image: "/assets/images/products/img4.png",
    },
  ];

  const { addToCart, removeFromCart } = useCart();
  const [cartCounts, setCartCounts] = useState({});

  const handleAdd = (item) => {
    setCartCounts((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    addToCart(item);
  };

  const handleRemove = (item) => {
    setCartCounts((prev) => {
      const updatedCount = (prev[item.id] || 0) - 1;
      if (updatedCount <= 0) {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [item.id]: updatedCount };
    });
    removeFromCart(item);
  };

  return (
    <div className="ProductsDiv">
      {items.map((data) => (
        <div className="noOfItems" key={data.id}>
          <img src={data.image} alt={data.name} className="productImg" />
          <h4>{data.brand}</h4>
          <p>{data.name}</p>
          <span>
            <b>Rs. {data.price.toLocaleString("en-IN")}</b>
          </span>
          {cartCounts[data.id] ? (
            <div className="cartActions">
              <button onClick={() => handleRemove(data)}>-</button>
              <span>{cartCounts[data.id]}</span>
              <button onClick={() => handleAdd(data)}>+</button>
            </div>
          ) : (
            <button className="addtoCart" onClick={() => handleAdd(data)}>
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;

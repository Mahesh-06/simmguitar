import React from "react";
import { Items } from "../home/Products";

const Shop = () => {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        marginTop: "10px",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h6 className="ShopHead">Shop</h6>
      <Items />
      <Items />
    </div>
  );
};

export default Shop;

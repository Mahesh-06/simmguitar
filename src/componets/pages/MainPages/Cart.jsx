import React from "react";
import { useCart } from "../../Redux/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate("/checkout", { state: { item } });
  };

  return (
    <div className="cartContainer">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cartItem">
            <img src={item.image} alt={item.name} className="cartImg" />
            <div className="cartDetails">
              <h4>{item.name}</h4>
              <p>Brand: {item.brand}</p>
              <p>Price: Rs. {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="cartActions">
              <button
                className="removeBtn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              <button className="buyNowBtn" onClick={() => handleBuyNow(item)}>
                Buy Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

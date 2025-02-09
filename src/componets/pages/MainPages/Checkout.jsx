import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    shippingAddress: "",
    paymentMethod: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!item) {
    return <p className="noItemMessage ">No item selected for checkout</p>;
  }

  const validateForm = () => {
    const newErrors = {
      name: name ? "" : "Name is required",
      email: emailRegex.test(email) ? "" : "Invalid email format",
      phone: phoneRegex.test(phone) ? "" : "Phone number must be 10 digits",
      shippingAddress: shippingAddress ? "" : "Shipping address is required",
      paymentMethod: paymentMethod ? "" : "Please select a payment method",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        navigate("/");
      }, 3000);
    } else {
      console.log("Please fix the errors before placing the order");
    }
  };

  const totalPrice = item.price * item.quantity;
  console.log(totalPrice);

  return (
    <div className="contactPage1">
      <div className="checkoutContainer">
        <h2 style={{ color: "white" }}>Checkout</h2>

        <div className="checkoutItem">
          <img src={item.image} alt={item.name} className="checkoutImg" />
          <div className="checkoutDetails">
            <h4>{item.name}</h4>
            <p style={{ color: "violet" }}>Brand: {item.brand}</p>
            <p style={{ color: "violet" }}>
              Price: Rs. {item.price.toLocaleString("en-IN")}
            </p>
            <p style={{ color: "violet" }}>Quantity: {item.quantity}</p>
          </div>
        </div>

        <div className="personalDetails">
          <h3>Personal Details</h3>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="shippingDetails">
          <h3>Shipping Details</h3>
          <textarea
            placeholder="Enter your shipping address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
          {errors.shippingAddress && (
            <p className="error">{errors.shippingAddress}</p>
          )}
        </div>

        <div className="paymentMethod">
          <h3>Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          {errors.paymentMethod && (
            <p className="error">{errors.paymentMethod}</p>
          )}
        </div>

        <div className="orderSummary">
          <h3>Order Summary</h3>
          <p>Item: {item.name}</p>
          <p>Price: Rs. {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: Rs. {totalPrice.toLocaleString("en-IN")}</p>
        </div>

        {/* Success message */}
        {orderPlaced && (
          <p className="successMessage">Order placed successfully!</p>
        )}

        {/* Place Order Button */}
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;

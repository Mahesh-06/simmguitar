import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./componets/MainLay/MainLayout";
import Home from "./componets/pages/MainPages/Home";
import Shop from "./componets/pages/MainPages/Shop";
import Blog from "./componets/pages/MainPages/Blog";
import About from "./componets/pages/MainPages/About";
import ContactUs from "./componets/pages/MainPages/ContactUs";
import Cart from "./componets/pages/MainPages/Cart";
import Login from "./componets/pages/MainPages/Login";
import Careers from "./componets/pages/MainPages/Careers";
import ReturnRefund from "./componets/pages/MainPages/ReturnRefund";
import Checkout from "./componets/pages/MainPages/Checkout";
import { CartProvider } from "./componets/Redux/CartContext";
import SignUp from "./componets/pages/MainPages/SignUp";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/returns" element={<ReturnRefund />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;

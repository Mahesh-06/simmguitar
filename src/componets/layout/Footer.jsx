import React from "react";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaPinterestP,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="InnerDivis">
        <h1 className="webName">SIMM</h1>
        <p className="lorem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab atque
          laborum a vel dolorem similique voluptatibus nihil recusandae, omnis
          numquam.
        </p>
        <div className="mediaTags">
          <div>
            <FaFacebookF className="TagsOfMedia" />
          </div>
          <div>
            <FaInstagram className="TagsOfMedia" />
          </div>
          <div>
            <FaPinterestP className="TagsOfMedia" />
          </div>
        </div>
      </div>
      <div className="InnerDivis">
        <h2 className="headtagF">Pages</h2>
        <Link to={"/"} className="pagesLinks">
          Home
        </Link>
        <Link to={"/about"} className="pagesLinks">
          About
        </Link>
        <Link to={"/shop"} className="pagesLinks">
          Shop
        </Link>
        <Link to={"/blog"} className="pagesLinks">
          Blog
        </Link>
        <Link to={"/contact"} className="pagesLinks">
          Contact
        </Link>
      </div>
      <div className="InnerDivis">
        <h2 className="headtagF">Quick Link</h2>

        <Link to={"/checkout"} className="pagesLinks2">
          Checkout
        </Link>

        <Link to={"/cart"} className="pagesLinks2">
          Cart
        </Link>
      </div>
      <div className="InnerDivis">
        <h2 className="headtagF">Our Stores</h2>
        <div>
          <FaLocationDot style={{ color: "#ff9800", fontSize: "20px" }} />
          <span>srinivas Nagar No.67 , Nandyal</span>
        </div>
        <div>
          <FaClock style={{ color: "#ff9800", fontSize: "20px" }} />
          <span>9AM - 10PM , Monday - Saturday</span>
        </div>
        <div>
          <FaPhoneAlt style={{ color: "#ff9800", fontSize: "20px" }} />
          <span>+91 9876541230</span>
        </div>
        <div>
          <IoMail style={{ color: "#ff9800", fontSize: "20px" }} />
          <span>simmguitar@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

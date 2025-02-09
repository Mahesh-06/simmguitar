import React, { useState } from "react";
import {
  FaCartArrowDown,
  FaRegUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="MainHeader">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="hamburgerIcon" />
        ) : (
          <FaBars className="hamburgerIcon" />
        )}
      </div>

      <div className="logo">
        <img className="logoImage" src="/assets/images/logo3.png" alt="logo" />
      </div>

      <div className={`middleNavbar ${menuOpen ? "active" : ""}`}>
        <Link to={"/"} className="linkTag" onClick={closeMenu}>
          Home
        </Link>
        <Link to={"/shop"} className="linkTag" onClick={closeMenu}>
          Shop
        </Link>
        <Link to={"/blog"} className="linkTag" onClick={closeMenu}>
          Blog
        </Link>
        <Link to={"/about"} className="linkTag" onClick={closeMenu}>
          About
        </Link>
        <Link to={"/contact"} className="linkTag" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      <div className="iconsDivMobile">
        <Link to={"/cart"}>
          <FaCartArrowDown className="icons" />
        </Link>
        <Link to={"/login"}>
          <FaRegUserCircle className="icons" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

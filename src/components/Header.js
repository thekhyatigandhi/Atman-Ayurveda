import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import "./components.css"; // Your custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <div>
        <Link to="/">
          <img src={logoImage} alt="Logo" style={{ maxWidth: "100px" }} />
        </Link>
      </div>
      <nav>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/know-your-dosha">Know Your Dosha</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

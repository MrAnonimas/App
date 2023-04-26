import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 12 random street</li>
          <li>Email: restaurant@littlelemon.com</li>
          <li>Phone: 860078796</li>
        </ul>
      </nav>
      <nav>
        <h3>Opening times</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 22:30</li>
          <li>Saturday - Sunday: 10:00 - 23:30</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
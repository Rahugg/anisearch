import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="style">
        Created by{" "}
        <a href="https://www.instagram.com/_faaraday_/">@_faaraday_</a>
        <div className="text">
          <a href="your link here">
            {" "}
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="your link here">
            {" "}
            <i class="fab fa-github"></i>
          </a>
          <a href="your link here">
            {" "}
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

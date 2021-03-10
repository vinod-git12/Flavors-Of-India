import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="footer-container">
      <div className="footer">
      <Link to="/">
        <img src="https://i.imgur.com/FYc76gD.png" alt="Flavors of India" className="footer-logo"></img>
      </Link>
        <h4 className="footer-h4">Created By : </h4>
          <a
          className="footer-a"
          href="https://github.com/vinod-git12"
          target="blank"
        >
          <i className="fab fa-github"></i> &nbsp; Vinod Kumar
        </a>
       
      </div>
    // </div>
  );
};

export default Footer;

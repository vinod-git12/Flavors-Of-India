import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <h1 className="footer-h1">Flavors Of India</h1>
      </Link>
      <div className="footer-text">
        <h4 className="footer-h4">Created By : </h4>
        <div>
          
        </div>
        <a
          className="footer-a"
          href="https://github.com/vinod-git12"
          target="blank"
        >
          <i className="fab fa-github"></i> &nbsp; Vinod Kumar
        </a>
       
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout-children">
      <div className="layout-content">
        <Nav user={props.user} />
        {/* screens go below */}
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

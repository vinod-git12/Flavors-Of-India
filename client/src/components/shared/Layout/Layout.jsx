import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout-children">
      <div className="layout-content">
        <Nav currentUser={currentUser}
          handleLogout={handleLogout}
        />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

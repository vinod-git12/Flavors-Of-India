import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const activeStyle = {
  fontWeight: "800",
  color: "#f4a261",
};

const Nav = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => setIsClicked(!isClicked);
  const closeMobileMenu = () => setIsClicked(false);


  const manageRestaurants = (
    <li className="nav-item nav-hover">
      <NavLink
        to="/restaurants/user-restaurants"
        className="nav-links hidden"
        onClick={closeMobileMenu}
        activeStyle={activeStyle}
      >
        Manage Restaurants
      </NavLink>
    </li>
  );

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <h1>Flavors of India</h1>
        </NavLink>

        <div className="menu-icon" onClick={handleIsClicked}>
          <i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item nav-hover">
            <NavLink
              to="/restaurants"
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={activeStyle}
            >
              Restaurants
            </NavLink>
          </li>

          <li className="nav-item nav-hover">
            <NavLink
              to={props.currentUser ? "/add-restaurant" : "/sign-in"}
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={activeStyle}
            >
              Add-Restaurants
            </NavLink>
          </li>

          <li className="nav-item nav-hover">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={activeStyle}
            >
              About
            </NavLink>
          </li>

          {props.currentUser && manageRestaurants}

          <li className="nav-item">
            <NavLink
              to={props.currentUser ? "/sign-out" : "/sign-in"}
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              {props.currentUser ? "Sign out" : "Sign In"}
            </NavLink>
          </li>
        </ul>

        <li
          className="nav-item login toggle"
        >
          <NavLink to="/sign-in" className="nav-links" onClick={closeMobileMenu}>
            {props.currentUser ? props.currentUser.username : "Sign In "}
            <i className="fas fa-caret-down" />
          </NavLink>
        </li>

        {props.currentUser && 
          <li>
          <button onClick={props.handleLogout}>
            Log Out
          </button>
          </li>
        }
      </nav>
    </>
  );
};

export default Nav;

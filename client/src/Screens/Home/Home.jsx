import React from "react";
import { useHistory, useState } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = (props) => {
  const history = useHistory();
  const { currentUser, handleLogout } = props;

  return (
    
    <div className="home-container">
      <div home-logo-container>
        <img src="https://i.imgur.com/FYc76gD.png" alt="Flavors of India" className="home-logo"></img>
      </div>

      <div className="home-signin">
        <Link to='/sign-up' className="register">
          <button className="home-button">Get Started</button>
        </Link>
      </div>

    </div>
    )
}
  export default Home;



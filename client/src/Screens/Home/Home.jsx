import React from "react";
import { useHistory, useState } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  const history = useHistory();
  const { currentUser, handleLogout } = props;

  return (
    
      <div>
        <button
          className="get-started"
          onClick={() => history.push("/sign-in")}
        >
          Get Started
            </button>
      </div>
    
  )
}
  
  export default Home;



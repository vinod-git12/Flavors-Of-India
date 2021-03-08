import React from "react";
import { useHistory, useState } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  const history = useHistory();
  const { currentUser, handleLogout } = props;

  return (
    <Layout user={props.user}
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <div>
        <button
          className="get-started"
          onClick={() => history.push("/sign-in")}
        >
          Get Started
            </button>
      </div>
    </Layout>
  )
}
  
  export default Home;



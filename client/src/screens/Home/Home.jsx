import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  const history = useHistory();

  return (
    <Layout user={props.user}>
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



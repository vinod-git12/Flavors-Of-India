import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./Screens/About/About";
// import Layout from './components/shared/Layout/Layout';
import Home from "./Screens/Home/Home";
import RestaurantCreate from "./Screens/RestaurantCreate/RestaurantCreate";
import RestaurantDetail from "./Screens/RestaurantDetail/RestaurantDetail";
import RestaurantEdit from "./Screens/RestaurantEdit/RestaurantEdit";
import Restaurants from "./Screens/Restaurants/Restaurants";
import SignIn from "./Screens/SignIn/SignIn";
// import SignOut from "./Screens/SignOut/SignOut";
import SignUp from "./Screens/SignUp/SignUp";
import UserRestaurants from "./Screens/UserRestaurants/UserRestaurants";
import { verifyUser, registerUser, loginUser } from "./services/user";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const userData = await loginUser(formData);
      setCurrentUser(userData);
      // setError(null);
      history.push('/');
    } catch (e) {
      // setError("invalid login credentials");
    }
  }

  const handleRegister = async (formData) => {
    try {
      const userData = await registerUser(formData);
      setCurrentUser(userData);
      history.push('/');
    } catch (e) {
      // setError("invalid sign up info")
    }
  }

  // const handleLogout = () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem('authToken');
  //   removeToken();
  // }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={currentUser} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn handleLogin={handleLogin} />

        </Route>
        {/* <Route exact path="/sign-out">
          <SignOut setUser={setCurrentUser} clearUser={clearUser} />
        </Route> */}
        <Route exact path="/sign-up">
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route exact path="/restaurants">
          <Restaurants user={currentUser} />
        </Route>
        <Route exact path="/add-restaurant">
          <RestaurantCreate user={currentUser} />
        </Route>
        <Route exact path="/edit-restaurant/:id">
          <RestaurantEdit user={currentUser} />
        </Route>
        <Route exact path="/restaurant/:id">
          <RestaurantDetail user={currentUser} />
        </Route>
        <Route exact path="/about">
          <About user={currentUser} />
        </Route>
        <Route exact path="/restaurant">
          <Restaurants user={currentUser} />
        </Route>
        <Route exact path="/restaurants/user-restaurant">
          <UserRestaurants user={currentUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

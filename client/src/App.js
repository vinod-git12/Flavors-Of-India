import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./Screens/About/About";
import Home from "./Screens/Home/Home";
import RestaurantCreate from "./Screens/RestaurantCreate/RestaurantCreate";
import RestaurantDetail from "./Screens/RestaurantDetail/RestaurantDetail";
import RestaurantEdit from "./Screens/RestaurantEdit/RestaurantEdit";
import Restaurants from "./Screens/Restaurants/Restaurants";
import SignIn from "./Screens/SignIn/SignIn";
import SignOut from "./Screens/SignOut/SignOut";
import SignUp from "./Screens/SignUp/SignUp";
import UserRestaurants from "./Screens/UserRestaurants/UserRestaurants";
import { verifyUser } from "./services/user";

const App = () => {
  const [user, setUser] = useState(null);
  const clearUser = () => setUser(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/restaurants">
          <Listings user={user} />
        </Route>
        <Route exact path="/add-restaurant">
          <ListingCreate user={user} />
        </Route>
        <Route exact path="/edit-restaurant/:id">
          <ListingEdit user={user} />
        </Route>
        <Route exact path="/restaurant/:id">
          <ListingDetail user={user} />
        </Route>
        <Route exact path="/about">
          <About user={user} />
        </Route>
        <Route exact path="/restaurant">
          <Buy user={user} />
        </Route>
        <Route exact path="/restaurants/user-restaurant">
          <UserListings user={user} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./Screens/About/About";
import Layout from './components/shared/Layout/Layout';
import Home from "./Screens/Home/Home";
import RestaurantCreate from "./Screens/RestaurantCreate/RestaurantCreate";
import RestaurantDetail from "./Screens/RestaurantDetail/RestaurantDetail";
import RestaurantEdit from "./Screens/RestaurantEdit/RestaurantEdit";
import Restaurants from "./Screens/Restaurants/Restaurants";
import SignIn from "./Screens/SignIn/SignIn";
import SignUp from "./Screens/SignUp/SignUp";
import UserRestaurants from "./Screens/UserRestaurants/UserRestaurants";
import { verifyUser, registerUser, loginUser } from "./services/user";
import { createRestaurant, updateRestaurant, deleteRestaurant } from "./services/restaurants";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const [allRestaurants, setAllRestaurants] = useState([])
  const [updateToggle, setUpdateToggle] = useState(false)

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser);
      setError(null);
      history.push('/');
    } catch (e) {
      setError("invalid login credentials");
    }
  }

  const handleRegister = async (formData) => {
    try {
      const currentUser = await registerUser(formData);
      setCurrentUser(currentUser);
      history.push('/');
    } catch (e) {
      setError("invalid sign up info")
    }
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    // removeToken();
  }

  const createSubmit = async (restaurantData) => {
    const newRestaurant = await createRestaurant(restaurantData);
    setAllRestaurants(prevState => ([
      ...prevState,
      newRestaurant
    ]));
    history.push('/restaurants');
  }

  const updateSubmit = async (id, formData) => {
    const updatedRestaurant = await updateRestaurant(id, formData);
    setAllRestaurants(prevState => prevState.map(restaurant => {
      return restaurant.id === Number(id) ? updatedRestaurant : restaurant
    })
    )
    setUpdateToggle(prevState => !prevState)
    history.push('/restaurants');
  }

  const removeSubmit = async (id) => {
    await deleteRestaurant(id);
    setAllRestaurants(prevState => prevState.filter(restaurant => restaurant.id !== id));
    history.push('/restaurants');
  }
  

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
        >
      <Switch>
          
        <Route exact path="/sign-in">
          <SignIn handleLogin={handleLogin} />
          </Route>
          
        <Route exact path="/sign-up">
          <SignUp handleRegister={handleRegister} />
          </Route>
          
          {/* <Route path="/restaurants/user-restaurant">
            <UserRestaurants currentUser={currentUser} />
            </Route> */}
          
        <Route exact path="/restaurants">
            <Restaurants currentUser={currentUser}
          updateToggle={updateToggle}  />
          </Route>
          
        <Route exact path="/add-restaurant">
            <RestaurantCreate currentUser={currentUser}
              createSubmit={ createSubmit}/>
          </Route>
          
        <Route exact path="/edit-restaurant/:id">
            <RestaurantEdit currentUser={currentUser}
          updateSubmit={updateSubmit}  />
          </Route>
          
        <Route path="/restaurants/:id">
            <RestaurantDetail currentUser={currentUser}
              removeSubmit={removeSubmit}  />
          </Route>
          
        <Route path="/about">
          {/* <About currentUser={currentUser} /> */}
          </Route>
          
        {/* <Route path="/restaurant">
          <Restaurants currentUser={currentUser} />
          </Route> */}
          
          
        <Route path="/">
          <Home currentUser={currentUser} handleLogout={handleLogout}/>
          </Route>

        </Switch>
        </Layout>
    </div>
  );
  };


export default App;

import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Restaurants.css";
import { getRestaurants } from "../../services/restaurants";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import Search from "../../components/Search/Search";
import "../../components/Search/Search.css";

const Restaurants = (props) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [queriedRestaurants, setQueriedRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurants = await getRestaurants();
      setAllRestaurants(restaurants);
      setQueriedRestaurants(restaurants);
    };
    fetchRestaurants();
  }, []);


  const handleSearch = (e) => {
    const newQueriedRestaurants = allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedRestaurants(newQueriedRestaurants);
  };

  const handleSubmit = (e) => e.preDefault();

  const restaurantsJSX = queriedRestaurants.map((restaurant, index) => (
    <RestaurantCard
      id={restaurant._id}
      name={restaurant.name}
      img_url={restaurant.img_url}
      address={restaurant.address}
      key={index}
    />
  ));

  return (
    <Layout user={props.user}>
      <div>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        {/* <Restaurants /> */}
        <div className="restaurantcard">{restaurantsJSX}</div>
      </div>
    </Layout>
  );
};

export default Restaurants;

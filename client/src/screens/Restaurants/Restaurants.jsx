import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Restaurants.css";
import { getRestaurants } from "../../services/restaurants";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import Search from "../../components/Search/Search";
import "../../components/Search/Search.css";

const Restaurants = ({updateToggle}) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [queriedRestaurants, setQueriedRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurants = await getRestaurants();
      setAllRestaurants(restaurants);
      setQueriedRestaurants(restaurants);
    };
    fetchRestaurants();
  }, [updateToggle]);


  const handleSearch = (e) => {
    const newQueriedRestaurants = allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedRestaurants(newQueriedRestaurants);
  };

  const handleSubmit = (e) => e.preDefault();

  const restaurantsJSX = queriedRestaurants.map((restaurant, index, review) => (
    <RestaurantCard
      restaurant={restaurant}
      id={restaurant.id}
      name={restaurant.name}
      img_url={restaurant.img_url}
      address={restaurant.address}
      key={index}
    />
  ));

  return (
      <div>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        {/* <Restaurants /> */}
        <div className="restaurantcard">{restaurantsJSX}</div>
      </div>
    
  );
};

export default Restaurants;

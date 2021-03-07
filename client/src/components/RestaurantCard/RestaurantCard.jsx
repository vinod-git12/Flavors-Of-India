import React from "react";
// import ".RestaurantCard.css";
import { NavLink } from "react-router-dom";

const RestaurantCard = (props) => {
  const { img_url, name, address, id } = props;

  return (
    <div className="restaurant-div">
      <NavLink to={`/restaurant/${id}`}>
        <img className="img-restaurant" src={img_url} alt={name}></img>
        <div className="restaurant-title-box">
          <h1 className="h1-restaurant">{name}</h1>
          <h3 className="h3-restaurant">{address}</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default RestaurantCard;

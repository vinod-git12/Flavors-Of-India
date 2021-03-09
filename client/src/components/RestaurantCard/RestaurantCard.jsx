import React from "react";
import "./RestaurantCard.css";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { img_url, name, address, id } = props;

  return (
    <div className="restaurant-div">
      <Link to={`/restaurants/${id}`}>
        <img className="img-restaurant" src={img_url} alt={name}></img>
        <div className="restaurant-title-box">
          <h1 className="h1-restaurant">{name}</h1>
          <button>Reviews</button>
          
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;

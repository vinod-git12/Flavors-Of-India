import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Layout from "../../components/shared/Layout/Layout";
import { getRestaurant, getRestaurants } from "../../services/restaurants";



export default function RestaurantEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: "",
    address: ""
  });
  const { name, img_url, address } = formData;
  const { id } = useParams();

  const history = useHistory()
  const { updateSubmit} = props

  const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurantData = await getRestaurants();
      setRestaurants(restaurantData);
    }
    fetchRestaurant();
  }, [id])

  useEffect(() => {
    const prefillFormData = (props) => {
      const restaurantChange = restaurants.find((restaurant) => restaurant.id === Number(id));
      setFormData({
        name: restaurantChange.name,
        address: restaurantChange.address,
        img_url: restaurantChange.img_url
      });
    }
    if (restaurants.length) {
      prefillFormData();
    }
  }, [restaurants, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

    return (
      // <Layout currentUser={props.currentUser}>
        // <div className="restaurant-edit">
        //   <div className="edit-image-container">
        //     <img
        //       className="edit-restaurant-image"
        //       src={restaurant.img_url}
        //       alt={restaurant.name}
        //   />
        //   </div>
      <div className="form-container">
        <h1>Update Restaurant</h1>
        <form className="edit-form" onSubmit={(e) => {
          e.preventDefault();
          updateSubmit(id, formData)
          history.push('/restaurants')
        }}>
        <div>
          <input
            className="input-name"
            required
            type="text"
            name="name"
            value={name}
            placeholder="Name of Restaurant"
            onChange={handleChange}
            autoFocus
            />
            </div>
        
          <input
            className="create-address"
            required
            type="text"
            name="address"
            value={address}
            placeholder="address"
            onChange={handleChange}
          />
          <input
            className="create-input"
            required
            name="img_url"
            value={img_url}
            type="text"
            placeholder="Image-url"
            onChange={handleChange}
          />
          <button id="save-button" type="submit">
            Update Restaurant
            </button>
        </form>
        </div>
    );
  };

import Layout from "../../components/shared/Layout/Layout";
import "./RestaurantCreate.css";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function RestaurantCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    address: "",
  });

  const { name, img_url, address } = formData;
  const { createSubmit } = props;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

    
  return (
    // <Layout currentUser={props.currentUser}>
      <div className="background">
        <div className="create-container">
          <h3>Create A Restaurant</h3>

          <form onSubmit={(event) => {
            event.preventDefault();
            createSubmit(formData)
          }} className="create-form">
            <label className="label-create">Name of Restaurant</label>
            <input
              className="create-input"
              required
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name of Restaurant"
              onChange={handleChange}
              autoFocus
            />
        
            <label className="label-create">Address</label>
            <textarea
              className="create-address"
              required
              type="text"
              name="address"
              value={address}
              placeholder="address"
              onChange={handleChange}
            />
            <label className="label-create">Image Link</label>
            <input
              className="create-input"
              required
              name="img_url"
              value={img_url}
              type="text"
              placeholder="Image-url"
              onChange={handleChange}
            />
            <button id="sign-in-button" type="submit">
              Create Listing
            </button>
          </form>
        </div>
      
    </div>
    // </Layout>
  )
}

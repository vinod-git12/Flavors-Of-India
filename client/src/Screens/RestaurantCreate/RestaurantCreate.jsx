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
  const { createSubmit, error } = props;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

    
  return (
    // <Layout currentUser={props.currentUser}>
    <div className="form-wrapper">
    <h1>Create Restaurant</h1>
    <form onSubmit={(event) => {
      event.preventDefault();
      createSubmit(formData);
  }}>
  <div className="form-item">
  {
    error &&
    <p>{error}</p>
  }
 
  <input
    type='text'
      name='Name of Restaurant'
      placeholder='Name Of Restaurant'
    value={name}
    onChange={handleChange}
  />
 </div>
        
 <div className="form-item">
 
  <input
    type='text'
    name='img_url'
    placeholder='Image-URL'
    value={img_url}
    onChange={handleChange}
  />
  </div>

  <div className="form-item">
 
  <input
    type='text'
    name='address'
    placeholder='Address'
    value={address}
    onChange={handleChange}
  />
  </div>
  <div className="button-panel">
  <input
    type="submit"
    class="button"
    title="Create Restaurant"
      value="Create"></input>
    </div>
</form>

  </div>
            // </Layout>
  )
}

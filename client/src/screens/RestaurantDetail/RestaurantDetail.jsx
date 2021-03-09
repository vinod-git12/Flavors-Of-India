import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Layout from "../../components/shared/Layout/Layout";
import { getRestaurant } from "../../services/restaurants";
// import 


export default function RestaurantDetail(props) {
  const [restaurant, setRestaurant] = useState(null);
  const { removeSubmit } = props;
  // useState {reviews} = null

  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurantData = await getRestaurant(id);
      setRestaurant(restaurantData);
    }
    fetchRestaurant();
  }, [id])

  // useeffect fetchreviews

    console.log(restaurant)
  return (
    <Layout>
      <div className="restaurant-details">
        {
          restaurant &&
          <div className="card">
            
            <h3>{restaurant.name}</h3>
            <img src={restaurant.img_url} alt={restaurant.name} />
            <p>{restaurant.address}</p> 
            <Link to={`/edit-restaurant/${id}`}><button>Update</button></Link>
           <button onClick={() => removeSubmit(restaurant.id)}>Delete</button>
          </div>
        }
      </div>
    </Layout>
  )
}


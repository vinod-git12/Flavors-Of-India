import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Layout from "../../components/shared/Layout/Layout";
import { getRestaurant } from "../../services/restaurants";
import { getAllReviews } from '../../services/reviews';
import "./RestaurantDetail.css";


export default function RestaurantDetail(props) {
  const [restaurant, setRestaurant] = useState(null);
  const { removeSubmit } = props;
  // const [reviews, setReviews] = useState(null);
  // const [reviewData, setReviewData] = useState({
  //   review: '',
  //   user_id: "",
  //   post_id: ""
  // });

  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurantData = await getRestaurant(id);
      setRestaurant(restaurantData);
    }
    fetchRestaurant();
  }, [id])

  // useeffect for fetchReviews
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const reviewData = await getAllReviews(id)
  //     setReviews(reviewData)
  //   }
  //   fetchReviews();
  //   }, [id])

  return (
    // <Layout>
      <div className="restaurant-details">
        {
        restaurant &&
        
          <div className="restaurant-image-container">
            <img src={restaurant.img_url}
            alt={restaurant.name}
            className="restaurant-image" />
          
          <div className="restaurant-deatils-container"> 
            <h3>{restaurant.name}</h3>
            <h2>{restaurant.address}</h2>
          </div>

          <div className="restaurant-reviews"><h2>Reviews</h2>
            {
              restaurant.reviews.map((review) => {
                return <h3>{ review.content}</h3>
              })
            }
          </div>

          <div>
            <Link to={`/edit-restaurant/${id}`}><button>Update</button></Link>
            <button onClick={() => removeSubmit(restaurant.id)}>Delete</button>
          </div>
            
         </div>
        }
      </div>
    // </Layout>
  )
}


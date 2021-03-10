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
    <div>
        {
        restaurant &&
        <div className="restaurant-details">

          <div className="restaurant-image-container">
            <img src={restaurant.img_url}
            alt={restaurant.name}
            className="restaurant-image" />
          </div>

          <div className="restaurant-info">
          <div className="restaurant-details-container"> 
            <h3 name-h3> <strong>Name: </strong>{restaurant.name}</h3>
            <h2> Address : {restaurant.address}</h2>
          </div>


          <div className="restaurant-updatedelete">
            <Link to={`/edit-restaurant/${id}`}><button>Update</button></Link>
            <button onClick={() => removeSubmit(restaurant.id)}>Delete</button>
          </div>
      </div>
          <div className="restaurant-reviews"><h3><strong>Reviews</strong></h3>
            {
              restaurant.reviews.map((review) => {
                return <h4>{ review.content}</h4>
              })
            }
          </div>
      
            </div>
            
      }
      </div>
    // </Layout>
  )
}


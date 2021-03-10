// import React, { useState, useEffect } from "react";
// import "./UserRestaurants.css";
// import Layout from "../../components/shared/Layout/Layout";
// import { getUser } from "../../services/user";
// import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

// const UserRestaurants = ({ user }) => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const currentUser = await getUser(user.id);
//       setRestaurants(currentUser.restaurants);
//     };
//     user && fetchUser();
//   }, [user]);

//   const restaurantsJSX = restaurants.map((restaurant, index) => (
//     <RestaurantCard
//       id={restaurant._id}
//       name={restaurant.name}
//       imgURL={restaurant.imgURL}
//       key={index}
//     />
//   ));

//   return (
//     <Layout user={user}>
//       <div className="restaurantcard user-restaurants">{restaurantsJSX}</div>
//     </Layout>
//   );
// };

// export default UserRestaurants;

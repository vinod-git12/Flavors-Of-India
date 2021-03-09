// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Layout from "../../components/shared/Layout/Layout";


// export default function RestaurantEdit() {
//   const [formData, setFormData] = useState({
//     name: ''
//   });
//   const { name } = formData;
//   const { restaurants, handleUpdate } = props;
//   const { id } = useParams();

//   useEffect(() => {
//     const prefillFormData = () => {
//       const restaurantChange = restaurants.find((restaurant) => restaurant.id === Number(id));
//       setFormData({
//         name: restaurantChange.name
//       });
//     }
//     if (restaurants.length) {
//       prefillFormData();
//     }
//   }, [restaurants, id])

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
  

//   return (
//     <Layout currentUser={props.currentUser}>
//       <div className="restaurant-edit">
//         <div className="edit-image-container">
//           <img
//             className="edit-restaurant-image"
//             src={restaurant.img_url}
//             alt={restaurant.name}
//             />
//           <form className="edit-form" onSubmit={() => {
//             // event.preventDefault();
//             Submit(formData)
//           }}>
//             <input
//               className="input-name"
//               required
//               type="text"
//               name="name"
//               value={restaurant.name}
//               placeholder="Name of Restaurant"
//               onChange={handleChange}
//               autoFocus
//             />
        
//             <input
//               className="create-address"
//               required
//               type="text"
//               name="address"
//               value={address}
//               placeholder="address"
//               onChange={handleChange}
//             />
//             <input
//               className="create-input"
//               required
//               name="img_url"
//               value={restaurant.img_url}
//               type="text"
//               placeholder="Image-url"
//               onChange={handleChange}
//             />
//             <button id="save-button" type="submit">
//                Update Restaurant
//             </button>
//           </form>
//         </div>
//     </Layout>
//   );
// };

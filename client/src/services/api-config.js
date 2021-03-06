import axios from "axios";


const baseUrl = process.env.NODE_ENV === 'production' ? "deployed link here" : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
},
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  })
;

export default api;

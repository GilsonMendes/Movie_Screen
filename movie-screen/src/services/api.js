//Base url: https://api.themoviedb.org/3
// Url: /movie/550?api_key=7469f64c97c650cc947bf31db5f7915a

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;
import axios from 'axios'

// base da URL:https://api.themoviedb.org/3/

// URL da api: movie/now_playing?api_key=88e105eb0a18788085edf385811cdb97


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api
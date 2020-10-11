import Axios from "axios";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
 

 const fetchMovies = () => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(res => dispatch({
            type: 'FETCH_DATA',
            payload: res.data.results
        })).catch(err => dispatch({
            type: 'CREATE_ERROR',
            payload: err
        }))
}

const fetchMovie = (id) => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(res => dispatch({
        type: 'FETCH_MOVIE', 
        payload: res
    })).catch(err => dispatch({
        type: 'CREATE_ERROR',
        payload: err
    }))
}

export  { fetchMovies, fetchMovie  }
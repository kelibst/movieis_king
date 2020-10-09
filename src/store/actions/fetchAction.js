import Axios from "axios";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
 

 const fetchMovies = () => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(res => dispatch({
            type: 'FETCH_DATA',
            payload: res.data.results
        })).catch(err => console.log(err))
}

export default fetchMovies
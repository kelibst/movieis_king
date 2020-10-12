import Axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const movieUrl = (keyword, page = 1) => {
  console.log(process.env.REACT_APP_MOVIEDB_API_KEY)
  switch (keyword) {
    case 'DISCOVER':
      return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    case 'POPULAR':
      return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    case 'UPCOMING':
      return `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
    case 'TRENDING':
      return `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
    default:
      return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  }
};

const fetchMovies = (keyword, page) => dispatch => {
  const genUrl = movieUrl(keyword, page);
  Axios.get(genUrl)
    .then(res => dispatch({
      type: 'FETCH_DATA',
      payload: res.data.results,
    })).catch(err => dispatch({
      type: 'CREATE_ERROR',
      payload: err,
    }));
};

const fetchMovie = id => dispatch => {
  Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(res => dispatch({
      type: 'FETCH_MOVIE',
      payload: res,
    })).catch(err => dispatch({
      type: 'CREATE_ERROR',
      payload: err,
    }));
};

export { fetchMovies, fetchMovie };

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
  filter: []
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        movies: action.payload,
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload,
      };
      case 'FILTER_MOVIES':
        console.log("filtering movies", action.payload)
        return{
          ...state, 
          filter: action.payload
        }
    default:
      return state;
  }
};

export default searchReducer;

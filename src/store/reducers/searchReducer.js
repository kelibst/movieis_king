const initialState = {
  text: '',
  movies: [],
  search: [],
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
        return{
          ...state, 
          filter: action.payload
        }
        case 'SEARCH_MOVIE':
          console.log('movie', action.payload);
          return {
            ...state,
            search: action.payload
          }
    default:
      return state;
  }
};

export default searchReducer;

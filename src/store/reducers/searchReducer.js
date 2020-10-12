const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
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
    default:
      return state;
  }
};

export default searchReducer;

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
      console.log(action.act)
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

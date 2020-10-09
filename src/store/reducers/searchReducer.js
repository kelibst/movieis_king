const initialState = {
    text: "",
    movies: [],
    loading: false,
    movie: []
}
const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_DATA":
            console.log(action.payload)
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}

export default  searchReducer  
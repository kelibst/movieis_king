const errorReducer = (state = {err: ''}, action) => {
    switch(action.type){
        case 'SEARCH_ERR':
            return {
                ...state,
                err: action.payload
            };
        default: 
        return state
    }
}

export default errorReducer
let initialState = {
    loading:false,
    message: null,
    isRedirect:false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case `LOADING`:
            return{...state, loading: true}
        case `ADD_SUCCESS`:
            return{...state, message:action.payload, isRedirect:true, loading: false}
        case `ADD_ERROR`:
            return{...state, message:action.payload, loading: false}
        case `GET_SUCCESS`:
            return{...state, message: action.payload, loading: false}
        case `GET_ERROR`:
            return{...state, message: action.payload, loading: false}   
        default:
            return state
    }
}

export default userReducer
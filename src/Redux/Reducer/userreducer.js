let initialState = {
    loading:false,
    message: null,
    isRedirect:false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case `LOADING`:
            return{...state, loading: true}
        case `USER_SUCCESS`:
            return{...state, message:action.payload, isRedirect:true, loading: false}
        case `USER_ERROR`:
            return{...state, message:action.payload, loading: false}  
        default:
            return state
    }
}

export default userReducer
let initialState = {
    loading:false,
    message: null,
    data: null,
    messagedelete: null
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case `LOADING`:
            return{...state, loading: true}
        case `ADD_SUCCESS`:
            return{...state, message:action.payload,  loading: false}
        case `ADD_ERROR`:
            return{...state, message:action.payload, loading: false}
        case `GET_SUCCESS`:
            return{...state, data: action.payload, loading: false}
        case `GET_ERROR`:
            return{...state, data: action.payload, loading: false} 
        case `GETDETAIL_SUCCESS`:
            return{...state, data: action.payload, loading:false}
        case `GETDETAIL_ERROR`:
            return{...state, data:action.payload, loading:false}
        case `DELETE_SUCCESS`:
            return{...state, messagedelete: action.payload, loading: false}
        case `DELETE_ERROR`:
            return{...state, messagedelete: action.payload, loading : false}
        default:
            return state
    }
}

export default projectReducer
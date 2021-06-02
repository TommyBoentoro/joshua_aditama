import axios from "axios"

export const onAddData = (addData) => {
    return(dispatch) => {
        dispatch({
            type : `LOADING`
        })
        axios.post(`http://localhost:4000/data-system/addData`, addData)
        .then((res) => {
            console.log(res.data.message)
            if(res.data.error === false){
                dispatch({
                    type: `ADD_SUCCESS`,
                    payload: res.data.message
                })
            }else {
                dispatch({
                    type: `ADD_ERROR`,
                    payload : res.data.message
                })
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch ({
                type: `ADD_ERROR`,
                payload: err.response.data.message
            })
        })
    } 
}

export const onGetData = (data) => {
    return(dispatch) => {
        dispatch({
            type: `LOADING`
        })
        axios.get(`http://localhost:4000/data-system/getData`, data)
        .then((res) => {
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
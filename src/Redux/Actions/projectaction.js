import axios from "axios"

export const onAddData = (addData) => {
    return(dispatch) => {

        let data = {
            token: addData.token
        }

        dispatch({
            type : `LOADING`
        })
        axios.post(`http://localhost:4000/data-system/addData`, addData)
        .then((res) => {
            console.log(res.data.message)
            dispatch({
                type: `ADD_SUCCESS`,
                payload: res.data.message
            })
            // axios.post(`http://localhost:4000/data-system/getData`,data)
            // .then((response) => {
            //     dispatch(
            //         {
            //             type: `ADD_SUCCESS`,
            //             payload: res.data.message
            //         }
            //     )
            // })
            // .catch((error)=>{
            //     console.log(error)
            //     dispatch(
            //         {
            //             type: `ADD_ERROR`,
            //             payload: error.response.data.message
            //         }
            //     )
            // })
        })
        .catch((err) => {
            console.log(err)
            dispatch ({
                type: `ADD_ERROR`,
                payload: err.res.data.message
            })
        })
    } 
}

export const onGetData = (data) => {
    return(dispatch) => {
        
        axios.post(`http://localhost:4000/data-system/getData`, data)
        .then((res) => {
            console.log(res.data.message)
            dispatch({
                type: `GET_SUCCESS`,
                payload: res.data.Data
            })
          
          
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
               type: `GET_ERROR`,
               payload: err.res.data.messgae
           })
        })
    }
}
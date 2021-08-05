import axios from "axios"

// export const onAddData = (fd) => {
//     return(dispatch) => {

        

//         dispatch({
//             type : `LOADING`
//         })
//         axios.post(`http://localhost:4000/data-system/upload-image`, fd)
//         .then((res) => {
//             console.log(res)
//             // dispatch({
//             //     type: `ADD_SUCCESS`,
//             //     payload: res.data.message
//             // })
//             // 
//             // axios.post(`http://localhost:4000/data-system/getData`,data)
//             // .then((response) => {
//             //     dispatch(
//             //         {
//             //             type: `ADD_SUCCESS`,
//             //             payload: res.data.message
//             //         }
//             //     )
//             // })
//             // .catch((error)=>{
//             //     console.log(error)
//             //     dispatch(
//             //         {
//             //             type: `ADD_ERROR`,
//             //             payload: error.response.data.message
//             //         }
//             //     )
//             // })
//         })
//         .catch((err) => {
//             console.log(err)
//             // dispatch ({
//             //     type: `ADD_ERROR`,
//             //     payload: err.res.data.message
//             // })
//         })
//     } 
// }

export const onAddData = (fd) =>{
    return(dispatch) => {
        dispatch({
            type : `LOADING`
        })

        axios.post(`http://localhost:4000/data-system/upload-image`, fd)
        .then((res) => {
            // console.log(res)
            dispatch({
                type: `ADD_SUCCESS`,
                payload: res.data.message
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type: `ADD_ERROR`,
                payload: err.res.data.message
            })
        })
    }
  
}

export const onDelete = (id) => {
    return(dispatch) =>{
        dispatch({
            type: `LOADING`
        })

        axios.delete(`http://localhost:4000/data-system/delete-product/` + id)
        .then((res)=>{
            console.log(res)
            
        })
        .catch((error)=>{
            console.log(error)
          
        })
    }
}

export const onGetData = () => {
    return(dispatch) => {
        axios.get(`http://localhost:4000/data-system/get-product`)
        .then((res) => {
            // console.log(res)
            try {
                dispatch({
                    type: `GET_SUCCESS`,
                    payload: res.data.detail
                })
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type:`GET_ERROR`,
                payload: err.res.data.message
            })
        })
    }
}

export const onGetDetailProject = (idProduct) => {
    return(dispatch) => {

        dispatch({
            type: `LOADING`
        })

        axios.get(`http://localhost:4000/data-system/project-detail/${idProduct}`)
        .then((res) => {
            console.log(res.data.detail)
            try {
                dispatch({
                    type: `GETDETAIL_SUCCESS`,
                    payload: res.data.detail
                })
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type:`GET_ERROR`,
                payload:err.res.data.message
            })
        })
    }
}

// export const onUserLogout = (data) => {
//     return(dispatch) => {
//         dispatch({
//             type: `LOADING`
//         })
//         axios.post(`http://localhost:4000/user-system/logout`,data)
//         .then((res) => {
//             console.log(res.data)
//         })
//         .catch((err)=> {
//             console.log(err)
//         })
//     }
  
// }
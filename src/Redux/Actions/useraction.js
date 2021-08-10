import axios from "axios"

export const onUserLogin = (data) => {
    return(dispatch) => {
        dispatch({
            type: `LOADING`
        })
        axios.post(`https://backend-joshua.herokuapp.com/user-system/login`,data)
        .then((res) => {
            console.log(res.data.data.token)
            console.log(res.data.message)
            if(res.data.error === false){

                localStorage.setItem("my-tkn", res.data.data.token)
                dispatch({
                    type: `USER_SUCCESS`,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type:`USER_ERROR`,
                    payload:res.data.message
                })
            }
        })
        .catch((err)=>{
            console.log(err)
            console.log(err)
            dispatch({
                type: `USER_ERROR`,
                payload: `username & password doesn't match`     //err.response.data.message
            })
        })
    }
}

export const onSubmitMessage = (name, email, contact, letter) => {
    return(dispatch) => {
        // dispatch(
        //     {
        //         type: `LOADING`
        //     }
        // )
        axios.post(`http://localhost:4000/user-system/send-email`, {name: name, email: email, contact: contact, letter: letter})
        .then((res) => {
            console.log(res)
            dispatch(
                {
                    type: `MESSAGE_SUCCESS`,
                    payload: res.data.message
                }
            )
        })
        .catch((err) => {
            
            console.log(err)
        })
    } 
}

export const onUserLogout = (data) => {
    return(dispatch) => {
        dispatch({
            type: `LOADING`
        })

        axios.post(`https://backend-joshua.herokuapp.com/user-system/logout`,data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error === false){
                localStorage.removeItem("my-tkn")
                window.location='/adminpage'
            }
        })
        .catch((err)=> {
            console.log(err)
        })
    }
  
}

export const onChangePassword = (dataToSend) => {
    return(dispatch) => {
        dispatch({
            type: `LOADING`
        })

        axios.post(`https://backend-joshua.herokuapp.com/user-system/change`, dataToSend)
        .then((res) =>{
            console.log(res.data)
            if(res.data.error === false){
                alert(`Change Password Success`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
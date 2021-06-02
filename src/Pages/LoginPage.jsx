import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

// Action
import {onUserLogin} from "../Redux/Actions/useraction"

class LoginPage extends React.Component{

    onLogin = () => {
        let data = {
            username : this.username.value,
            password : this.password.value
        }
        this.props.onUserLogin(data)
    }

    render(){
        if(this.props.user.isRedirect){
            return(
                <Redirect to ="/adminpage"/>
            )
        }
            return(
                <div className="container">
                    <div>
                        Admin Page Login
                    </div>
                    <br />
                    <div>
                        <input type="text" ref={(e)=> this.username=e} placeholder="Username" />
                    </div>
                
                    <div>
                        <input type="text" ref={(e) => this.password=e} placeholder=" Password" />
                    </div>
                    
                    <div>
                        <input type="button" onClick={() => this.onLogin()} value="login" className="btn btn-primary" />
                    </div>
                    
                    <h6 className="mt-1 text-danger">
                        {
                            this.props.user.message  
                        }
                    </h6>
                </div>
            )
    }
}

const mapDispatchToProps = {
    onUserLogin
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginPage)
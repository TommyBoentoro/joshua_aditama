import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

// Action
import {onUserLogin} from "../Redux/Actions/useraction"

class LoginPage extends React.Component{

    state = {
        is_login: false
    }

    onLogin = () => {
        let data = {
            username : this.username.value,
            password : this.password.value
        }
        this.setState({is_login: true})
        this.props.onUserLogin(data)
    }

    render(){
        if(this.props.user.isRedirect){
            return(
                <Redirect to ="/adminpage"/>
            )
        }
            return(
                <div className="container" style={{paddingTop:"300px"}}>
                    <div>
                        Admin Page Login
                    </div>
                    <br />
                    <div>
                        <input type="text" ref={(e)=> this.username=e} placeholder="Username" />
                    </div>
                    <br />
                    <div>
                        <input type="password" ref={(e) => this.password=e} placeholder=" Password" />
                    </div>
                    <br />
                    
                    <div>
                        <input type="button" onClick={() => this.onLogin()} value="login" className="btn btn-primary" />
                    </div>
                    
                    <h6 className="mt-3 text-danger">
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
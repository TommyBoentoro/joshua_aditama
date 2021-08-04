import React from "react"
import {Modal, ModalBody} from "reactstrap"
import {connect} from "react-redux"

// Action
import {onChangePassword} from "./../Redux/Actions/useraction"

class createModal extends React.Component{
    state = {
        showModal : false,
        is_login : false
    }

    componentDidMount(){
        this.login()
    }

    login = () => {
        let tokenLogin = localStorage.getItem("my-tkn")
        console.log(tokenLogin)

        if(tokenLogin){
            this.setState({is_login:true})
        }else{
            this.setState({is_login:false})
        }
    }

    onSubmit = () => {
        let newPassword = this.newPassword.value
        let confirmPassword = this.confirmPassword.value
        let token = localStorage.getItem("my-tkn")

        let dataToSend = {
            newPassword,
            token
        }

        if(newPassword === confirmPassword){
            this.props.onChangePassword(dataToSend)
            this.setState({showModal:false})
        }

        console.log(dataToSend)
        
    }


    render(){
        return(
            <div>
                <input type="button" value="Change Password" disabled={this.state.is_login?false : true} className="btn btn-primary" onClick={() => this.setState({showModal:true})} />
                <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal}>
                    <ModalBody className="px-5 py-5">
                        <div style = {{fontSize: "30px", fontWeight: "400", marginTop: "20px", lineHeight: "200%"}}>
                            <p>
                                Change Password
                            </p>
                        </div>
                        <div className="form-group" style = {{fontSize: "20px" , fontWeight: "bold", marginTop: "40px"}}>
                            <label>New Password</label>
                            <input type="text" ref={e => this.newPassword = e} className="form-control" placeholder="Input new password" style={{borderRadius: "25px", fontSize:"14px", marginTop: "-5px"}}/>
                        </div>

                        <div className="form-group mt-1" style = {{fontSize: "20px", fontWeight: "bold"}}>
                            <label>Confirm New Password</label>
                            <input type="text" ref={e => this.confirmPassword = e} className="form-control" placeholder="Confirm new password" style={{borderRadius: "25px", fontSize:"14px", marginTop: "-5px"}} />
                        </div>  
                        
                       
                        <div className="d-flex justify-content-end" style={{marginTop : "70px"}}>
                            <input type="button" value="Submit" onClick={() => this.onSubmit()} className="btn btn-primary" />
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onChangePassword
}

export default connect("", mapDispatchToProps) (createModal)
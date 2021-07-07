import React from "react"
import {Link} from "react-router-dom"
import {connect } from "react-redux"

//Import Images
import logo from "./../Assets/logo-2.png"

// Import Css
import "./../Supports/home.css"
import "./../Supports/hover.css"

// Import Action
import { onSubmitMessage } from "../Redux/Actions/useraction"

class ContactUs extends React.Component{

    onSubmit = () => {
        let name = this.name.value
        let email = this.email.value
        let contact = this.contact.value
        let letter = this.letter.value

        this.props.onSubmitMessage(name, email, contact, letter)
    }

    render(){
        return(
            <div className="container " style={{width: "100%"}}>
                <div >
                    <div className="d-flex flex-row fontlato container justify-content-center " style={{paddingTop:"245px"}} >
                        <div className="col-10 ">
                                <div className="row justify-content-lg-between">    
                                    <div>
                                        <div className = "fontlato" style={{fontSize: "36px", fontWeight:"400"}}>
                                            Contact
                                        </div>
                                        <div style = {{marginTop: "40px", fontSize: "18px", fontWeight:"normal" , color:"#8f8f8f"}}>
                                            Phone number / Whatsapp
                                        </div>
                                        <div style = {{marginTop: "20px", fontSize: "24px", color:"#8f8f8f", fontWeight:"700"}}>
                                            +62 811 2610045
                                        </div>
                                    </div>
                                    <div >
                                        <div className = "fontlato" style={{fontSize: "36px", marginLeft:"30px", fontWeight:"400"}}>
                                            Get In Touch
                                        </div>
                                        <div className = "wrapper" >
                                            <div className="input-data" style={{marginRight:"20px"}}>
                                                <input type="text" ref={(e) => this.name=e} required/>
                                                <label> Name </label>
                                            </div>
                                        </div>
                                        <div className = "wrapper" >
                                            <div className="input-data" style={{marginRight:"20px"}}>
                                                <input type="text" ref={(e) => this.email=e} required/>
                                                <label> Email </label>
                                            </div>
                                        </div>
                                        <div className = "wrapper" >
                                            <div className="input-data" style={{marginRight:"20px"}}>
                                                <input type="text" ref={(e) => this.contact=e} required/>
                                                <label> Contact Number </label>
                                            </div>
                                        </div>
                                        <div className = "wrapper" >
                                            <div className="input-data" style={{marginRight:"20px"}}>
                                                <input type="text" ref={(e) => this.letter=e} required/>
                                                <label> Message </label>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="button" onClick={() => this.onSubmit()} value="Submit" className="fontlato btn-1" style={{width:"121px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", marginTop:"54px", marginLeft:"30px", border:"1px solid black" }} />
                                            <h6 style={{marginLeft:"30px", marginTop:"20px", color:"red"}}>
                                                {
                                                    this.props.user.letter
                                                }
                                            </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
           
        )
    }
}

const mapDispatchToProps = {
    onSubmitMessage
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)


import React from "react"
import {Link} from "react-router-dom"
import {connect } from "react-redux"

//Import Images
import logo from "./../Assets/logo-2.png"

// Import Css
import "./../Supports/responsive.css"
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
            <div className="container  px-md-3 px-0" >
                <div >
                    <div className="d-flex flex-row  px-md-3 px-sm-0 px-5 fontlato container justify-content-center paddingcontact" >
                        <div className="col-md-10 col-sm-12 ">
                                <div className="row"> 
                                    <div className="col-sm-4 col-12">
                                        <div className = "fontlato fontheadingcontact" style={{fontWeight:"400"}}>
                                            Contact
                                        </div>
                                        <div className="fontbodyphone marginphone" style = {{fontWeight:"normal" , color:"#8f8f8f"}}>
                                            Phone number / Whatsapp
                                        </div>
                                        <div className="fontsubheadingnumber" style = {{marginTop: "20px",  color:"#8f8f8f", fontWeight:"700"}}>
                                            +62 811 2610045
                                        </div>
                                    </div>

                                    <div className="col-sm-8 col-12 marginInTouch " >
                                        <div  className = "fontlato mx-sm-4 fontheadingcontact" style={{  fontWeight:"400"}}>
                                            Get In Touch
                                        </div>
                                        <div className = "col wrapper mx-sm-4  margininput" >
                                            <div className="input-data " >
                                                <input type="text" ref={(e) => this.name=e} required/>
                                                <label> Name </label>
                                            </div>
                                        </div>
                                        <div className = "col wrapper mx-sm-4" >
                                            <div className="input-data" >
                                                <input type="text" ref={(e) => this.email=e} required/>
                                                <label> Email </label>
                                            </div>
                                        </div>
                                        <div className = "col  wrapper mx-sm-4" >
                                            <div className="input-data" >
                                                <input type="text" ref={(e) => this.contact=e} required/>
                                                <label> Contact Number </label>
                                            </div>
                                        </div>
                                        <div className = "col  wrapper mx-sm-4" >
                                            <div className="input-data" >
                                                <input type="text" ref={(e) => this.letter=e} required/>
                                                <label> Message </label>
                                            </div>
                                        </div>
                                        <div className="text-sm-left text-center">
                                            <input type="button" onClick={() => this.onSubmit()} value="Submit" className="fontlato btn-11 marginleftbutton" style={{width:"121px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", marginTop:"54px", border:"1px solid black" }} />
                                            <h6 className="marginleftbutton" style={{marginTop:"20px", color:"red"}}>
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


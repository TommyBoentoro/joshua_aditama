import React from "react"
import {connect } from "react-redux"

// Import Css
import "./../Supports/home.css"
import "./../Supports/hover.css"
import "./../Supports/contactUs.css"
import "./../Supports/responsive.css"

// Import Image
import logo from "./../Assets/logo-2.png"

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
            <>
            {/* <div className="container px-md-3 px-0 displayContactUs2" >
                <div >
                    <div className="d-flex flex-row px-md-3 px-sm-0 px-4 fontlato container justify-content-center paddingcontact" >
                        <div className="col-md-12 col-sm-12">
                                <div className="row"> 
                                    <div className="col-sm-8 col-12">
                                        <div  className = "fontlato mx-sm-4 fontheadingcontact" style={{fontWeight:"400"}}>
                                            For new project inquiries, please  do not hesitate to contact us via whatsapp number or kindly drop an email.
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-12 marginInTouch">
                                        <div className = "fontlato fontheadingcontact" style={{fontWeight:"400"}}>
                                            Contact
                                        </div>
                                        <div className="fontbodyphone marginphone" style = {{fontWeight:"normal" , color:"#8f8f8f"}}>
                                            Phone number / Whatsapp
                                        </div>
                                        <div className="fontsubheadingnumber" style = {{marginTop: "20px",  color:"#8f8f8f", fontWeight:"700"}}>
                                            +62 811 2610045
                                        </div>
                                        <div className="fontbodyphone marginphone" style = {{fontWeight:"normal" , color:"#8f8f8f"}}>
                                            Email
                                        </div>
                                        <a href="mailto:Jaditama@gmail.com" className="fontsubheadingnumber">
                                            <div  style = {{marginTop: "20px",  color:"#8f8f8f", fontWeight:"700"}}>
                                                Jaditama@gmail.com
                                            </div>
                                        </a>
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
            </div> */}

            <div className="displayContactUs">
                <div className="container d-flex flex-column align-items-center fontlato">
                    <div className="marginContact text-contactus col-sm-8 col-md-12 col-12 px-0">
                        <div className="d-flex justify-content-center">
                            <div>
                                For new
                            </div>
                            <div className="px-2" style={{fontWeight:"400"}}>
                                project
                            </div>
                            <div>
                                inquiries,
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div>
                                please do not hesitate to
                            </div>
                            <div className="px-2" style={{fontWeight:"400"}}>
                                contact us
                            </div>
                            <div>
                                via
                            </div>
                        </div>
                        <div>
                            whatsapp number or kindly drop an email
                        </div>
                    </div>
                    <a href="mailto:Jaditama@gmail.com">
                        <input type="button" value="Contact now" className="button-contact fontlato"/>
                    </a>
                </div>
            </div>

            <div className="displayContactUs">
                <div className="container d-sm-flex justify-content-between fontlato px-md-3 px-0">
                    <div>
                        <div className="d-flex justify-content-center textwhatsapp">
                            WHATSAPP
                        </div>
                        <div className="textWaNumber d-flex justify-content-center">
                            +62 811 2610045
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center textwhatsapp">
                            EMAIL
                        </div>
                        <div className="textWaNumber d-flex justify-content-center">
                            Jaditama@gmail.com
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center textwhatsapp">
                            INSTAGRAM
                        </div>
                        <div  className="d-flex justify-content-center">
                            <a className="textWaNumber" href="https://www.instagram.com/joshua_aditama/">@joshua_aditama</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="background3 fontlato footer" style={{height:"100%"}}>
                        <div className="container-md px-md-3 px-sm-5 px-4 d-sm-flex footerdua">
                            <div className="col-md-6 d-sm-flex d-none px-md-3 px-sm-0 px-0">
                                <a href="/"> <img src={logo} alt="logo" className="logowidth"/> </a>
                            </div>
                            <div className="col-sm-6 col-12 d-sm-flex px-md-3 px-2">
                                <div className="col-sm-5 col-12 text-md-left px-md-3 px-0">
                                    <div>
                                        <a href="/" className=" fontsubheading-footer"> Home </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/project" className="fontsubheading-footer"> Project </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/studio" className="fontsubheading-footer" > Studio </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/contactus" className="fontsubheading-footer"> Contact </a>
                                    </div>
                                </div>
                                <div className="col-sm-7 col-12 text-md-left py-md-0 py-sm-0 py-5 px-md-3 px-0">
                                    <div className="follow socialmedia1" style={{ letterSpacing:"0.02cm", lineHeight:"29px"}} >
                                        Follow My Social Media
                                    </div>
                                    <div className="follow socialmedia2" style={{ letterSpacing:"0.02cm", lineHeight:"29px"}} >
                                        Social Media
                                    </div>
                                    <div  style={{ marginTop:"30px"}}>
                                        <a href="https://www.instagram.com/joshua_aditama/" className="fontsubheading-footer"> Instagram  </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center fontlato rights" style={{ fontSize:"11px", fontWeight:"300"}}>
                            © 2021 Joshua Aditama. All Rights Reserved
                        </div>
                    </div>
            </>
            
           
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


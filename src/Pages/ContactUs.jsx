import React from "react"
import {Link} from "react-router-dom"

//Import Images
import logo from "./../Assets/logo-2.png"

// Import Css
import "./../Supports/home.css"
class ContactUs extends React.Component{
    render(){
        return(
            <div style={{width: "100%"}}>
                 <div style={{marginLeft: "130px", marginRight: "130px"}}>
                 <nav className = "navbar  d-flex flex-row justify-content-between container1" style={{marginTop:"50px"}}>
                        <div>
                            <img src={logo} alt="logo"  />
                        </div>
                        <div className = "d-flex flex-row">
                            <div>
                                <Link to="/project" className="fontlato" style={{color: "black"}}>PROJECT</Link>
                            </div>
                            <div className="fontlato" style = {{marginRight: "45px", marginLeft: "45px"}}>
                                <Link to="/studio"  className="fontlato" style={{color: "black"}} >STUDIO</Link>
                            </div>
                            <div className= "fontlato">
                                <Link to="/contactus"  className="fontlato" style={{color: "black"}} >CONTACT US</Link>
                            </div>
                        </div> 
                    </nav>
                        <div className="d-flex flex-row fontlato" style={{marginTop: "145px"}}>
                            <div style={{marginLeft: "101px"}}>
                                <div className = "fontlato" style={{fontSize: "36px"}}>
                                    Contact Us
                                </div>
                                <div style = {{marginTop: "40px", fontSize: "18px", fontWeight:"normal"}}>
                                    Phone number / Whatsapp
                                </div>
                                <div style = {{marginTop: "20px", fontSize: "24px"}}>
                                    +6211111111
                                </div>
                                <div style = {{ marginTop: "5px", fontSize: "24px"}}>
                                    +6234567890
                                </div>
                            </div>
                            <div style={{marginLeft: "219px"}}>
                                <div className = "fontlato" style={{fontSize: "36px"}}>
                                    Get In Touch
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name" style={{width: "575px", height: "36px", color: "darkgray", marginTop: "40px"}}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email" style={{width: "575px", height: "36px", color: "darkgray", marginTop: "40px"}}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Contact Number" style={{width: "575px", height: "36px", color: "darkgray", marginTop: "40px"}}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Message" style={{width: "575px", height: "36px", color: "darkgray", marginTop: "40px"}}/>
                                </div>
                                <input type="button" value="Submit" className="btn btn-dark" style ={{marginTop: "60px"}} />
                            </div>
                        </div>       
                </div>

                <div className= "background3 border border-white" style={{width: "100%", height: "723px"}}>
                            
                                <div className=" d-flex flex-row justify-content-between" style={{marginTop:"224px", marginLeft:"130px", marginRight:"130px", height:"343px"}}>
                                        <div>
                                            <img src={logo} alt="logo" />
                                        </div>
                                            <div>
                                                <div className=" d-flex flex-row fontlato" style={{width:"566px" , fontSize:"24px", fontWeight:"normal", color:"grey"}}>
                                                    <div style={{width:"303px"}}>
                                                        <div>
                                                            Home
                                                        </div>
                                                        <div style={{marginTop:"30px"}}>
                                                            Project
                                                        </div>
                                                        <div style={{marginTop:"30px"}}>
                                                            Studio
                                                        </div>
                                                        <div style={{marginTop:"30px"}}>
                                                            Contact Us
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div style={{fontWeight:"bold", color:"black"}}>
                                                            Follow My Social media
                                                        </div>
                                                        <div style={{marginTop:"30px"}} > Instagram </div>
                                                        <div style={{marginTop:"30px"}}>Facebook</div>
                                                        <div style={{marginTop:"30px"}}>Twitter</div>
                                                </div>
                                            </div> 
                                        </div>
                                </div>
                                <div className="d-flex justify-content-center fontlato" style={{fontSize:"11px", marginTop: "50px"}}>
                                    © 2021 Joshua Aditama. All Rights Reserved
                                </div>
                           
                </div>
            </div>
           
        )
    }
}

export default ContactUs


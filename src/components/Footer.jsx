import React from "react"
import logo from "./../Assets/logo-2.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"
import {Link} from "react-router-dom"

// CSS
import "./../Supports/responsive.css"


class Footbar extends React.Component{
    render(){
        return(
                    <div className="background3 fontlato footer border">
                        <div className="container">
                           <div className="row d-md-flex d-none">
                                <div className=" col-md-7">
                                    <div style={{fontSize:"12px", fontWeight:"700", color:"#8D8D8D", letterSpacing:"0.0125cm", marginTop:"42.5px"}}>
                                        FEEL FREE TO KEEP IN TOUCH WITH US
                                    </div>
                                    <div style={{fontSize:"38px", fontWeight:"300", letterSpacing:"-0.0025cm", marginTop:"30px"}}>
                                        We are looking forward to explore the uniqueness of upcoming projects, together with you!
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/contactus">
                                            <button  className="btn-2" style={{borderRadius:"40px", width:"119px", height: "52px",  fontWeight:"400", fontSize:"13px", border:"1px solid black"}}>
                                                Inquiry Now
                                            </button>
                                        </a>
                                       
                                    </div>
                                </div>
                                <div className="col-5" >
                                    <img  src={gambarHome2} alt="" style={{width:"100%", height:"348px"}} />
                                </div>
                           </div>
                        </div>

                        <div className="container d-md-flex border footerdua" >
                            <div className="col-md-6 d-md-flex d-none">
                                <a href="/"> <img src={logo} alt="logo" /> </a>
                            </div>
                            <div className="col-md-6 col-12 d-md-flex border">
                                <div className="col-md-5 col-12 text-md-left ">
                                    <div>
                                        <a href="/" className="fontlato fontsubheading" style={{color:"#656565", fontWeight:"300", letterSpacing:"0.02cm", lineHeight:"29px"}}> Home </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/project" className="fontlato fontsubheading" style={{color:"#656565", fontWeight:"300", letterSpacing:"0.02cm", lineHeight:"29px"}}> Project </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/studio" className="fontlato fontsubheading" style={{color:"#656565", fontWeight:"300", letterSpacing:"0.02cm", lineHeight:"29px"}}> Studio </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/contactus" className="fontlato fontsubheading" style={{color:"#656565", fontWeight:"300", letterSpacing:"0.02cm", lineHeight:"29px"}}> Contact </a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-12 text-md-left  py-md-0 py-5">
                                    <div className="follow" style={{ letterSpacing:"0.02cm", lineHeight:"29px"}} >
                                        Follow My Social Media
                                    </div>
                                    <div  style={{ marginTop:"30px"}}>
                                        <a href="https://www.instagram.com/joshua_aditama/" className="fontsubheading"  style={{color:"#656565", fontWeight:"300",  letterSpacing:"0.02cm", lineHeight:"29px"}}> Instagram  </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center fontlato rights" style={{ fontSize:"11px", fontWeight:"300"}}>
                            © 2021 Joshua Aditama. All Rights Reserved
                        </div>
                    </div>
        )
    }
}

export default Footbar
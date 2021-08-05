import React from "react"
import logo from "./../Assets/logo-2.png"

// Images
import inquiry from "./../Assets/INQUIRY_NOW.jpg"

// CSS
import "./../Supports/responsive.css"

class Footbar extends React.Component{
    render(){
        return(
                    <div className="background3 fontlato footer" style={{height:"100%"}}>
                        <div>
                            <img className="gambarfooter gambarfootersmall" src={inquiry} alt="" style={{objectFit:"cover"}} />
                        </div>
                        <div className="container-md px-md-3 px-sm-5 px-4">
                           <div className="row d-md-flex flex-row-reverse">
                                <div className="col-sm-6 col-md-6 col-12 gambarfooterlarge">
                                    <div className="col-12  d-flex justify-content-end px-md-3 px-sm-0">
                                        <img  src={inquiry} alt="" className="gambarfooter" style={{width:"100%", objectFit:"cover"}}/>
                                    </div>
                                </div>

                                <div className=" col-sm-6 px-md3 px-sm-3 px-4">
                                    <div className="fontfooterheading ">
                                        FEEL FREE TO KEEP IN TOUCH WITH US
                                    </div>
                                    <div className="fontfooterbody ">
                                        We are looking forward to explore the uniqueness of upcoming projects, together with you!
                                    </div>
                                    <div style={{marginTop:"25px"}}>
                                        <a href="/contactus">
                                            <button  className="btn-11" style={{borderRadius:"40px", width:"119px", height: "52px",  fontWeight:"400", fontSize:"13px", border:"1px solid black"}}>
                                                Inquiry Now
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                
                           </div>
                        </div>

                        <div className="container-md px-md-3 px-sm-5 px-4 d-sm-flex footerdua">
                            <div className="col-md-6 d-sm-flex d-none px-md-3 px-sm-0 px-0">
                                <a href="/"> <img src={logo} alt="logo" className="logowidth"/> </a>
                            </div>
                            <div className="col-sm-6 col-12 d-sm-flex px-md-3 px-2">
                                <div className="col-sm-5 col-12 text-md-left px-md-3 px-0">
                                    <div>
                                        <a href="/" className="fontlato fontsubheading-footer"> Home </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/project" className="fontlato fontsubheading-footer"> Project </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/studio" className="fontlato fontsubheading-footer" > Studio </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/contactus" className="fontlato fontsubheading-footer"> Contact </a>
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
        )
    }
}

export default Footbar
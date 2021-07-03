import React from "react"
import logo from "./../Assets/logo-2.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"
import {Link} from "react-router-dom"

class Footbar extends React.Component{
    render(){
        return(
                    <div className="background3  fontlato " style={{marginTop:"177px", height:"1054px", paddingTop:"80px"}}>
                        <div className="container">
                           <div className="row">
                            <div className="col-7">
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
                                    <img src={gambarHome2} alt="" style={{width:"100%", height:"348px"}} />
                                </div>
                           </div>
                        </div>

                        <div className="container d-flex" style={{marginTop:"223px"}}>
                            <div className="col-6">
                                <a href="/"> <img src={logo} alt="logo" /> </a>
                            </div>
                            <div className="col-6 d-flex">
                                <div className="col-5">
                                    <div>
                                        <a href="/" className="fontlato " style={{color:"#656565", fontWeight:"300", fontSize:"24px", letterSpacing:"0.02cm", lineHeight:"29px"}}> Home </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/project" className="fontlato " style={{color:"#656565", fontWeight:"300", fontSize:"24px", letterSpacing:"0.02cm", lineHeight:"29px"}}> Project </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/studio" className="fontlato " style={{color:"#656565", fontWeight:"300", fontSize:"24px", letterSpacing:"0.02cm", lineHeight:"29px"}}> Studio </a>
                                    </div>
                                    <div style={{marginTop:"30px"}}>
                                        <a href="/contactus" className="fontlato " style={{color:"#656565", fontWeight:"300", fontSize:"24px", letterSpacing:"0.02cm", lineHeight:"29px"}}> Contact </a>
                                    </div>
                                </div>
                                <div className="col-7 ">
                                    <div style={{fontSize:"24px", letterSpacing:"0.02cm", lineHeight:"29px", fontWeight:"700"}} >
                                        Follow My Social Media
                                    </div>
                                    <div  style={{ marginTop:"30px"}}>
                                        <a href="https://www.instagram.com/joshua_aditama/"  style={{color:"#656565", fontWeight:"300", fontSize:"24px", letterSpacing:"0.02cm", lineHeight:"29px"}}> Instagram  </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center fontlato" style={{marginTop:"145px", fontSize:"11px", fontWeight:"300"}}>
                            © 2021 Joshua Aditama. All Rights Reserved
                        </div>
                    </div>
        )
    }
}

export default Footbar
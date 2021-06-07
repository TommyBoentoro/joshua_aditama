import React from "react"
import {Link} from "react-router-dom"

// Import Image
import logo from "./../Assets/logo-2.png"
import project1 from "./../Assets/project/project1.png"
import project2 from "./../Assets/project/project2.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"

// Import css
import "./../Supports/home.css"

class Project extends React.Component{
    render(){
        return(
            <>
                    <div className="border border-black bgproject" style={{width: "100%", height: "900px"}}>
                            <nav className = "navbar  d-flex flex-row justify-content-between container1" style={{marginTop:"50px"}}>
                                <div>
                                    <img src={logo} alt="logo" />
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
                            <div className="d-flex container1 flex-column fontlato" style={{height: "800px",paddingTop: "518px", color: "white"}}>
                                <div style={{fontSize:"24px"}}> 
                                    Project
                                </div>
                                <div style={{fontSize:"50px", fontWeight:"300", width: "564px", height:"150px", marginTop:"35px"}}>
                                    All Your Exclusive Interior Wishes Fulfilled
                                </div>
                            </div>
                    </div>
        

                {/*  */}
                <div className="d-flex flex-row justify-content-between" style={{width:"100%", marginTop:"74px"}}>
                    <div className="border" style={{width:"1050px", height:"557px", marginLeft:"130px"}}>
                        Data maping 1
                    </div>
                    <div className="border" style={{width:"550px", height:"557px", marginRight:"130px"}}>
                        Data Maping 2
                    </div>
                </div>

                <div className="border" style={{width: "100%px", height: "272px", marginTop:"100px"}}>
                    <div className="border d-flex justify-content-center" >
                        <button className="fontlato" style={{color: "white", background: "black", width:"143px", height: "52px", borderRadius: "40px" }}>
                            View more
                        </button>
                    </div>
                </div>

            {/*  */}

            <div className=" background3" style={{width: "100%px", height: "1054px"}}>
                <div className=" d-flex flex-row container1 justify-content-between" style={{marginTop:"80px", height: "346px"}}>
                    <div className="" style={{width:"706px", height:"346px"}}>
                        <div className=" fontlato d-flex flex-column justify-content-between" style={{marginTop:"36px", width:"605px", height:"226px", fontSize: "12px", color:"#8D8D8D"}}>
                            <div>
                                FEEL FREE TO KEEP IN TOUCH WITH US
                            </div>
                            <div style={{fontSize: "40px", fontWeight:"300", color:"black"}}>
                                We pursue excellence, innovation and professionalism in everything we undertake.
                            </div>
                        </div>
                        <div className="d-flex align-items-end  fontlato" style={{height:"84px"}}>
                            <button style={{borderRadius:"40px", width:"119px", height: "52px", background:"white", fontWeight:"400", fontSize:"13px"}}>
                                Inquiry Now
                            </button>
                        </div>
                    </div>
                    <div style={{height:"348px", width:"473px"}}>
                        <img src={gambarHome2} alt="Home 2" />
                    </div>
                </div>

                {/*  */}

                <div className=" d-flex flex-row justify-content-between" style={{marginTop:"224px", marginLeft:"130px", marginRight:"130px", height:"343px"}}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                        <div>
                            <div className=" d-flex flex-row fontlato" style={{width:"566px" , fontSize:"24px", fontWeight:"normal", color:"grey", fontWeight:"300"}}>
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
                <div className="d-flex  justify-content-center fontlato" style={{fontSize:"11px", fontWeight:"400", letterSpacing:"0.05cm"}}>
                    © 2021 Joshua Aditama. All Rights Reserved
                </div>
            </div>
            </>
        )
    }
}

export default Project
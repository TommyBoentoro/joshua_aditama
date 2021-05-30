import React from "react"
import {Link} from "react-router-dom"

// Import Image
import logo from "./../Assets/logo-2.png"
import project1 from "./../Assets/project/project1.png"
import project2 from "./../Assets/project/project2.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"


class Project extends React.Component{
    render(){
        return(
            <>
                <div className="border border-black bgproject" style={{width: "1440px", height: "900px"}}>
                    <div className = "border border-black " style={{height: "900px", width: "1179px", marginLeft: "130px"}}>
                        <nav className = "navbar navbar-light bg-light d-flex flex-row justify-content-between">
                            <div>
                                <img src={logo} alt="logo" />
                            </div>

                            <div className = "d-flex flex-row">
                                <div>
                                    <Link to="/project" className="fontlato" style={{color: "black"}}>Project</Link>
                                </div>
                                <div className="fontlato" style = {{marginRight: "20px", marginLeft: "20px"}}>
                                    Studio
                                </div>
                                <div className= "fontlato">
                                    Contact us
                                </div>
                            </div> 
                        </nav>
                    </div>
                </div> 

                {/*  */}

                <div className="border d-flex flex-row fontlato" style={{width:"1440px", height: "1800px"}}>
                    <div>
                            <div className="border d-flex flex-row" style={{height:"450px", width: "1440px"}}>
                                <div className="border backgroundproject1" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                            <div style={{fontSize: "16px"}}>
                                                Furniture
                                            </div>
                                            <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                Openaire, Semarang
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border backgroundproject2" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                                <div style={{fontSize: "16px"}}>
                                                    Furniture
                                                </div>
                                                <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                    Tentrem Hotel, Semarang
                                                </div>
                                        </div>
                                    </div>
                            </div>
                    
                            <div className="border d-flex flex-row" style={{height:"450px", width: "1440px"}}>
                                <div className="border backgroundproject1" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                            <div style={{fontSize: "16px"}}>
                                                Furniture
                                            </div>
                                            <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                Openaire, Semarang
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border backgroundproject2" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                                <div style={{fontSize: "16px"}}>
                                                    Furniture
                                                </div>
                                                <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                    Tentrem Hotel, Semarang
                                                </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="border d-flex flex-row" style={{height:"450px", width: "1440px"}}>
                                <div className="border backgroundproject1" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                            <div style={{fontSize: "16px"}}>
                                                Furniture
                                            </div>
                                            <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                Openaire, Semarang
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border backgroundproject2" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                                <div style={{fontSize: "16px"}}>
                                                    Furniture
                                                </div>
                                                <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                    Tentrem Hotel, Semarang
                                                </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="border d-flex flex-row" style={{height:"450px", width: "1440px"}}>
                                <div className="border backgroundproject1" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                            <div style={{fontSize: "16px"}}>
                                                Furniture
                                            </div>
                                            <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                Openaire, Semarang
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border backgroundproject2" style ={{width:"720px", height:"450px"}}>
                                        <div className="border d-flex flex-column justify-content-between" style={{marginTop:"322px", marginLeft: "60px", height:"78px ", color:"white"}}> 
                                                <div style={{fontSize: "16px"}}>
                                                    Furniture
                                                </div>
                                                <div style={{fontSize: "32px", fontWeight:"normal"}}>
                                                    Tentrem Hotel, Semarang
                                                </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>

                {/*  */}

                <div className="border" style={{width: "1440px", height: "272px"}}>
                    <div className="border d-flex justify-content-center" style={{marginTop: "31px"}}>
                        <button className="fontlato" style={{color: "white", background: "black", width:"143px", height: "52px", borderRadius: "40px" }}>
                            View more
                        </button>
                    </div>
                </div>

            {/*  */}

            <div className="border background3" style={{width: "1440px", height: "1054px"}}>
                    <div className="border d-flex flex-row" style={{marginTop:"80px", marginLeft: "129px",marginRight:"129px", width: "1181", height: "346px"}}>
                        <div className="border" style={{width:"706px", height:"346px"}}>
                            <div className="border fontlato d-flex flex-column justify-content-between" style={{marginTop:"36px", width:"605px", height:"226px", fontSize: "12px"}}>
                                <div>
                                    FEEL FREE TO KEEP IN TOUCH WITH US
                                </div>
                                <div style={{fontSize: "40px"}}>
                                    We pursue excellence, innovation and professionalism in everything we undertake.
                                </div>
                            </div>
                            <div className="d-flex align-items-end border fontlato" style={{height:"84px"}}>
                                <button style={{borderRadius:"40px", width:"119px", height: "52px", background:"white", fontWeight:"900"}}>
                                    Inquiry Now
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={gambarHome2} alt="Home 2" />
                        </div>
                    </div>

                    {/*  */}

                    <div className="border d-flex flex-row justify-content-between" style={{marginTop:"224px", marginLeft:"130px", marginRight:"130px", height:"343px"}}>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                            <div>
                                <div className="border d-flex flex-row fontlato" style={{width:"566px" , fontSize:"24px", fontWeight:"normal", color:"grey"}}>
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
                    <div className="d-flex border justify-content-center fontlato" style={{fontSize:"11px"}}>
                        © 2021 Joshua Aditama. All Rights Reserved
                    </div>
                </div>
            </>
        )
    }
}

export default Project
import React from "react"
import {Link} from "react-router-dom"

// Import Image

import gambarHome1 from "./../Assets/fotoHome-1.png"
import background3 from "./../Assets/background-3.png"
import myService from "./../Assets/myService.png"

import Footbar from "../components/Footer"

// Import CSS
import "./../Supports/home.css"

class Studio extends React.Component{
    render(){
        return(
            <>
                    <div className=" backgroundstudio1" style={{width: "100%", height: "900px"}}>
                            <div className="d-flex container  flex-column fontlato justify-content-end" style={{height: "900px", paddingBottom:"100px"}}>
                            </div>
                    </div>

                    {/* Content */}
                    
                    {/* 1 */}
                    <div className="container   d-flex flex-column align-items-center fontlato" >
                        <div className="col-11 d-flex "  style={{paddingTop:"100px", fontSize:"50px", fontWeight:"300"}}>
                            Turning Spatial Experience Into a Work of Art.
                        </div>
                        <div className="col-11 d-flex flex-column " style={{marginTop:"80px"}}>
                            <div style={{fontSize:"21px", fontWeight:"700", letterSpacing:"0.025cm", lineHeight:"100%"}}>
                                Joshua Aditama, B. Des.
                            </div>
                            <div style={{fontSize:"20px", fontWeight:"400", letterSpacing:"0.025cm", marginTop:"10px"}}>
                                Principal Designer
                            </div>
                            <div style={{fontSize:"20px", fontWeight:"300", letterSpacing:"0.025cm", color:"#8f8f8f", marginTop:"30px"}}>
                                In his study, Joshua Aditama always finds the relevance between art, space, and human.
                                Triggered him to explore works of art that turns into a strong connection in an architectural space. 
                                This way of thinking is always carried in every projects, which create an identity and uniqueness for every projects.
                                However, modern design movement strongly drives him in each works.
                                Geometrical forms, modern design elements, colors, and materials are crafted uniquely for every works of art.
                            </div>
                            <div style={{fontSize:"20px", fontWeight:"300", letterSpacing:"0.025cm", color:"#8f8f8f", marginTop:"30px"}}>
                                Joshua Aditama + partners works with competent partners in their fields of design. 
                                We are a developing design studio where new ideas are crafted together with our partners. 
                                This produces a rich design implementation for our projects, also raise us to be problem solver.
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="container d-flex flex-column fontlato align-items-center" style={{marginTop:"120px"}}>
                        <div style={{fontSize:"46px", fontWeight:"400"}}>
                            Services
                        </div>
                        <div className="col-10 " style={{marginTop:"80px"}}>
                            <div className="col d-flex ">
                                <div className="col-6">
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        01.
                                    </div>
                                    <div style={{fontSize:"32px", fontWeight:"300", marginTop:"10px"}}>
                                        Design Concultancy
                                    </div>
                                    <div className="col-6" style={{width:"100%", height:"1.5px", backgroundColor:"black", marginTop:"30px"}}> 
                                        {/* Garis */}
                                    </div>
                                    <div style={{fontSize:"17px", fontWeight:"300", color:"#8F8F8F", width:"90%", marginTop:"30px", letterSpacing:"0.025cm"}}>
                                    As an interior-architecture design studio, we will provide integrated design process for prospective clients. 
                                    From brief-based ideas, design concept, design implementation, to construction drawing and details are executed as a design 
                                    language that is very content and unique for each projects.
                                    </div>
                                </div>
                                <div className="col-6" style={{marginLeft:"80px"}}>
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        02.
                                    </div>
                                    <div style={{fontSize:"32px", fontWeight:"300", marginTop:"10px"}}>
                                        Design & Build
                                    </div>
                                    <div className="col-6" style={{width:"100%", height:"1.5px", backgroundColor:"black", marginTop:"30px"}}> 
                                        {/* Garis */}
                                    </div>
                                    <div style={{fontSize:"17px", fontWeight:"300", color:"#8F8F8F", width:"90%", marginTop:"30px" ,letterSpacing:"0.025cm"}}>
                                    Providing a one-stop building solution for prospective clients in various scale. 
                                    With a strong design language and on-site experiences, we are ready to work simultaneously 
                                    with our competent and experienced partners.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default Studio
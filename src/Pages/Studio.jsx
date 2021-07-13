import React from "react"
import {Link} from "react-router-dom"

// Import Image

import gambarHome1 from "./../Assets/fotoHome-1.png"
import background3 from "./../Assets/background-3.png"
import myService from "./../Assets/myService.png"



// Import CSS
import "./../Supports/home.css"
import "./../Supports/responsive.css"

class Studio extends React.Component{
    render(){
        return(
            <>
                    <div className="backgroundstudio1 bgimageresponsive">
                            <div className="d-flex container flex-column fontlato justify-content-end" style={{height: "900px", paddingBottom:"100px"}}>
                            </div>
                    </div>

                    {/* Content */}
                    
                    {/* 1 */}
                    <div className="container  px-md-3 px-sm-0 px-4 fontlato stylecontainer" >
                        <div className=" col-lg-11 col-12 d-flex fontheadingstudio padding100 px-md-3 px-sm-0 px-3"  style={{ fontWeight:"300"}}>
                            Turning Spatial Experience Into a work of art.
                        </div>
                        <div className="col-lg-11 col-12 px-md-3 px-sm-0 px-3 d-flex flex-column margin80" >
                            <div className="fontsubheading-studio" style={{fontWeight:"700", letterSpacing:"0.025cm", lineHeight:"100%"}}>
                                Joshua Aditama, B. Des.
                            </div>
                            <div className="fontbodystudio" style={{fontWeight:"400", letterSpacing:"0.025cm", marginTop:"10px",color:"black"}}>
                                Principal Designer
                            </div>
                            <div className="fontbodystudio" >
                                In his study, Joshua Aditama always finds the relevance between art, space, and human.
                                Triggered him to explore works of art that turns into a strong connection in an architectural space. 
                                This way of thinking is always carried in every projects, which create an identity and uniqueness for every projects.
                                However, modern design movement strongly drives him in each works.
                                Geometrical forms, modern design elements, colors, and materials are crafted uniquely for every works of art.
                            </div>
                            <div className="fontbodystudio" >
                                Joshua Aditama + partners works with competent partners in their fields of design. 
                                We are a developing design studio where new ideas are crafted together with our partners. 
                                This produces a rich design implementation for our projects, also raise us to be problem solver.
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="container d-flex flex-column fontlato align-items-center marginservice">
                        <div className="fontservice-studio" style={{ fontWeight:"400"}}>
                            Services
                        </div>
                        <div className="col-md-12 col-lg-10  col-12 px-md-3 px-sm-0 px-0 margintopcard" >
                            <div className="col d-sm-flex px-md-3 px-sm-0 px-3">
                                <div className="col-md-6  px-md-3 px-sm-0 px-3">
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        01.
                                    </div>
                                    <div className="textcard-heading mt-1" style={{fontWeight:"300", }}>
                                        Design Concultancy
                                    </div>
                                    <div className="col-sm-6 col-9 mt-md-4 mt-3 garis" > 
                                        {/* Garis */}
                                    </div>
                                    <div className="textcard-body mt-md-4 mt-3 " style={{ color:"#8F8F8F",letterSpacing:"0.025cm"}}>
                                    As an interior-architecture design studio, we will provide integrated design process for prospective clients. 
                                    From brief-based ideas, design concept, design implementation, to construction drawing and details are executed as a design 
                                    language that is very content and unique for each projects.
                                    </div>
                                </div>
                                <div className="col-sm-6 margincard ml-md-5 px-md-3 px-sm-3 px-3 " >
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        02.
                                    </div>
                                    <div className="textcard-heading mt-1" style={{fontWeight:"300"}}>
                                        Design & Build
                                    </div>
                                    <div className="col-md-6 col-9 mt-md-4 mt-3 garis"> 
                                        {/* Garis */}
                                    </div>
                                    <div className="textcard-body  mt-md-4 mt-3" style={{color:"#8F8F8F",letterSpacing:"0.025cm"}}>
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
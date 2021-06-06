import React from "react"
import {Link} from "react-router-dom"


// import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.png"
import ourService1 from "./../Assets/ourService1.png"
import ourService2 from "./../Assets/ourService2.png"
import ourService3 from "./../Assets/ourService3.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"



// Import css
import "./../Supports/home.css"
class Home extends React.Component{
    // render(){
    //     return(
    //         <div className="d-flex flex-column justify-content-center" style={{height: "100vh"}}>
    //              <img src={jumbotronImage1} alt="jumbotron-1" style={{maxWidth: "100%", height: "auto"}} />
    //             <div className = "container">
    //                 <nav class="navbar navbar-light bg-light" style={{position : "absolute",  left: "160px"}}>
    //                     <div>
    //                         <a class="navbar-brand" href="#">Joshua Aditama</a>
    //                     </div>
    //                     <div>
    //                         <Link to="/project" style={{color: "#39986E"}}>Project</Link>
    //                         <a class="navbar-brand" href="http://localhost:3000/project">Project</a>
    //                         <a class="navbar-brand" href="http://localhost:3000/studio">Studio</a>
    //                         <a class="navbar-brand" href="http://localhost:3000/contactus">Contact Us</a>
    //                     </div>
                        
    //                 </nav>
    //             </div>
    //         </div>
       
            
    //     )
    // }
    render () {
        return(
           <> 
            <div className="border border-black bgimg" style={{width: "1440px", height: "900px"}}>
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

            <div className="border border-black background1" style={{width: "1440px", height: "980px"}}>
                <div className="d-flex flex-row">
                    <div className="border border-black" style={{marginTop: "220px", marginLeft: "130px", width:"474px", height:"447px"}}>
                        <div className="fontlato" style={{fontSize: "14px"}}>
                            ABOUT US
                        </div>
                        <div className= "fontlato" style={{fontSize: "36px", lineHeight: "46.98px", letterSpacing:"0.5%", width: "403px", height: "94px", marginTop:"21px"}}>
                        We turn ideas into works of art.
                        </div>
                        <div className="fontlato" style={{width:"474px", height:"248px", fontSize:"17px", marginTop:"19px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt. 
                        Praesent ac sapien mollis, tristique lacus non, aliquet nisi. Nunc nec nisi lacus. Curabitur ac gravida nisl. Quisque pellentesque posuere arcu eget egestas. 
                        Etiam venenatis, arcu at pulvinar porta, nulla nunc varius dolor, at interdum mi est non velit. Etiam pulvinar rhoncus urna laoreet malesuada. 
                        </div>
                    </div>
                    <div  style={{marginTop: "166px", marginLeft: "116px"}}>
                        <img src={gambarHome1} alt="logo1"  />
                    </div>
                </div>
                <div className="border d-flex justify-content-center fontlato" style={{height: "267px", paddingTop: "150px", fontSize: "46px"}}>
                    Our Project
                </div>
            </div>
            <div>
                <img src={background2} alt="background" />
            </div>

            {/*  */}

            <div className="border" style={{width: "1440px", height: "998px"}}>
                <div className="border d-flex justify-content-center" style={{marginTop: "31px"}}>
                    <button className="fontlato" style={{color: "white", background: "black", width:"143px", height: "52px", borderRadius: "40px" }}>
                        View more
                    </button>
                </div>
                <div className="border fontlato d-flex justify-content-center" style={{marginTop:"120px", fontSize: "46px"}}>
                    Our Service
                </div>
                <div className="border d-flex flex-row" style={{marginTop:"100px",marginLeft:"130px", width: "1179px", height:"417px"}}>
                    <div style={{paddingTop: "10px"}}>
                        <img src={ourService1} alt="Our Service 1" />
                    </div>
                    <div style={{paddingTop: "10px", marginLeft:"32px"}}>
                        <img src={ourService2} alt="Our Service 2" />
                    </div>
                    <div style={{paddingTop: "10px", marginLeft:"32px"}}>
                        <img src={ourService3} alt="Our Service 3" />
                    </div>
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

export default Home

// test masuk github
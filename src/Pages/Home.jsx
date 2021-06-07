import React from "react"
import {Link} from "react-router-dom"


// import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.JPG"
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
            <div className="border border-black bgimg" style={{width: "100%", height: "900px"}}>
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
            </div>

            {/*  */}

            <div  style={{width: "100%", height: "900px"}}>
                <div className="d-flex flex-row justify-content-between">
                    <div  style={{marginTop: "220px", width:"474px", height:"447px", marginLeft:"130px"}}>
                        <div className="fontlato" style={{fontSize: "14px"}}>
                            ABOUT US
                        </div>
                        <div className= "fontlato" style={{fontSize: "36px", lineHeight: "46.98px", letterSpacing:"0.5%", width: "403px", height: "94px", marginTop:"21px", fontWeight:"300", color:"#000000"}}>
                        We turn ideas into works of art.
                        </div>
                        <div className="fontlato" style={{width:"474px", height:"248px", fontSize:"17px", marginTop:"19px", fontWeight:"400", color:"#8F8F8F", lineHeight: "180%", letterSpacing:"0.025cm"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt. 
                        Praesent ac sapien mollis, tristique lacus non, aliquet nisi. Nunc nec nisi lacus. Curabitur ac gravida nisl. Quisque pellentesque posuere arcu eget egestas. 
                        Etiam venenatis, arcu at pulvinar porta, nulla nunc varius dolor, at interdum mi est non velit. Etiam pulvinar rhoncus urna laoreet malesuada. 
                        </div>
                        <div style={{color: "#000000", fontWeight:"500", marginTop:"20px"}}>
                            Read More
                        </div>
                    </div>
                    <div  style={{marginTop: "166px", }}>
                        <img src={gambarHome1} alt="logo1"  />
                    </div>
                </div>
               <div className="d-flex justify-content-center" style={{width: "100%",marginTop: "100px", fontSize:"46px"}}>
                   Our Project
               </div>
            </div>

            <div className=" background2 " style={{width:"100%", height:"700px",marginTop:"20px"}}>
                test
            </div>

            {/*  */}

            <div  style={{width: "100%", height: "998px"}}>
                <div className=" d-flex justify-content-center" style={{marginTop: "31px"}}>
                    <button className="fontlato" style={{color: "white", background: "black", width:"143px", height: "52px", Radius: "40px" }}>
                        View more
                    </button>
                </div>
                <div className=" fontlato d-flex justify-content-center" style={{marginTop:"120px", fontSize: "46px"}}>
                    Our Service
                </div>
                <div className=" d-flex flex-row justify-content-center" style={{marginTop:"100px", width: "100%", height:"417px"}}>
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

            <div className=" background3" style={{width: "100%", height: "1054px"}}>
                <div className=" d-flex flex-row container1 justify-content-between" style={{height: "346px"}}>
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

export default Home

// test masuk github
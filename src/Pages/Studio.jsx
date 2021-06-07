import React from "react"
import {Link} from "react-router-dom"

// Import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.JPG"
import ourService1 from "./../Assets/ourService1.png"
import ourService2 from "./../Assets/ourService2.png"
import ourService3 from "./../Assets/ourService3.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"

// Import CSS
import "./../Supports/home.css"

class Studio extends React.Component{
    render(){
        return(
            <>
                    <div className="border border-black backgroundstudio1" style={{width: "100%", height: "900px"}}>
                            <nav className = "navbar bg-light d-flex flex-row justify-content-between container1" style={{marginTop:"50px"}}>
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
                                    About Us
                                </div>
                                <div style={{fontSize:"50px", fontWeight:"300", width: "564px", height:"150px", marginTop:"35px"}}>
                                Construction Partner For Your Dream Home
                                </div>
                            </div>
                    </div>

                    {/*  */}
                    <div className="d-flex justify-content-center fontlato" style={{width:"100%", marginTop:"100px", fontSize:"50px", fontWeight:"300"}}>
                        We turn ideas into works of art.
                    </div>

                    <div className="fontlato container" style={{fontSize:"17px", fontWeight:"400", color:"#8F8F8F", lineHeight:"30.6px", marginTop:"80px", letter:"2.5%", width:"979px", height:"434px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit tellus, egestas sodales sodales vitae, facilisis vel nisi. Praesent vitae faucibus augue. 
                    Suspendisse quis mauris mauris. Quisque sit amet tristique leo. Proin luctus iaculis mauris non tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Nulla ligula ante, dapibus vitae dolor tristique, mollis sodales ex. Donec aliquam, magna non ullamcorper iaculis, nibh elit feugiat massa, quis efficitur velit lorem sed orci. Suspendisse eget tempor ex, id bibendum massa. 
                    Phasellus a pulvinar erat. Pellentesque purus quam, tristique at posuere vitae, venenatis eu turpis. Suspendisse quis nisi sit amet purus suscipit tempus. Sed sed faucibus eros. 
                    Suspendisse placerat mauris et nisl egestas ultricies.
                    <br />
                    <br />
                    Sed consectetur, nibh nec dapibus lacinia, dui elit consequat lacus, quis vestibulum diam quam sit amet ante. Phasellus et volutpat nibh, quis fermentum dui. 
                    Duis tristique vestibulum urna ac egestas. Aliquam lectus ipsum, iaculis venenatis pellentesque a, congue quis eros. Aliquam sit amet lacus malesuada, interdum tellus et, fringilla enim. Aenean viverra, 
                    dui eget pellentesque maximus, metus ipsum aliquam lacus, nec sagittis mi ex sed sem. Vivamus eu ornare nunc. Fusce ligula libero, pretium non suscipit venenatis, maximus non mi. 
                    Pellentesque pulvinar justo ligula, malesuada interdum est dapibus vel. Donec sollicitudin urna non lectus feugiat imperdiet sit amet a eros.
                    </div>

                    {/*  */}

                <div  style={{width: "100%", height: "998px"}}>
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

export default Studio
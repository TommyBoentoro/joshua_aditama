import React from "react"
import {Link, Redirect} from "react-router-dom"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHistory } from "react-router-dom";


// import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.JPG"
import gambarHome2 from "./../Assets/fotoHome-2.png"
import Jumbotron from "./../Assets/jumbotron.JPG"
import myService from "./../Assets/myService.png"
import arrow from "./../Assets/arrow.png"
import test1 from "./../Assets/project/test1.png"
import jumbotron from './../Assets/jumbotron.JPG'

// Helpers
import hoverFunction from "../helpers/hoverbackground"


// Import css
import "./../Supports/home.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./../Supports/backgroundHover.css"

const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" style={{display:"none"}} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" style={{display:"none"}} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

class Home extends React.Component{

    
    componentDidMount(){
        hoverFunction()
    }

    render () {

        const settings = {
            autoplay: true,
            slideToShow: 1,
            slideToScroll: 1,
            dots: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        }

        return(
           <> 
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={Jumbotron} alt="Jumbotron" style={{height:"900px", width:"100%"}}/>
                    </div>
                    <div>
                        <img src={gambarHome1} alt="" style={{height:"900px", width:"100%"}}/>
                    </div>
                    <div>
                       <img src={background2} alt=""  style={{height:"900px", width:"100%"}}/>
                    </div>
                </Slider>
            </div>

            {/* ABOUT US */}
            <div className="container-fluid d-flex border" style={{paddingTop:"166px"}}>
               <div className="container" >
                        <div className="col-6  row" style={{marginTop:"54px"}}>
                            <div>
                                <div className="fontlato" style={{fontSize: "14px", fontWeight:"700", letterSpacing:"0.025cm", lineHeight:"17px", fontStyle:"normal"}}>
                                    ABOUT US
                                </div>
                                <div className= "fontlato " style={{fontSize: "36px", lineHeight: "46.98px", fontStyle:"normal", height: "94px", marginTop:"21px", fontWeight:"300", color:"#000000"}}>
                                    Turning spatial experience into a work of art
                                </div>
                                <div className="fontlato" style={{width:"474px", height:"248px", fontSize:"18px", marginTop:"21px", fontWeight:"300", color:"#8F8F8F", lineHeight: "180%", letterSpacing:"0.025cm"}}>
                                Joshua Aditama + partners is a multidiciplinary design studio which focused on spatial experience. 
                                We create a connection between art and human to experience interior and architectural spaces. 
                                From commercial to personal spaces drive us to explore the specialty of each projects as works of art. 
                                Brief, concept, and design implementation give a particular excitement for us to be explored together with you.
                                </div>
                                
                                <div className="d-flex" style={{color: "black", fontWeight:"400", marginTop:"30px", fontSize:"16px"}}>
                                    <div>
                                        Read More
                                    </div>
                                    <div style={{marginLeft:"20px"}}>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
               </div>
            </div>


            {/* <img className="border" src={gambarHome1} alt="" style={{position:"absolute", right:'0', top:'1066px', width:"750px"}}/> */}

          

            <div className="container" style={{marginTop:"193px"}}>
                <div className="d-flex justify-content-center" style={{fontSize:"46px", fontWeight:"400"}}>
                    Projects
                </div>
            </div>
           
           {/* Hover Home */}
           <div className="backgroundhover" style={{marginTop:"0px", height:"700px"}}>
                <div className="hoverimage" style={{padding:"0", margin:"0"}}>
                    <ul className="border" style={{height:"700px", padding:"0", margin:"0"}}>
                        <li className="col border d-flex align-items-end" style={{height:"700px", padding:"0", margin:"0"}} data-bg={jumbotron}>
                           <div className="hoversaya d-flex justify-content-center align-items-center thiswhite" style={{height:"200px", width:"100%"}}>
                                <a  href="#">
                                    <div style={{fontSize:"16px", fontWeight:'700'}}>
                                        Furniture
                                    </div>
                                    
                                    <div style={{fontSize:'28px', fontWeight:300, marginTop:"10px"}}>
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        <li className="col border d-flex align-items-end justify-content-center" style={{height:"700px", padding:"0", margin:"0"}} data-bg={test1}>
                           <div className="hoversaya d-flex justify-content-center align-items-center" style={{height:"200px", width:"100%"}}>
                                <a  href="#">
                                    <div style={{fontSize:"16px", fontWeight:'700'}}>
                                        Furniture
                                    </div>
                                    <div style={{fontSize:'28px', fontWeight:300, marginTop:"10px"}}>
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        <li className="col border d-flex align-items-end justify-content-center" style={{height:"700px", padding:"0", margin:"0"}} data-bg={jumbotron}>
                           <div className="hoversaya d-flex justify-content-center align-items-center" style={{height:"200px", width:"100%"}}>
                                <a  href="#">
                                    <div style={{fontSize:"16px", fontWeight:'700'}}>
                                        Furniture
                                    </div>
                                    <div style={{fontSize:'28px', fontWeight:300, marginTop:"10px"}}>
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        
                    </ul>
                </div>
            </div>



            {/* <div className=" background2 " style={{width:"100%", height:"700px",marginTop:"20px"}}>
                test
            </div> */}

            {/*  */}

            
                <div className=" d-flex justify-content-center" style={{marginTop: "63px"}}>
                <a href="/project">
                        <button  className="fontlato btn-1" style={{width:"119px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", border:"1px solid black" }}>
                            View More
                        </button>
                </a>
                    
                    
                </div>
           

                    <div className="container d-flex flex-column fontlato align-items-center" style={{marginTop:"180px"}}>
                        <div style={{fontSize:"46px", fontWeight:"400"}}>
                            Services
                        </div>
                        <div className="col-10  " style={{marginTop:"80px"}}>
                            <div className="col d-flex ">
                                <div className="col-6  ">
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        01.
                                    </div>
                                    <div style={{fontSize:"32px", fontWeight:"300", marginTop:"10px", color:"black"}}>
                                        Design Concultancy
                                    </div>
                                    <div className="col-6" style={{width:"100%", height:"1.5px", backgroundColor:"black", marginTop:"30px"}}> 
                                        {/* Garis */}
                                    </div>
                                    <div className="" style={{fontSize:"18px", fontWeight:"300", color:"#8F8F8F", width:"90%", marginTop:"30px"}}>
                                    As an interior-architecture design studio, we will provide integrated design process for prospective clients. 
                                    From brief-based ideas, design concept, design implementation, to construction drawing and details are executed as a design 
                                    language that is very content and unique for each projects.
                                    </div>
                                </div>
                                <div className="col-6 " style={{marginLeft:"80px"}}>
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        02.
                                    </div>
                                    <div style={{fontSize:"32px", fontWeight:"300", marginTop:"10px"}}>
                                        Design & Build
                                    </div>
                                    <div className="col-6" style={{width:"100%", height:"1.5px", backgroundColor:"black", marginTop:"30px"}}> 
                                        {/* Garis */}
                                    </div>
                                    <div  style={{fontSize:"18px", fontWeight:"300", color:"#8F8F8F", width:"90%", marginTop:"30px"}}>
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

export default Home


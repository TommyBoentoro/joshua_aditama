import React from "react"
import Slider from "react-slick"

import surfing from "./../../Assets/project/SURFING_RESORT/thumbnail.jpg"
import satu from "./../../Assets/project/SURFING_RESORT/surfing-1.jpg"
import dua from "./../../Assets/project/SURFING_RESORT/surfing-2.jpg"
import tiga from "./../../Assets/project/SURFING_RESORT/surfing-3.jpg"
import empat from "./../../Assets/project/SURFING_RESORT/surfing-4.jpg"
import lima from "./../../Assets/project/SURFING_RESORT/surfing-5.jpg"
import enam from "./../../Assets/project/SURFING_RESORT/surfing-6.jpg"

// Import Footer
import Footbar from "../../components/Footer"

// Import CSS
import "./../../"
import "./../../Supports/tiga.css"
import "./../../Supports/home.css"
import "./../../Supports/projectDetail.css"
import "./../../Supports/projectResponsive.css"

// Import Icon
import {IoIosArrowDropright} from 'react-icons/io';
import {IoIosArrowDropleft} from "react-icons/io"

const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" style={{display:"none"}} onClick={onClick}>
        <IoIosArrowDropright />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" style={{display:"none"}}  onClick={onClick}>
        <IoIosArrowDropleft />
      </div>
    );
  };

class surfingResort extends React.Component{
    render(){

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            autoplay:true,
            dots:true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            };
    
            return(
                <>
                    <div className="backgroundimg" style={{backgroundImage:`url(${surfing})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    R's SURFING RESORT
                                </div>
                                <div className="paddingbg fontbgbody" >
                                    <div className="row px-sm-0 px-2 ">
                                        <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Category: Architecture
                                        </div>
                                        <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Location: Bali,INA
                                        </div> 
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Year: 2018
                                        </div>
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Status: Proposal
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div style={{overflow:"hidden"}} className="fontlato  container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato marginbodyheading" >
                        <div className="col-md-10  col-12 fontheading px-md-3 px-sm-0 px-2" >
                            Interpreting ocean waves as an architecture.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            The project is located in Canggu, Bali that has direct access to the beach. It is a common
                            beach for people doing surf. We had a chance to design a surfing resort for surfers who
                            spend days surfing, where they can rest and have a room for another day of surfing. The
                            resort provides rooms, yoga shala, restaurant, and a surf shop.
                        </div>
                    </div>
    
                    
                    <div className="marginslick">
                        <Slider {...settings}>
                            <div>
                                <img src={surfing} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={satu} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={dua} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={tiga} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={empat} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={lima} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={enam} className="opacityimage slickheight" alt="" />
                            </div>
    
                        </Slider>
                    </div>
    
                    <div style={{overflow:"hidden"}} className=" container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato" >
                        <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-2" >
                            Interpreting ocean waves into an idea of roof structure gives a unique architecture for the
                            resort masterplan. It also blends nicely with local traditional roof structure in Bali. <br /><br />
                            Worked with Alexis Dornier Architecture
                        </div>
                    </div>

                    <Footbar/>
                </>
            )
        }
}

export default surfingResort
import React from "react"
import Slider from "react-slick"


import lindspapandayan from "./../../Assets/project/LINDS_PAPANDAYAN/thumbnail.jpg"
import satu from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-1.jpg"
import dua from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-2.jpg"
import tiga from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-3.jpg"
import empat from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-4.jpg"
import lima from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-5.jpg"
import enam from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-6.jpg"
import tujuh from "./../../Assets/project/LINDS_PAPANDAYAN/papandayan-7.jpg"

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

class lindsPapandayan extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${lindspapandayan})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    LIND'S ICE CREAM PAPANDAYAN
                                </div>
                                <div className="paddingbg fontbgbody" >
                                    <div className="row px-sm-0 px-2 ">
                                        <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Category: Interior Design
                                        </div>
                                        <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Location: Semarang,INA
                                        </div> 
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Year: 2022
                                        </div>
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Status: Under Construction
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div style={{overflow:"hidden"}} className="fontlato  container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato marginbodyheading" >
                        <div className="col-md-10  col-12 fontheading px-md-3 px-sm-0 px-2" >
                        An Art-Deco interior style is being used as a renovation concept for Lind’s Ice Cream Restaurant.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            The project is to renovate exisiting interior space of the restaurant to have a new concept of
                            look. As a vintage ice cream shop that has been running since 80s, JA+ Studio infused art
                            deco movement to the interior design style. Combining textured white ceiling finishing and
                            dark wood panels for the ceiling that is common in the era to recall the vintage and retro
                            ambience.
                        </div>
                    </div>
    
                    
                    <div className="marginslick">
                        <Slider {...settings}>
                            <div>
                                <img src={lindspapandayan} className="opacityimage slickheight" alt="" />
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
                            <div>
                                <img src={tujuh} className="opacityimage slickheight" alt="" />
                            </div>
    
                        </Slider>
                    </div>
    
                    <div style={{overflow:"hidden"}} className=" container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato" >
                        {/* <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-2" >
                            The new layout plan removes some walls that caused ambiguity of the existing space, giving
                            more spacious seating area, also with a new bar design. To recall the feeling of legendary ice
                            cream shop for customers, vintage-look materials and finishings are chosen to represent the
                            original brand identity itself.
                        </div> */}
                    </div>

                    <Footbar/>
                </>
            )
        }
}

export default lindsPapandayan
import React from "react"
import Slider from "react-slick"


import wongart from "./../../Assets/project/WONG_ART/thumbnail.jpg"
import satu from "./../../Assets/project/WONG_ART/wongart-1.jpg"
import dua from "./../../Assets/project/WONG_ART/wongart-2.jpg"
import tiga from "./../../Assets/project/WONG_ART/wongart-3.jpg"
import empat from "./../../Assets/project/WONG_ART/wongart-4.jpg"
import lima from "./../../Assets/project/WONG_ART/wongart-5.jpg"
import enam from "./../../Assets/project/WONG_ART/wongart-6.jpg"
import tujuh from "./../../Assets/project/WONG_ART/wongart-7.jpg"
import delapan from "./../../Assets/project/WONG_ART/wongart-8.jpg"
import sembilan from "./../../Assets/project/WONG_ART/wongart-9.jpg"

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

class Wongart extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${wongart})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    WONG ART
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
                                            Year: 2021
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
                            The new location for Wong Art where home baked pastries and foods are served like home.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            The project is located in the owner’s main house area. The new concept of the restaurant is
                            to be a home-serve menu for guests where the original Wong Art pastries are being baked
                            everyday there. The ambience and the aroma of house kitchen is the main brief for the
                            interior style. Guests will enjoy their pastries as it feels like enjoying home comfort-food.
                        </div>
                    </div>
    
                    
                    <div className="marginslick">
                        <Slider {...settings}>
                            <div>
                                <img src={wongart} className="opacityimage slickheight" alt="" />
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
                            <div>
                                <img src={delapan} className="opacityimage slickheight" alt="" />
                            </div>
                            <div>
                                <img src={sembilan} className="opacityimage slickheight" alt="" />
                            </div>
    
                        </Slider>
                    </div>
    
                    <div style={{overflow:"hidden"}} className=" container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato" >
                        <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-2" >
                            The restaurant is also build next to existing owner’s house pool, that still being used by the
                            family but also be a nice view and ambience for the restaurant, giving a home dining area
                            situation. The material being used for the interior is warm and refreshing color palettes,
                            such as light wood and light olive green. The restaurant also provides a small bakery for
                            take-away.
                        </div>
                    </div>

                    <Footbar/>
                </>
            )
        }
}

export default Wongart
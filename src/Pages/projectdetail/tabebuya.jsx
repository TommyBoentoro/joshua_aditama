import React from "react"
import Slider from "react-slick"

import tabebuyaimage from "./../../Assets/project/TABEBUYA/thumbnail.JPG"
import satu from "./../../Assets/project/TABEBUYA/tabebuya-1.JPG"
import dua from "./../../Assets/project/TABEBUYA/tabebuya-2.JPG"
import tiga from "./../../Assets/project/TABEBUYA/tabebuya-3.JPG"
import empat from "./../../Assets/project/TABEBUYA/tabebuya-4.JPG"
import lima from "./../../Assets/project/TABEBUYA/tabebuya-5.JPG"
import enam from "./../../Assets/project/TABEBUYA/tabebuya-6.JPG"
import tujuh from "./../../Assets/project/TABEBUYA/tabebuya-7.JPG"
import delapan from "./../../Assets/project/TABEBUYA/tabebuya-8.JPG"
import sembilan from "./../../Assets/project/TABEBUYA/tabebuya-9.JPG"
import sepuluh from "./../../Assets/project/TABEBUYA/tabebuya-10.JPG"

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

class tabebuya extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${tabebuyaimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    TABEBUYA RESORT
                                </div>
                                <div className="paddingbg fontbgbody" >
                                    <div className="row px-sm-0 px-2 ">
                                        <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Category: Architecture
                                        </div>
                                        <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Location: Jepara,INA
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
                        A modern luxury resort located in a seaside bay, provides Restaurant, Bars, and Private Suite Villas.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            The project is located in a seaside bay of Jepara, Central Java. The view of Java Sea is the
                            major objectives for the architecture. The restaurant, bars, and villas have a direct big
                            openings to the sea-view. The first floor provides restaurant, outdoor seatings, bar, and
                            junior suite rooms. The second floor provides VIP and VVIP private dining area for
                            reservation and a presidential suite villa that as a full view of the sea. The third floor
                            provides a rooftop bar.
                        </div>
                    </div>
    
                    
                    <div className="marginslick">
                        <Slider {...settings}>
                            <div>
                                <img src={tabebuyaimage} className="opacityimage slickheight" alt="" />
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
                            <div>
                                <img src={sepuluh} className="opacityimage slickheight" alt="" />
                            </div>
    
                        </Slider>
                    </div>
    
                    <div style={{overflow:"hidden"}} className=" container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato" >
                        <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-2" >
                            Interpreting modern and tropical architecture style where luxury elements and materials
                            are being used, provides a five-star ambience for the resort, yet earthy and warm materials
                            such as wood and stone are carried for the interior.
                        </div>
                    </div>

                    <Footbar/>
                </>
            )
        }
}

export default tabebuya
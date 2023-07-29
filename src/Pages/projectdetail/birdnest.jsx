import React from "react"
import Slider from "react-slick"

// Import Images
import birdnest from "./../../Assets/project/BIRDNEST/1.jpg"
import satu from "./../../Assets/project/BIRDNEST/2.jpg"
import dua from "./../../Assets/project/BIRDNEST/3.jpg"
import tiga from "./../../Assets/project/BIRDNEST/4.jpg"
import empat from "./../../Assets/project/BIRDNEST/5.jpg"
import lima from "./../../Assets/project/BIRDNEST/6.jpg"
import enam from "./../../Assets/project/BIRDNEST/7.jpg"
import tujuh from "./../../Assets/project/BIRDNEST/8.jpg"
import delapan from "./../../Assets/project/BIRDNEST/9.jpg"
import sembilan from "./../../Assets/project/BIRDNEST/10.jpg"
import sepuluh from "./../../Assets/project/BIRDNEST/11.jpg"


// Import Footer
import Footbar from "../../components/Footer"

// Import CSS
import "../.."
import "./../../Supports/tiga.css"
import "./../../Supports/home.css"
import "./../../Supports/projectDetail.css"
import "./../../Supports/projectResponsive.css"

// Import Icon
import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowDropleft } from "react-icons/io"

const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow next" style={{ display: "none" }} onClick={onClick}>
            <IoIosArrowDropright />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow prev" style={{ display: "none" }} onClick={onClick}>
            <IoIosArrowDropleft />
        </div>
    );
};

class Birdnest extends React.Component {
    render() {

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            autoplay: true,
            dots: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        return (
            <>
                <div className="backgroundimg" style={{ backgroundImage: `url(${birdnest})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", overflow: "hidden" }}>
                    <div className="overlay">
                        <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{ height: "100%" }}>
                            <div className="fontbgheading" >
                                BIRD NEST
                            </div>
                            <div className="paddingbg fontbgbody" >
                                <div className="row px-sm-0 px-2 ">
                                    <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                        Category: Architecture
                                    </div>
                                    <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Location: Karanganyar,INA
                                    </div>
                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Year: 2023
                                    </div>
                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Status: Under Construction
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ overflow: "hidden" }} className="fontlato  container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato marginbodyheading" >
                    <div className="col-md-10  col-12 fontheading px-md-3 px-sm-0 px-2" >
                        An architecture where it corresponds the existing site
                        and nature.
                    </div>
                    <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                        The goal is to build a low-energy-consume factory, where the challenge is to maximize air
                        circulation and natural lights. Large openings and cross ventilation system are the keys to
                        gain air circulation and natural light efficiency.
                    </div>
                </div>


                <div className="marginslick">
                    <Slider {...settings}>
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
                <Footbar />
            </>
        )
    }
}

export default Birdnest
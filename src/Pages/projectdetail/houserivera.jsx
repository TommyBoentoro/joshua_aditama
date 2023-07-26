import React from "react"
import Slider from "react-slick"

// Import Images
import cover from "./../../Assets/project/HOUSE_RIVERA/cover.jpg"
import satu from "./../../Assets/project/HOUSE_RIVERA/1.jpg"
import dua from "./../../Assets/project/HOUSE_RIVERA/2.jpg"
import tiga from "./../../Assets/project/HOUSE_RIVERA/3.jpg"
import empat from "./../../Assets/project/HOUSE_RIVERA/4.jpg"
import lima from "./../../Assets/project/HOUSE_RIVERA/5.jpg"
import enam from "./../../Assets/project/HOUSE_RIVERA/6.jpg"
import tujuh from "./../../Assets/project/HOUSE_RIVERA/7.jpg"
import delapan from "./../../Assets/project/HOUSE_RIVERA/8.jpg"
import sembilan from "./../../Assets/project/HOUSE_RIVERA/9.jpg"
import sepuluh from "./../../Assets/project/HOUSE_RIVERA/10.jpg"
import sebelas from "./../../Assets/project/HOUSE_RIVERA/11.jpg"
import duabelas from "./../../Assets/project/HOUSE_RIVERA/12.jpg"
import tigabelas from "./../../Assets/project/HOUSE_RIVERA/13.jpg"
import empatbelas from "./../../Assets/project/HOUSE_RIVERA/14.jpg"
import limabelas from "./../../Assets/project/HOUSE_RIVERA/15.jpg"
import enambelas from "./../../Assets/project/HOUSE_RIVERA/16.jpg"
import tujuhbelas from "./../../Assets/project/HOUSE_RIVERA/17.jpg"



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

class HouseRivera extends React.Component {
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
                <div className="backgroundimg" style={{ backgroundImage: `url(${cover})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", overflow: "hidden" }}>
                    <div className="overlay">
                        <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{ height: "100%" }}>
                            <div className="fontbgheading" >
                                HOUSE RIVIERA
                            </div>
                            <div className="paddingbg fontbgbody" >
                                <div className="row px-sm-0 px-2 ">
                                    <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Category: Interior
                                    </div>
                                    <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Location: Semarang,INA
                                    </div>
                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Year: 2023
                                    </div>
                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Status: Proposal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="marginslick">
                    <Slider {...settings}>
                        <div>
                            <img src={cover} className="opacityimage slickheight" alt="" />
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
                        <div>
                            <img src={sebelas} className="opacityimage slickheight" alt="" />
                        </div>
                        <div>
                            <img src={duabelas} className="opacityimage slickheight" alt="" />
                        </div>
                        <div>
                            <img src={tigabelas} className="opacityimage slickheight" alt="" />
                        </div>
                        <div>
                            <img src={empatbelas} className="opacityimage slickheight" alt="" />
                        </div>
                        <div>
                            <img src={limabelas} className="opacityimage slickheight" alt="" />
                        </div>
                        <div>
                            <img src={enambelas} className="opacityimage slickheight" alt="" />
                        </div>
                        <div>
                            <img src={tujuhbelas} className="opacityimage slickheight" alt="" />
                        </div>
                    </Slider>
                </div>
                <Footbar />
            </>
        )
    }
}

export default HouseRivera
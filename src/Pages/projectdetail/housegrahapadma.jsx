import React from "react"
import Slider from "react-slick"

// Import Images
import cover from "./../../Assets/project/HOUSE_GRAHA_PADMA/cover.jpg"
import satu from "./../../Assets/project/HOUSE_GRAHA_PADMA/1.jpg"
import dua from "./../../Assets/project/HOUSE_GRAHA_PADMA/2.jpg"



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

class GrahaPadma extends React.Component {
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
                                HOUSE GRAHA PADMA
                            </div>
                            <div className="paddingbg fontbgbody" >
                                <div className="row px-sm-0 px-2 ">
                                    <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                        Category: Architecture
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
                    </Slider>
                </div>
                <Footbar />
            </>
        )
    }
}

export default GrahaPadma
import React from "react"
import Slider from "react-slick"

// Import Images
import stradaCoffee from "./../../Assets/project/STRADA COFFEE/COVER.jpg"
import satu from "./../../Assets/project/STRADA COFFEE/1.jpg"
import dua from "./../../Assets/project/STRADA COFFEE/2.jpg"
import tiga from "./../../Assets/project/STRADA COFFEE/3.jpg"
import empat from "./../../Assets/project/STRADA COFFEE/4.jpg"
import lima from "./../../Assets/project/STRADA COFFEE/5.jpg"
import enam from "./../../Assets/project/STRADA COFFEE/6.jpg"

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

class StradaCoffee extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${stradaCoffee})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    STRADA COFFEE
                                </div>
                                <div className="paddingbg fontbgbody" >
                                    <div className="row px-sm-0 px-2 ">
                                        <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Category: Architecture, Interior
                                        </div>
                                        <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Location: Semarang,INA
                                        </div> 
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Year: 2021
                                        </div>
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                            Status: Design Proposal
                                        </div>
                                        {/* <div className="status col-sm">
                                            Status : Done
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div style={{overflow:"hidden"}} className="fontlato  container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato marginbodyheading" >
                        <div className="col-md-10  col-12 fontheading px-md-3 px-sm-0 px-2" >
                            Bringing a new modern coffee culture into its coffee
                            shop, Strada Coffee redesigns its space to be more
                            spacious and modern.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            Strada Coffee project aims a redesign for its interior and outdoor space with minimum
                            changes. Expanding the outdoor space to have more seats gives a new look for the coffee
                            shop, using simple thin structure canopy allows customer to experience outdoor seating
                            area more. The interior space needed to be very well preserved, however, new coffee bar
                            and seating arrangement provided.
                        </div>
                    </div>
    
                    {/* <div className="marginslick">
                        <Slider {...settings}>
                            {
                                this.props.project.data?
                                this.props.project.data.map((value,index) => {
                                    if(index === 0){
                                        return value.image.map((val,idx) => {                                 
                                            return(
                                                <div key={idx}>
                                                    <img src={val.image} className="opacityimage slickheight" alt="" />
                                                </div>
                                            )
                                        })
                                    }else{
                                        return null
                                    }
                                })
                                :
                                null
                            }
                        </Slider>
                    </div> */}
                    
                    <div className="marginslick">
                        <Slider {...settings}>
                            <div>
                                <img src={stradaCoffee} className="opacityimage slickheight" alt="" />
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
                            To enhance the modern element from the existing interior space, the new coffee bar is
                            designed to be a new focal element of the space. Clean, solid, and geometric pattern are
                            used to engage with the existing floor, wall, and ceiling finishes.
                        </div>
                    </div>
                </>
            )
        }
}

export default StradaCoffee
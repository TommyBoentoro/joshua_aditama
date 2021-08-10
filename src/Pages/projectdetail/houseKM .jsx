import React from "react"
import Slider from "react-slick"

// Import Images
import houseKM from "./../../Assets/project/HOUSE KM/COVER.jpeg"
import satu from "./../../Assets/project/HOUSE KM/1.jpeg"
import dua from "./../../Assets/project/HOUSE KM/2.jpg"
import tiga from "./../../Assets/project/HOUSE KM/3.jpg"
import empat from "./../../Assets/project/HOUSE KM/4.jpg"

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


class HouseKM extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${houseKM})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    HOUSE KM
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
                                            Status: Completed
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
                            A formal play of two-storey private villa in one
                            monolithic roof shape.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            Commissioned to be a private villa in Ubud, Bali, this residential aims to maximize indoor
                            views to sorounding nature of Ubud. The architecture form transforms from two-storey
                            mass to a double height living space that maximize openings. The formal approach of this
                            architecture easily blends the typology of interior space, produces 4 bedrooms and spacious
                            living space that will be the main area of the villa.
                            <br/>
                            <br />
                            Worked with Alexis Dornier Architect
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
                                <img src={houseKM} className="opacityimage slickheight" alt="" />
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
    
                        </Slider>
                    </div>
    
                </>
            )
        }
}

export default HouseKM
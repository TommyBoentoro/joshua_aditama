import React from "react"
import Slider from "react-slick"

// Import Images
import omnia from "./../../Assets/project/OMNIA/COVER.jpg"
import satu from "./../../Assets/project/OMNIA/1.jpg"
import dua from "./../../Assets/project/OMNIA/2.jpg"
import tiga from "./../../Assets/project/OMNIA/3.jpg"
import empat from "./../../Assets/project/OMNIA/4.jpg"

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

class Omnia extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${omnia})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    OMNIA
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
                            Representing teamwork and togetherness in its
                            architectural shape and form, combines with
                            vernacular elements.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            A unique 1,4 ha land in Gianyar, Bali, along three river valleys, water falls, and the mist of
                            the jungle commissioned to be a place where both companies and individuals spend their
                            work time in a productive environment. Therefore, creating a symbol of teamwork and
                            togetherness represented into a shared office on the desired site. The existing environment
                            enhances productivity through the shared office building. It also increases teamwork
                            through the form of architecture where it symbolized togetherness.
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
                                <img src={omnia} className="opacityimage slickheight" alt="" />
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

export default Omnia
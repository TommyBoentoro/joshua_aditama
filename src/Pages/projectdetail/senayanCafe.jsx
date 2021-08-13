import React from "react"
import Slider from "react-slick"

// Import Images
import senayanCafe from "./../../Assets/project/SENAYAN CAFE/COVER.jpg"
import satu from "./../../Assets/project/SENAYAN CAFE/008.jpg"
import dua from "./../../Assets/project/SENAYAN CAFE/Rooftop 01.jpg"
import tiga from "./../../Assets/project/SENAYAN CAFE/02.jpg"
import empat from "./../../Assets/project/SENAYAN CAFE/1.jpg"
import lima from "./../../Assets/project/SENAYAN CAFE/R.jpg"
import enam from "./../../Assets/project/SENAYAN CAFE/2.jpg"

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

class SenayanCafe extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${senayanCafe})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    SENAYAN CAFE
                                </div>
                                <div className="paddingbg fontbgbody" >
                                    <div className="row px-sm-0 px-2 ">
                                        <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                            Category: Architecture
                                        </div>
                                        <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                            Location: Jakarta,INA
                                        </div> 
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                            Year: 2020
                                        </div>
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
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
                            Located in Gelora Bung Karno, Senayan Cafe targeted a
                            luxury cafe and bar. The site area is a private man-
                            made grass fields with ponds which give a big advantage for the architecture.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            The site is very unique where a private feeling of enjoying meals with grass field view is
                            provided. The view shapes the architecture to maximize openings and 360 degrees view.
                            The 3 storeys bulding inculded store on the first floor, indoor and outdoor restaurant on the
                            second floor, and private roof top bar. The outdoor area directly connects with the grass
                            field.
                            <br/>
                            <br />
                            Worked with Studio Lepasenja
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
                                <img src={senayanCafe} className="opacityimage slickheight" alt="" />
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
                    <Footbar/>
                </>
            )
        }
}

export default SenayanCafe
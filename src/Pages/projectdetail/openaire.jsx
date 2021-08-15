import React from "react"
import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// Import Images
import openaire from "./../../Assets/project/OPENAIRE/thumbnail.JPG"
import satu from "./../../Assets/project/OPENAIRE/1.JPG"
import dua from "./../../Assets/project/OPENAIRE/2.JPG"
import tiga from "./../../Assets/project/OPENAIRE/3.JPG"
import empat from "./../../Assets/project/OPENAIRE/4.JPG"
import lima from "./../../Assets/project/OPENAIRE/5.JPG"
import enam from "./../../Assets/project/OPENAIRE/6.JPG"
import tujuh from "./../../Assets/project/OPENAIRE/7.JPG"
import delapan from "./../../Assets/project/OPENAIRE/8.JPG"

// import Footer
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

class Openaire extends React.Component{
    render(){

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        autoplay:false,
        dots:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        };

        return(
            <>
                <div className="backgroundimg" style={{backgroundImage:`url(${openaire})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                    <div className="overlay">
                        <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                            <div className="fontbgheading" >
                                OPENAIRE
                            </div>
                            <div className="paddingbg fontbgbody" >
                                <div className="row px-sm-0 px-2 ">
                                    <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Category: Architecture, Interior, Landscape
                                    </div>
                                    <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Location: Semarang,INA
                                    </div> 
                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Year: 2020
                                    </div>
                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                        Status: Under Construction
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
                        A 7000 square meters consists of a restaurant, a 
                        concept store, bars, and outdoor attractions, 
                        incorporating man-made nature into its structure. Tons 
                        of planted real trees and plants give an experience of 
                        open air architecture.
                    </div>
                    <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                        The goal of providing a new experience of restaurant and bar by incorporating tropical 
                        nature idea into its spaces define the architecture idea to harmonize the desired man-made 
                        tropical nature. Located near Pantai Marina in Semarang, the original structure was a gokart 
                        arena which majorly redesigned and rebuild for OPENAIRE Restaurant and Bar. It aims to be 
                        a new land mark to the nearby area, evoking the area to be more livable where residential is 
                        mostly built.
                        <br/>
                        <br />
                        The 7000 sqm offers a variety of typologies: a restaurant, a concept store, bars and outdoor 
                        attractions (man-made pond and gardens). These typologies are integrated in OPENAIRE
                        where the sense of experiencing nature are highly provided. Therefore OPENAIRE gives a 
                        strong connection between the the nature and indivuals experiencing a bunch of activities.
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
                            <img src={openaire} className="opacityimage slickheight" alt="" />
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

                    </Slider>
                </div>

                <div style={{overflow:"hidden"}} className=" container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato" >
                    <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-2" >
                        Desired tropical nature defines the architecture expression. To be higly connected with the 
                        nature, the architecture reflects the geometry of what we find in the nature through organic 
                        shapes and irregularity. This way of thinking interpreted to interior spaces that gives 
                        different experiences of three dimensional space in every areas. The material chosen is also 
                        interpreted to be a fully harmony with the man-made nature, using mostly natural-look 
                        materials and fixtures despite artificial materials
                    </div>
                </div>
                <Footbar/>
            </>
        )
    }
}

export default Openaire
import React from "react"
import Slider from "react-slick"

// Import Images
import houseE from "./../../Assets/project/HOUSE E/COVER.JPG"
import satu from "./../../Assets/project/HOUSE E/1.jpg"
import dua from "./../../Assets/project/HOUSE E/2.JPG"
import tiga from "./../../Assets/project/HOUSE E/3.JPG"
import empat from "./../../Assets/project/HOUSE E/4.JPG"
import lima from "./../../Assets/project/HOUSE E/5.JPG"


// Import CSS
import "./../../"
import "./../../Supports/tiga.css"
import "./../../Supports/home.css"
import "./../../Supports/projectDetail.css"
import "./../../Supports/projectResponsive.css"

// import Footer
import Footbar from "../../components/Footer"

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

class HouseE extends React.Component{
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
                    <div className="backgroundimg" style={{backgroundImage:`url(${houseE})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                        <div className="overlay">
                            <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                <div className="fontbgheading" >
                                    HOUSE E
                                </div>
                                <div className="paddingbg fontbgbody" >
                                    <div className="row px-sm-0 px-2">
                                        <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                            Category: Interior Design
                                        </div>
                                        <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                            Location: Semarang,INA
                                        </div> 
                                        <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-start justify-content-start">
                                            Year: 2021
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
                            A renovation of an old house, with minor changing in
                            architectural elements to go with modern luxury living
                            concept.
                        </div>
                        <div className="col-md-10 col-12 fontbody px-md-3 px-sm-0 px-2">
                            The owner of the house wanted to have a new look for her house. She wanted to have a
                            modern-luxury living with white as a dominant ambience. A total redesign for interior space
                            is provided to change the existing interior design. White finishes such as white glossy paint
                            and white marble combine with brass and bronze metal finishes produce a luxury ambience
                            for the new house.
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
                                <img src={houseE} className="opacityimage slickheight" alt="" />
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
    
                        </Slider>
                    </div>
                    <Footbar/>
                </>
            )
        }
}

export default HouseE
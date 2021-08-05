import React from "react"
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// Import Image
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import jumbotron from "./../Assets/jumbotron.JPG"
import bgproject from "./../Assets/project/bgproject.png"
import test1 from "./../Assets/project/test1.png"

// Import CSS
import "./../Supports/tiga.css"
import "./../Supports/home.css"

const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" style={{display:"none"}} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" style={{display:"none"}} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

class Tiga extends React.Component{

    // componentDidMount(){
    //     multipleSlick()
    // }

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

            <div style={{marginTop:"100px"}}>
                
                <Slider {...settings}  >
                    <div style={{height:"700px"}}>
                        <img className="opacityimage" src={jumbotron} style={{height:"700px", width:"100%", padding:"0 15px"}} alt="" />
                    </div>
                    <div >
                        <img className="opacityimage" src={bgproject} style={{height:"700px", width:"100%", padding:"0 15px"}} alt="" />
                    </div>
                    <div>
                        <img className="opacityimage" src={test1} style={{height:"700px", width:"100%", padding:"0 15px"}} alt="" />
                    </div>
                </Slider>
            </div>
            
          
        )
    }
}

export default Tiga
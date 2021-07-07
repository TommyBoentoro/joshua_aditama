  
import "./../Supports/slider.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut1 from "./../Assets/astrounaut1.jpg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import jumbotron from "./../Assets/jumbotron.JPG"
import bgproject from "./../Assets/project/bgproject.png"
import fotoHome from "./../Assets/fotoHome-1.png"

const images = [jumbotron, bgproject, fotoHome, astronaut1];

function Slidertest() {
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

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots:true,
    speed: 500,
    slidesToShow: 3,
    autoplay:true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider">
      <Slider {...settings} >
        {images.map((img, idx) => (
          <div  className={idx === imageIndex ? "slide activeSlide": "slide"}>
            <img src={img} alt={img} style={{width:"1000px", height:"570px"}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slidertest ;
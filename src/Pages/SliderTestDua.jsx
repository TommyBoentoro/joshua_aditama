import React from "react"

import "./../Supports/sliderdua.css"
import Slider from "react-slick";



class Duaslider extends React.Component{
    render(){

        const settings = {
            infinite: true,
            lazyLoad: true,
            dots: true,
            speed: 500,
            slidesToShow: 1,
            autoplay:true,
            
          };

        return(
            <>
            
                <div id="slider">
                        <input type="radio" name="slider" id="s1"/>
                        <input type="radio" name="slider" id="s2"/>
                        <input type="radio" name="slider" id="s3"/>
                        <input type="radio" name="slider" id="s4"/>
                        <input type="radio" name="slider" id="s5"/>

                        <label for="s1" id="slide1">1</label>
                        <label for="s2" id="slide2">2</label>
                        <label for="s3" id="slide3">3</label>
                        <label for="s4" id="slide4">4</label>
                        <label for="s5" id="slide5">5</label>
                </div>
            
            </>
        )
    }
}

export default Duaslider
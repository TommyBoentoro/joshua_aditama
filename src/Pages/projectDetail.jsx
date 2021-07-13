import React from "react"
import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// Redux
import { connect } from "react-redux";


// Import Images
import jumbotron from "./../Assets/jumbotron.JPG"
import bgproject from "./../Assets/project/bgproject.png"
import fotoHome from "./../Assets/fotoHome-1.png"
import project3 from "./../Assets/project/project3.png"
import project4 from "./../Assets/project/project4.png"
import project5 from "./../Assets/project/project5.png"
import project6 from "./../Assets/2568963.jpg"
import test1 from "./../Assets/project/test1.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import CSS
import "./../Supports/tiga.css"
import "./../Supports/home.css"
import "./../Supports/projectDetail.css"
import "./../Supports/projectResponsive.css"


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


class ProjectDetail extends React.Component{
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
            <div className="backgroundimg" style={{backgroundImage:`url(${jumbotron})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center"}}>
                <div className="overlay">
                    <div className="container  px-md-3 px-sm-0 px-5 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                        <div className="fontbgheading" >
                            Openaire Semarang
                        </div>
                        <div className="paddingbg fontbgbody" >
                            <div className="row px-sm-0 px-3">
                                <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                    Client : Openaire Group
                                </div>
                                <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                    Category : Interior
                                </div> 
                                <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                    Location : Semarang, INA
                                </div>
                                <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                    Year : 2021
                                </div>
                                <div className="status col-sm">
                                    Status : Done
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fontlato  container px-md-3 px-sm-0 px-5 d-flex flex-column align-items-center fontlato marginbodyheading" >
                <div className="col-md-10  col-12 fontheading px-md-3 px-sm-0 px-3" >
                    Nam sit amet elementum libero. Nulla facilisi. Aenean vulputate venenatis ligula eu cursus. Nunc rhoncus sapien at malesuada posuere. Cras ac fermentum ipsum. 
                </div>
                <div className="col-md-10 col-12 fontbody  px-md-3 px-sm-0 px-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit tellus, egestas sodales sodales vitae, facilisis vel nisi. Praesent vitae faucibus augue. 
                    Suspendisse quis mauris mauris. Quisque sit amet tristique leo. Proin luctus iaculis mauris non tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Nulla ligula ante, dapibus vitae dolor tristique, mollis sodales ex. Donec aliquam, magna non ullamcorper iaculis, nibh elit feugiat massa, quis efficitur velit lorem sed orci. 
                    Suspendisse eget tempor ex, id bibendum massa. 
                    Phasellus a pulvinar erat. Pellentesque purus quam, tristique at posuere vitae, venenatis eu turpis. Suspendisse quis nisi sit amet purus suscipit tempus. Sed sed faucibus eros. 
                    Suspendisse placerat mauris et nisl egestas ultricies.
                <br/>
                <br/>
                    Sed consectetur, nibh nec dapibus lacinia, dui elit consequat lacus, quis vestibulum diam quam sit amet ante. Phasellus et volutpat nibh, quis fermentum dui. 
                    Duis tristique vestibulum urna ac egestas. Aliquam lectus ipsum, iaculis venenatis pellentesque a, congue quis eros. Aliquam sit amet lacus malesuada, interdum tellus et, 
                    fringilla enim. Aenean viverra, dui eget pellentesque maximus, metus ipsum aliquam lacus, nec sagittis mi ex sed sem. Vivamus eu ornare nunc. Fusce ligula libero, pretium 
                    non suscipit venenatis, maximus non mi. Pellentesque pulvinar justo ligula, malesuada interdum est dapibus vel. Donec sollicitudin urna non lectus feugiat imperdiet sit amet a 
                    eros.
                </div>
            </div>

            <div className="marginslick"  >   
                <Slider {...settings}  >
                    <div>
                        <img className="opacityimage slickheight" src={jumbotron} alt="" />
                    </div>
                    <div >
                        <img className="opacityimage slickheight" src={bgproject} alt="" />
                    </div>
                    <div>
                        <img className="opacityimage slickheight" src={test1} alt="" />
                    </div>
                </Slider>
            </div>

            <div className="  container px-md-3 px-sm-0 px-5 d-flex flex-column align-items-center fontlato" >
                <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-3" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit tellus, egestas sodales sodales vitae, facilisis vel nisi. Praesent vitae faucibus augue. 
                    Suspendisse quis mauris mauris. Quisque sit amet tristique leo. Proin luctus iaculis mauris non tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Nulla ligula ante, dapibus vitae dolor tristique, mollis sodales ex. Donec aliquam, magna non ullamcorper iaculis, nibh elit feugiat massa
                <br/>
                <br/>
                    Sed consectetur, nibh nec dapibus lacinia, dui elit consequat lacus, quis vestibulum diam quam sit amet ante. Phasellus et volutpat nibh, quis fermentum dui. 
                    Duis tristique vestibulum urna ac egestas. Aliquam lectus ipsum, iaculis venenatis pellentesque a, congue quis eros. Aliquam sit amet lacus malesuada, interdum tellus et, 
                    fringilla enim. Aenean viverra, dui eget pellentesque maximus, metus ipsum aliquam lacus, nec sagittis mi ex sed sem. Vivamus eu ornare nunc eros.
                </div>
            </div>

            <div className="container d-flex justify-content-center fontlato fontproject">
                Related Project
            </div>
            
            <div className="container px-md-3 px-sm-0 px-5 marginrelated" >
                <div className="row ">
                    <div className="col-sm-3 px-md-3 px-sm-1 px-3 image imagehover">
                         <div style={{overflow:"hidden"}} >
                            <img src={project3} alt="" className="imagecol-3" />
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle" >
                                Openaire
                           </div>
                           <div className="col-md-8 fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-6 px-md-3 px-sm-1 px-3 image imagehover margincard">
                        <div style={{overflow:"hidden"}} >
                            <img src={project4} alt="" className="imagecol-6"  />
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory">
                               Architect
                           </div >
                           <div className="fonttitle">
                                Openaire Semarang
                           </div>
                           <div className="col-12 fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-3 px-md-3 px-sm-1 px-3 image imagehover margincard">
                        <div style={{overflow:"hidden"}} >
                            <img src={project5} alt="" className="imagecol-3"/>
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle">
                                Openaire
                           </div>
                           <div className="col-md-8 fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}

export default  connect(mapStateToProps, "") (ProjectDetail)
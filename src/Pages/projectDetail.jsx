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
            <div style={{width:"100%", height:"900px", backgroundImage:`url(${jumbotron})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center"}}>
                <div className="overlay">
                    <div className="container d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                        <div style={{fontSize:"63px", fontWeight:"400", color:"white", paddingBottom:"60px", letterSpacing:"0.025cm"}}>
                            Openaire Semarang
                        </div>
                        <div  style={{fontSize:"18px", fontWeight:"400", color:"white", paddingBottom:"70px" }}>
                            <div className="row ">
                                <div className="col d-flex justify-content-center">
                                    Client : Openaire Group
                                </div>
                                <div className="col d-flex justify-content-center">
                                    Category : Interior
                                </div> 
                                <div className="col d-flex justify-content-center">
                                    Location : Semarang, INA
                                </div>
                                <div className="col d-flex justify-content-center">
                                    Year : 2021
                                </div>
                                <div className="col d-flex justify-content-center">
                                Status : Done
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex flex-column align-items-center fontlato" style={{marginTop:"100px"}}>
                <div className="col-10 fontlato" style={{fontSize:"32px", fontWeight:"300", letterSpacing:"0.03cm", lineHeight:"170%"}}>
                    Nam sit amet elementum libero. Nulla facilisi. Aenean vulputate venenatis ligula eu cursus. Nunc rhoncus sapien at malesuada posuere. Cras ac fermentum ipsum. 
                </div>
                <div className="col-10" style={{marginTop:"50px", fontSize:"18px", fontWeight:"300", color:"#8F8F8F", lineHeight:"180%", letterSpacing:"0.025cm"}}>
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

            <div  style={{marginTop:"130px"}}>   
                <Slider {...settings}  >
                    <div>
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

            <div className="container d-flex flex-column align-items-center fontlato" >
                <div className="col-10" style={{marginTop:"50px", fontSize:"18px", fontWeight:"300", color:"#8F8F8F", lineHeight:"180%", letterSpacing:"0.025cm"}}>
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

            <div className="conatiner d-flex justify-content-center fontlato" style={{fontSize:"46px", fontWeight:"400", marginTop:"93px"}}>
                Related Project
            </div>
            
            <div className="container" style={{marginTop:"93px"}}>
                <div className="row">
                    <div className="col-3 image imagehover">
                        <div style={{overflow:"hidden"}}>
                            <a href="/projectdetail"> <img src={project3} alt="logo"  style={{height:"360px", width:"100%"}} /> </a>
                        </div>
                        <div style={{marginTop:"40px"}}>
                            <div  style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem"}}>
                               Interior
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.02rem"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-12" style={{marginTop:"12px", position:"relative", right:"15px", fontSize:"16px", fontWeight:"300", }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           </div>
                        </div>
                    </div>
                    <div className="col-6 " >
                        <div className="imagehover" style={{overflow:"hidden"}} >
                            <img src={project4} alt=""  style={{height:"360px", width:"100%"}} />
                        </div>
                        <div style={{marginTop:"40px"}}>
                            <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                               Architect
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem", color:"black"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-12" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>
                    <div className="col-3 " >
                        <div className="imagehover" style={{overflow:"hidden"}} >
                            <img src={project5} alt=""  style={{height:"360px", width:"100%"}} />
                        </div>
                        <div style={{marginTop:"40px"}}>
                            <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                               Architect
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem", color:"black"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-12" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
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
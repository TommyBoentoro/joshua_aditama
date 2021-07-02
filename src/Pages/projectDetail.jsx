import React from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Import Images
import jumbotron from "./../Assets/jumbotron.JPG"
import bgproject from "./../Assets/project/bgproject.png"
import fotoHome from "./../Assets/fotoHome-1.png"
import project3 from "./../Assets/project/project3.png"
import project4 from "./../Assets/project/project4.png"
import project5 from "./../Assets/project/project5.png"

class ProjectDetail extends React.Component{
    render(){
        
        const settings = {
            autoplay: true,
            infinite:true,
            speed:500,
            slideToShow: 1,
            slideToScroll: 1,
            dots: true
        }

        return(
            <>
            <div className="bgimg" style={{width:"100%", height:"900px"}}>
                <div className="container d-flex flex-column justify-content-end  fontlato" style={{height:"100%"}}>
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
            <div className="container d-flex flex-column align-items-center fontlato" style={{marginTop:"200px"}}>
                <div className="col-10 fontlato" style={{fontSize:"32px", fontWeight:"300", letterSpacing:"0.03cm", lineHeight:"170%"}}>
                    Nam sit amet elementum libero. Nulla facilisi. Aenean vulputate venenatis ligula eu cursus. Nunc rhoncus sapien at malesuada posuere. Cras ac fermentum ipsum. 
                </div>
                <div className="col-10" style={{marginTop:"50px", fontSize:"17px", fontWeight:"400", color:"#8F8F8F", lineHeight:"180%", letterSpacing:"0.025cm"}}>
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

            <div className="container " style={{marginTop:"130px"}}>
                <Slider {...settings}>
                    <div>
                        <img src={jumbotron} alt="Jumbotron" style={{height:"630px", width:"100%"}}/>
                    </div>
                    <div >
                       <img src={bgproject} alt="" style={{height:"630px", width:"100%"}} />
                    </div>
                    <div>
                        <img src={fotoHome} alt="" style={{height:"630px", width:"100%"}} />
                    </div>
                </Slider>
            </div>

            <div className="container d-flex flex-column align-items-center fontlato" style={{marginTop:"100px"}}>
                <div className="col-10" style={{marginTop:"50px", fontSize:"17px", fontWeight:"400", color:"#8F8F8F", lineHeight:"180%", letterSpacing:"0.025cm"}}>
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
                    <div className="col-3 " >
                        <div className="imagehover" style={{overflow:"hidden"}} >
                            <img src={project3} alt="" style={{height:"360px", width:"100%"}}/>
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

export default ProjectDetail
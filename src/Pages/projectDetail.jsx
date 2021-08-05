import React from "react"
import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// Redux
import { connect } from "react-redux";

// Action
import {onGetDetailProject} from "../Redux/Actions/projectaction"

// Import Images
import jumbotron from "./../Assets/jumbotron.JPG"
import bgproject from "./../Assets/project/bgproject.png"
import fotoHome from "./../Assets/fotoHome-1.png"
import project3 from "./../Assets/project/project3.png"
import project4 from "./../Assets/project/project4.png"
import project5 from "./../Assets/project/project5.png"
import project6 from "./../Assets/2568963.jpg"
import test1 from "./../Assets/project/test1.png"
import { FaArrowRight, FaArrowLeft, FaRegHandScissors, FaDove } from "react-icons/fa";

// Import CSS
import "./../Supports/tiga.css"
import "./../Supports/home.css"
import "./../Supports/projectDetail.css"
import "./../Supports/projectResponsive.css"

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



class ProjectDetail extends React.Component{

    componentDidMount(){
        this.onGetDetail()
    }

    onGetDetail = () => {
        let idProduct = window.location.pathname.split(`/`)[2]
        console.log(idProduct)

        this.props.onGetDetailProject(idProduct)
    }

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
            {/* <div className="backgroundimg" style={{backgroundImage:`url(${jumbotron})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}>
                <div className="overlay">
                    <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                        <div className="fontbgheading" >
                            Openaire Semarang
                        </div>
                        <div className="paddingbg fontbgbody" >
                            <div className="row px-sm-0 px-2 ">
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
            </div> */}

            <div>
                {
                    this.props.project.data?
                    this.props.project.data.map((value,index) =>{
                        return(
                            <>
                            <div>
                                {
                                    value.image.map((val,idx) => {
                                        if(idx === 0){
                                            return(
                                                <div className="backgroundimg" style={{backgroundImage:`url(${jumbotron})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center", overflow:"hidden"}}> 
                                                    <div className="overlay">
                                                        <div className="container  px-md-3 px-sm-0 px-4 d-flex flex-column justify-content-end fontlato" style={{height:"100%"}}>
                                                            <div className="fontbgheading" >
                                                                {value.title}
                                                            </div>
                                                            <div className="paddingbg fontbgbody" >
                                                                <div className="row px-sm-0 px-2 ">
                                                                    {/* <div className=" col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                                                        Client : Openaire Group
                                                                    </div> */}
                                                                    <div className="col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                                                        Category : {value.category}
                                                                    </div> 
                                                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                                                        Location : {value.location}
                                                                    </div>
                                                                    <div className="col-sm  col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                                                        Year : {value.year}
                                                                    </div>
                                                                    <div className="status col-sm col-6 py-md-0 py-1 d-flex justify-content-md-center justify-content-start">
                                                                        Status : {value.status}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        
                                    })
                                }
                            </div>
                            </>
                            
                        )
                    })
                    :
                    null
                }
            </div>

            <div>
                {
                    this.props.project.data?
                    this.props.project.data.map((value,index) => {
                        return(
                            <div style={{overflow:"hidden"}} className="fontlato  container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato marginbodyheading" >
                                <div className="col-md-10  col-12 fontheading px-md-3 px-sm-0 px-2" >
                                    {value.head_description}
                                </div>
                                <div className="col-md-10 col-12 fontbody  px-md-3 px-sm-0 px-2">
                                    {value.description}
                                <br/>
                                </div>
                            </div>
                        )
                    })
                    :
                    null
                }
            </div>

            <div className="marginslick">
                <Slider {...settings}>
                    {
                        this.props.project.data?
                        this.props.project.data.map((value,index) => {
                            if(index === 0){
                                return value.image.map((val,idx) => {
                                    if (idx < 3){
                                        return(
                                            <div>
                                                <img src={val.image} className="opacityimage slickheight" alt="" />
                                            </div>
                                        )
                                    }
                                })
                            }
                        })
                        :
                        null
                    }
                </Slider>
            </div>

            {
                this.props.project.data?
                this.props.project.data.map((value,index) => {
                    return(
                        <div style={{overflow:"hidden"}} className="container px-md-3 px-sm-0 px-4 d-flex flex-column align-items-center fontlato" >
                            <div className="col-md-10 col-12 fontbody-dua  px-md-3 px-sm-0 px-2" >
                               {value.descriptionDua}
                            <br/>
                            <br/>
                                
                            </div>
                        </div>
                    )
                })
                :
                null
            }

            {/* <div style={{overflow:"hidden"}} className="container d-flex justify-content-center fontlato fontproject">
                Related Project
            </div>
            
            <div style={{overflow:"hidden"}} className="container px-md-3 px-sm-0 px-4 marginrelated" >
                <div className="row ">
                    <div className="col-sm-3 px-md-3 px-sm-1 px-4 image imagehover">
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
                           <div className=" fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-6 px-md-3 px-sm-1 px-4 image imagehover margincard">
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
                           <div className=" fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-3 px-md-3 px-sm-1 px-4 image imagehover margincard">
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
                           <div className=" fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                </div>
            </div> */}
                
            </>
        )
    }
}

const mapDispatchToProps = {
    onGetDetailProject
}

const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (ProjectDetail)
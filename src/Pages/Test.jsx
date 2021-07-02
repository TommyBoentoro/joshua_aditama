import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Action
import { onGetData } from "../Redux/Actions/projectaction"

// import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"



// Import css
import "./../Supports/home.css"
import "./../Supports/hover.css"

class Test extends React.Component{

    // componentWillReceiveProps(){
    //     this.refs.slick.innerSlider.onWindowResized()
    //   }

    componentDidMount(){
        this.onGet()
    }

    onGet = () => {
        let token = localStorage.getItem("my-tkn")

        let data = {
            token :token
        }

        this.props.onGetData(data)
    }

    render(){

        // const settings = {
        //     autoplay: true,
        //     infinite:true,
        //     speed:500,
        //     slideToShow: 1,
        //     slideToScroll: 1,
        //     dots: true,
            
        // }
        return(
            <>
            <div style={{paddingTop:"200px"}}>
                {/* <Link to ='/'>
                        <button  className="fontlato btn-1" style={{width:"143px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", border:"1px solid black" }}>
                            View more
                        </button>
                </Link> */}
                <a href="/projectdetail">
                        <button  className="fontlato btn-1" style={{width:"143px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", border:"1px solid black" }}>
                            View more
                        </button>
                </a>
            </div>
            {/* Test Slider */}
                {/* <div className="container1">
                    <Slider ref="slick" className="border"{...settings}>
                       <img src={gambarHome1} alt="" />
                       <img src={gambarHome1} alt="" />
                       <img src={gambarHome1} alt="" />
                    
                    </Slider>
                </div>
                
            

            <div className="border" style={{width:"100vh", height:"200px", marginTop:"200px"}}>
                tommy
            </div> */}

                {/* Test Hover Home */}
              {/* <div className="container d-flex bgcard" style={{height:"400px", position:"relative", top:"200px"}}>
                <div className="border col-4 d-flex align-items-end" id="picture_one" style={{height:"400px"}}>
                    <div className="d-flex flex-column justify-content-end cardhover1 border" style={{height:"150px", width:"400px"}}>
                        <div>
                            Ini Judul
                        </div>
                        <div>
                            Ini Deskripsi
                        </div>
                    </div>
                </div>
                <div className="border col-4 d-flex align-items-end" style={{height:"400px"}}>
                    <div className="d-flex flex-column justify-content-end cardhover1 border" id="picture_two" style={{height:"150px", width:"400px"}}>
                        <div>
                            Ini Judul
                        </div>
                        <div>
                            Ini Deskripsi
                        </div>
                    </div>
                </div>
                <div className="border col-4 d-flex align-items-end" style={{height:"400px"}}>
                    <div className="d-flex flex-column justify-content-end cardhover1 border" id = "picture_three" style={{height:"150px", width:"400px"}}>
                        <div>
                            Ini Judul
                        </div>
                        <div>
                            Ini Deskripsi
                        </div>
                    </div>
                </div>
              </div> */}
                
              


            {/* Test Maping */}
            <div className="container d-flex flex-column justify-content-between" style={{marginTop:"200px"}}>
                {
                    this.props.project.data?
                    this.props.project.data.map((value,index) => {
                        return(
                            <>
                                <div>
                                    {value.title}
                                </div>
                                <div>
                                    {value.description}
                                </div>
                                <div>
                                    {
                                        value.image.map((val,idx) => {
                                            return(
                                                <div key={idx} className="border" style={{width:"200px", height:"100px"}}>
                                                    <img src={val.image} alt="image gagal"/>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                </div>
                                <br />
                            </>
                        )
                    })
                    :
                    null
                }

                {/* {
                    this.props.project.data?
                    this.props.project.data.map((value,index) => {
                        if(index % 3 == 0){ 
                            return(
                                <>
                                <div className="card " style={{width: "200px", marginTop:"200px"}}>   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                </>
                            )
                        }else if(index % 2 === 0){ //Genap
                            return(
                                <>
                                <div className="card " style={{width: "18rem", marginTop:"200px"}}>   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                </>
                            )
                        }else{
                            return( // Ganjil
                                <>
                                <div className="card " style={{width: "400px", marginTop:"200px"}}>   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        
                    })
                    :
                        null
                } */}
            </div>

                {/* Yang belum bisa */}
                
                {/* Front-end */}
                {/* 1. Animasi slick di home */}
                {/* 2. Animasi Hover di home */} 

                {/* Back-end */}
                {/* 1. Get image */}

            </>
        )
    }
}

const mapDispatchToProps = {
    onGetData
}

const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Test)
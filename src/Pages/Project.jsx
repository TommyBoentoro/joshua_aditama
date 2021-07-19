import React from "react"
import {Link} from "react-router-dom"

// Import Redux
import { connect } from "react-redux"
import { onGetData } from "../Redux/Actions/projectaction"

// Import Image
import logo from "./../Assets/logo-2.png"
import project1 from "./../Assets/project/project1.png"
import project2 from "./../Assets/project/project2.png"
import project3 from "./../Assets/project/project3.png"
import project4 from "./../Assets/project/project4.png"
import project5 from "./../Assets/project/project5.png"
import project6 from "./../Assets/project/project6.png"
import project7 from "./../Assets/project/project7.png"
import project8 from "./../Assets/project/project8.png"
import project9 from "./../Assets/project/project9.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"

// Import css
import "./../Supports/home.css"
import "./../Supports/projectResponsive.css"

class Project extends React.Component{

    // componentDidMount(){
    //     this.onGet()
    // }

    // onGet = () => {
       

    //     this.props.onGetData()
    // }


    render(){
        return(
            <>
                <div className="bgproject bgimageresponsive">
                        <div className="overlay">
                        <div className="container px-md-3 px-sm-0 px-4 fontlato" style={{height:"100%", color: "white"}}>
                                <div className="d-flex flex-column justify-content-end px-md-3 px-sm-3 px-2" style={{height:"100%"}}>
                                    <div className="fontbgproject " style={{ fontWeight:"300", letterSpacing:"0.015cm"}}> 
                                        Projects
                                    </div>
                                    <div className="linebgproject" >
                                        
                                    </div>
                                </div>
                            </div>.
                        </div>
                </div>
                
                {/*  */}
                {/* <div className="d-flex flex-row justify-content-between" style={{width:"100%", marginTop:"74px"}}>
                    <div className="border fontlato" style={{width:"1050px", height:"557px", marginLeft:"130px"}}>
                       <div className="border" style={{height:"360px"}}>
                           <img src={project1} alt="" style={{height:"100%", width:"100%"}}/>
                       </div>
                       <div className="d-flex flex-column" style={{marginTop:"40px"}}>
                           <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                               Interior
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem", color:"black"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-7" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt. Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                       </div>
                    </div>
                    <div className="border" style={{width:"550px", height:"557px", marginRight:"130px"}}>
                        <div className="border" style={{height:"360px"}}>
                            <img src={project2} alt="" style={{height:"100%", width:"100%"}} />
                        </div>
                        <div className="d-flex flex-column" style={{marginTop:"40px"}}>
                           <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                               Architect
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem", color:"black"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-10" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt. Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                       </div>
                    </div>
                    <div>
                        test
                    </div>
                </div> */}

            {/*  */}

            {/* Content */}

            <div className="container px-md-3 px-sm-4 px-5" >
                {/* <div className="row">
                   {
                       this.props.project.data?
                       this.props.project.data.map((value,index)=> {
                            if(index + 1 === 1 || index + 1 === 9 || index + 1 === 17 ){ 
                                return(
                                    <>
                                    <div className="col-9 image imagehover"  style={{marginTop:"80px"}} >
                                        <div>
                                            {
                                                value.image.map((val,idx)=>{
                                                    
                                                    return(
                                                        <>
                                                            <div className="image">
                                                            <div className="imagehover" style={{overflow:"hidden", width:"100%"}}>
                                                                <a href="/projectdetail"> <img src={val.image} alt="logo"  style={{height:"360px", width:"100%"}} /> </a>
                                                            </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div style={{marginTop:"40px"}}>
                                            <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                                            Interior
                                        </div >
                                        <div  style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem"}}>
                                                {value.title}
                                        </div>
                                        <div className="col-8" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                                                {value.description}
                                        </div>
                                        </div>
                                    </div>
                                        
                                        
                                    </> 
                            )}else if(index + 1 === 2 || index + 1 === 3 || index + 1 === 5 || index + 1 === 7 || index + 1 === 8 || index + 1 === 10
                                || index + 1 === 11 || index + 1 === 13 || index + 1 === 15 || index + 1 === 16 || index + 1 === 18 || index + 1 === 19
                                || index + 1 === 21 || index + 1 === 23 || index + 1 === 24){
                                return(
                                    <>
                                    <div className="col-3 image imagehover"  style={{marginTop:"80px"}} >
                                        <div>
                                            {
                                                value.image.map((val,idx)=>{
                                                    
                                                    return(
                                                        <>
                                                            <div className="image">
                                                            <div className="imagehover" style={{overflow:"hidden", width:"100%"}}>
                                                                <a href="/projectdetail"> <img src={val.image} alt="logo"  style={{height:"360px", width:"100%"}} /> </a>
                                                            </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div style={{marginTop:"40px"}}>
                                            <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                                            Interior
                                        </div >
                                        <div  style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem"}}>
                                                {value.title}
                                        </div>
                                        <div className="col-12" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                                                {value.description}
                                        </div>
                                        </div>
                                    </div>
                                        
                                        
                                    </> 
                            )} else if( index + 1 === 4 || index + 1 === 6 || index + 1 === 12 || index + 1 === 14 || index + 1 === 20 || index + 1 === 22){
                                return(
                                    <>
                                    <div className="col-6 image imagehover"  style={{marginTop:"80px"}} >
                                        <div>
                                            {
                                                value.image.map((val,idx)=>{
                                                    
                                                    return(
                                                        <>
                                                            <div className="image">
                                                            <div className="imagehover" style={{overflow:"hidden", width:"100%"}}>
                                                                <a href="/projectdetail"> <img src={val.image} alt="logo"  style={{height:"360px", width:"100%"}} /> </a>
                                                            </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div style={{marginTop:"40px"}}>
                                            <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                                            Interior
                                        </div >
                                        <div  style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem"}}>
                                                {value.title}
                                        </div>
                                        <div className="col-12" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                                                {value.description}
                                        </div>
                                        </div>
                                    </div>
                                        
                                        
                                    </> 
                            )}
                       })
                       :
                       null
                   }
                </div> */}

                <div className="row">
                    <div className="col-sm-9 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                        <div style={{overflow:"hidden"}}>
                            <a href="/projectdetail"> <img src={project9} alt="logo" className="imagecol-9" /> </a>
                        </div>
                        <div className="margincardbody ">
                            <div className="fontcategory">
                               Interior
                           </div >
                           <div className="fonttitle ">
                                Openaire Semarang
                           </div>
                           <div className="col-md-8 col-12 px-0  fontbodyproject ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                         <div style={{overflow:"hidden"}} >
                            <img src={project2} alt="" className="imagecol-3" />
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle " >
                                Binong
                           </div>
                           <div className=" fontbodyproject ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                        <div style={{overflow:"hidden"}} >
                            <img src={project3} alt="" className="imagecol-3"/>
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle">
                                SPM
                           </div>
                           <div className=" fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    <div className="col-sm-6 px-md-3 px-sm-1 px-0  image imagehover paddingbody">
                        <div style={{overflow:"hidden"}} >
                            <img src={project4} alt="" className="imagecol-6"  />
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory">
                               Architect
                           </div >
                           <div className="fonttitle">
                                Mangga Dua
                           </div>
                           <div className="col-12 px-0   fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>

                    <div className="hiddendummy col-sm-3 px-md-3 px-sm-1 px-3 image imagehover paddingbody">
                        <div style={{overflow:"hidden"}} >
                            <img src={project5} alt="" className="imagecol-3"/>
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle">
                                SPM
                           </div>
                           <div className="fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    <div className="hiddendummy col-sm-6 px-md-3 px-sm-1 px-3  image imagehover paddingbody">
                        <div style={{overflow:"hidden"}} >
                            <img src={project6} alt="" className="imagecol-6"  />
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory">
                               Architect
                           </div >
                           <div className="fonttitle">
                                Mangga Dua
                           </div>
                           <div className="col-12 px-0   fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>
                    <div className="hiddendummy col-sm-3 px-md-3 px-sm-1 px-3 image imagehover paddingbody">
                        <div style={{overflow:"hidden"}} >
                            <img src={project7} alt="" className="imagecol-3"/>
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle">
                                SPM
                           </div>
                           <div className=" fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    <div className="hiddendummy col-sm-3 px-md-3 px-sm-1 px-3 image imagehover paddingbody">
                        <div style={{overflow:"hidden"}} >
                            <img src={project8} alt="" className="imagecol-3"/>
                        </div>
                        <div className="margincardbody">
                            <div className="fontcategory" >
                               Architect
                           </div >
                           <div className="fonttitle">
                                SPM
                           </div>
                           <div className=" fontbodyproject">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/*  */}

            <div className=" d-flex justify-content-center marginbutton" >
                <button className="fontlato btn-11 buttonview">
                    View more
                </button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (Project)
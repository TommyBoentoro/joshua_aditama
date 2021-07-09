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
                            <div className="d-flex container flex-column justify-content-end fontlato" style={{height:"100%", color: "white"}}>
                                    <div className="fontbgproject" style={{ fontWeight:"300", letterSpacing:"0.015cm"}}> 
                                        Projects
                                    </div>
                                    <div className="linebgproject" >
                                        
                                    </div>
                                </div>
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

            <div className="container " >
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

                <div className="row" style={{paddingTop:"80px"}}>
                    <div className="col-md-9 image imagehover">
                        <div style={{overflow:"hidden"}}>
                            <a href="/projectdetail"> <img src={project9} alt="logo"  style={{height:"360px", width:"100%"}} /> </a>
                        </div>
                        <div style={{marginTop:"40px"}}>
                            <div className="fontcategory" style={{lineHeight:"130.5%", letterSpacing:"0.06rem"}}>
                               Interior
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.02rem"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-md-8" style={{marginTop:"12px", position:"relative", right:"15px", fontSize:"16px", fontWeight:"300", }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt.
                                Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div className="imagehover " style={{overflow:"hidden"}} >
                            <img src={project2} alt=""  style={{height:"360px", width:"100%"}} />
                        </div>
                        <div style={{marginTop:"40px"}}>
                            <div style={{fontSize:"10px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
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
                    <div className="col-3 " style={{marginTop:"80px"}}>
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
                    <div className="col-6 " style={{marginTop:"80px"}}>
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
                    <div className="col-3 " style={{marginTop:"80px"}}>
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
                    <div className="col-6 " style={{marginTop:"80px"}}>
                        <div className="imagehover" style={{overflow:"hidden"}} >
                            <img src={project6} alt=""  style={{height:"360px", width:"100%"}} />
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
                    <div className="col-3 " style={{marginTop:"80px"}}>
                        <div className="imagehover" style={{overflow:"hidden"}} >
                            <img src={project7} alt=""  style={{height:"360px", width:"100%"}} />
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
                    <div className="col-3 " style={{marginTop:"80px"}}>
                        <div className="imagehover" style={{overflow:"hidden"}} >
                            <img src={project8} alt=""  style={{height:"360px", width:"100%"}} />
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

            {/*  */}

            <div className=" d-flex justify-content-center " style={{marginTop: "127px"}}>
                <button className="fontlato btn-1" style={{width:"143px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", border:"1px solid black" }}>
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
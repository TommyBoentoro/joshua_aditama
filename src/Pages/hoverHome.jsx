import React from "react"
import jumbotron from './../Assets/jumbotron.JPG'
import test1 from "./../Assets/project/test1.png"


import "./../Supports/backgroundHover.css"

import hoverFunction from "../helpers/hoverbackground"

class Testdua extends React.Component{

    componentDidMount(){
        hoverFunction()
    }
    render(){
        return(
            <>
            {/* <div className="d-flex" style={{marginTop:"200px", width:"100%", height:"700px", backgroundColor:"salmon"}}>
                <div className="border col container d-flex justify-content-center">
                    <div className="col-3 border ">
                        Test
                    </div>
                </div>
                <div className="border col" style={{padding:"0", margin:"0", backgroundImage:`url(${gambarHome1})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center"}}>
                </div>
            </div> */}

             <div className="container" style={{marginTop:"193px"}}>
                <div className="d-flex justify-content-center" style={{fontSize:"46px", fontWeight:"400"}}>
                    Projects
                </div>
            </div>

            <div className="backgroundhover" style={{marginTop:"200px", height:"700px"}}>
                <div className="hoverimage" style={{padding:"0", margin:"0"}}>
                    <ul className="border" style={{height:"700px", padding:"0", margin:"0"}}>
                        <li className="col border d-flex align-items-end" style={{height:"700px", padding:"0", margin:"0"}} data-bg={jumbotron}>
                           <div className="hoversaya d-flex justify-content-center align-items-center thiswhite" style={{height:"200px", width:"100%"}}>
                                <a  href="">
                                    <div style={{fontSize:"16px", fontWeight:'700'}}>
                                        Furniture
                                    </div>
                                    
                                    <div style={{fontSize:'28px', fontWeight:300, marginTop:"10px"}}>
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        <li className="col border d-flex align-items-end justify-content-center" style={{height:"700px", padding:"0", margin:"0"}} data-bg={test1}>
                           <div className="hoversaya d-flex justify-content-center align-items-center" style={{height:"200px", width:"100%"}}>
                                <a  href="">
                                    <div style={{fontSize:"16px", fontWeight:'700'}}>
                                        Furniture
                                    </div>
                                    <div style={{fontSize:'28px', fontWeight:300, marginTop:"10px"}}>
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        <li className="col border d-flex align-items-end justify-content-center" style={{height:"700px", padding:"0", margin:"0"}} data-bg={jumbotron}>
                           <div className="hoversaya d-flex justify-content-center align-items-center" style={{height:"200px", width:"100%"}}>
                                <a  href="">
                                    <div style={{fontSize:"16px", fontWeight:'700'}}>
                                        Furniture
                                    </div>
                                    <div style={{fontSize:'28px', fontWeight:300, marginTop:"10px"}}>
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        
                    </ul>
                </div>
            </div>

            {/* <div className="border backgroundhover fontlato" style={{marginTop:"200px", height:"500px"}}>
                <div className="row" style={{margin:'0', padding:'0', height:"500px"}}> 
                   <ul className="d-flex" style={{width:"100%"}}>
                       <li data-bg={gambarHome1}>
                            <div className="col border d-flex align-items-end" style={{padding:"0"}}>
                                <div  className="rectanglehover" style={{ width:"100%", height:"200px"}}>
                                        <div className="col-6 offset-2" style={{height:"100%"}}>
                                            <p className="text-1">
                                                Furniture
                                            </p>
                                            <p className="text-2">
                                                Tentrem Hotel, Semarang
                                            </p>
                                        </div>
                                </div>
                            </div>
                       </li>
                       <li data-bg={gambarHome1}>
                            <div className="col border d-flex align-items-end" style={{padding:"0"}}>
                                <div  className="rectanglehover" style={{ width:"100%", height:"200px"}}>
                                        <div className="col-6 offset-2" style={{height:"100%"}}>
                                            <p className="text-1">
                                                Furniture
                                            </p>
                                            <p className="text-2">
                                                Tentrem Hotel, Semarang
                                            </p>
                                        </div>
                                </div>
                            </div>
                       </li>
                       <li data-bg={gambarHome1}>
                            <div className="col border d-flex align-items-end" style={{padding:"0"}}>
                                <div  className="rectanglehover" style={{ width:"100%", height:"200px"}}>
                                        <div className="col-6 offset-2" style={{height:"100%"}}>
                                            <p className="text-1">
                                                Furniture
                                            </p>
                                            <p className="text-2">
                                                Tentrem Hotel, Semarang
                                            </p>
                                        </div>
                                </div>
                            </div>
                       </li>
                   </ul>
                </div>
            </div> */}
        </>   
        )   
    }
}

export default Testdua
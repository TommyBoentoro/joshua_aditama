import React from "react"
import {Link} from "react-router-dom"
import logo from "./../Assets/logo-2.png"
import scrollFunction from "../helpers/navbarScroll"

class Navbar extends React.Component{

    componentDidMount(){
        window.onscroll = function() {scrollFunction()}
    }

    render(){
        
        return(
            // <div>
            //      <nav  className = "navbar fixed-top d-flex flex-row justify-content-between container" style={{ height:"134px"}}>
            //          <div>
            //             <a href="/"> <img src={logo} alt="logo" /> </a>
            //         </div>

            //         <div className = "d-flex flex-row">
            //             <div>
            //                 <Link to="/project" className="fontlato" style={{color: "black"}}>PROJECT</Link>
            //             </div>
            //             <div className="fontlato" style = {{marginRight: "45px", marginLeft: "45px"}}>
            //                 <Link to="/studio"  className="fontlato" style={{color: "black"}} >STUDIO</Link>
            //             </div>
            //             <div className= "fontlato">
            //                 <Link to="/contactus"  className="fontlato" style={{color: "black"}} >CONTACT US</Link>
            //             </div>
            //         </div> 
            //     </nav>     
            // </div>

            <div id="navbar" className=" w-100 position-fixed py-5 d-flex" style={{transition:"0.3s", zIndex:1}}>
               <div className="container d-flex justify-content-between">
                    <div >
                        <a href="/"> <img src={logo} alt="logo" /> </a>
                    </div>
                    <div className = "d-flex flex-row">
                        <div>
                            <a href="/project" className="fontlato" style={{color: "black", fontWeight:"700"}}> PROJECT </a>
                        </div>
                        <div className="fontlato" style = {{marginRight: "45px", marginLeft: "45px"}}>
                            <a href="/studio" className="fontlato" style={{color: "black", fontWeight:"700"}}> STUDIO </a>
                        </div>
                        <div className= "fontlato">
                            <a href="/contactus" className="fontlato" style={{color: "black", fontWeight:"700"}}> CONTACT</a>
                        </div>
                    </div> 
               </div>
            </div>
        )
    }
}

export default Navbar
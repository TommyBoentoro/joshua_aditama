import React from "react"
import {Link} from "react-router-dom"
import logo from "./../Assets/logo-2.png"

import SvgLike from "../Pages/Logo"

// JS
import navbarToggle from "../helpers/navbarresponsive"
import scrollFunction from "../helpers/navbarScroll"

import "./../Supports/navbar.css"

class Navbar extends React.Component{

    

    componentDidMount(){
        navbarToggle()
        // window.onscroll = function() {scrollFunction()}
    }

    render(){
        
        return(
         
            <>
                {/* <SvgLike/> */}
                {/* <div id="navbar" className=" w-100 position-fixed py-5 d-flex " style={{transition:"0.3s", zIndex:1}}>
                    <div className="container d-flex justify-content-between">
                            <div >
                                <a href="/"> <img src={logo} alt="logo"  /> </a>
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
                </div> */}
                

                {/* Navbar UNPAS */}
               <div className="containerluar">
                    <nav className="container">
                        <div className="logo">
                            <h3>Test</h3>
                        </div>

                        <ul>
                            <li><a href="">PROJECT</a></li>
                            <li><a href="">STUDIO</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>

                        <div className="menu-toggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
               </div>

            </>
            
        )
    }
}

export default Navbar
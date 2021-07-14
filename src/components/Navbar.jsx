import React from "react"
import {Link} from "react-router-dom"
import logo from "./../Assets/logo-2.png"

import SvgLike from "../Pages/Logo"

// JS
import navbarToggle from "../helpers/navbarresponsive"
import scrollFunction from "../helpers/navbarScroll"
import myFunction from"./../helpers/navbarW3.js"

import "./../Supports/navbar.css"
import "./../Supports/navbarW3.css"

class Navbar extends React.Component{


    // onClickIcon = ( ) => {
    //     myFunction()
    //     console.log(`Masuk`)
    // }
    

    // myFunction()
    // navbarToggle()

    state = {
        clicked : false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    componentDidMount(){
        
        window.onscroll = function() {scrollFunction()}
       
    }

    render(){
        
        return(
         
            <>
                {/* <SvgLike/> */}
                <div id="navbar" className=" w-100 position-fixed py-5 d-flex " style={{transition:"0.3s", zIndex:1}}>
                    <div className="container d-flex justify-content-between px-md-3 px-sm-0 px-3">
                            <div>
                                <a  href="/"> <img src={logo} alt="logo" className="logowidthnavbar" /> </a>
                            </div>
                            <div className = {this.state.clicked ? `navbarbody active` : `navbarbody`}>
                                <div>
                                    <a href="/" className="fontlato fontnavbar displayhomenavbar" style={{color:"black"}}> Home</a>
                                </div>
                                <div>
                                    <a href="/project" className="fontlato fontnavbar " style={{color:"black"}}> Project </a>
                                </div>
                                <div className="marginnavbarmiddle">
                                    <a href="/studio" className="fontlato fontnavbar" style={{color:"black"}} > Studio </a>
                                
                                </div>
                                <div >
                                    <a href="/contactus" className="fontlato fontnavbar" style={{color:"black"}} > Contact</a>
                                </div>
                            </div> 
                            <div className="menu-toggle" onClick={this.handleClick}>
                                <input type="checkbox"/>
                                <span></span>
                                <span style={{width:"20px", marginLeft:"12px"}}></span>
                                <span></span>
                            </div>


                    </div>
                </div>
                

                {/* Navbar UNPAS */}
               {/* <div className="containerluar" style={{paddingTop:"2000px"}}>
                    <nav className="container">
                        <div className="logo">
                            <h3>Test</h3>
                        </div>

                        <ul className={this.state.clicked? `nav ul slide` : `nav ul`}>
                            <li><a href="">PROJECT</a></li>
                            <li><a href="">STUDIO</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>

                        <div className="menu-toggle" onClick={this.handleClick}>
                            <input type="checkbox"/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
               </div> */}

               {/* Navbar W3 */}
               {/* <div className="topnav" id="myTopnav">
                    <a href="#home" className="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <a href="javascript:void(0);" className="icon">
                        <i class="fa fa-bars"  onclick={() => this. onClickIcon()}></i>
                        <button onClick={()=> this.onClickIcon()} >Test</button>
                    </a>
                </div> */}

                
            </>
            
        )
    }
}

export default Navbar
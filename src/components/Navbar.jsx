import React from "react"
import {Link} from "react-router-dom"
import logo from "./../Assets/logo-2.png"

class Navbar extends React.Component{
    render(){
        return(
            <div>
                 <nav className = "navbar fixed-top d-flex flex-row justify-content-between container" style={{ height:"134px"}}>
                     <div>
                        <a href="/"> <img src={logo} alt="logo" /> </a>
                    </div>

                    <div className = "d-flex flex-row">
                        <div>
                            <Link to="/project" className="fontlato" style={{color: "black"}}>PROJECT</Link>
                        </div>
                        <div className="fontlato" style = {{marginRight: "45px", marginLeft: "45px"}}>
                            <Link to="/studio"  className="fontlato" style={{color: "black"}} >STUDIO</Link>
                        </div>
                        <div className= "fontlato">
                            <Link to="/contactus"  className="fontlato" style={{color: "black"}} >CONTACT US</Link>
                        </div>
                    </div> 
                </nav>     
            </div>
        )
    }
}

export default Navbar
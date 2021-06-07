import React from "react"
import {Link} from "react-router-dom"


// import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.png"
import ourService1 from "./../Assets/ourService1.png"
import ourService2 from "./../Assets/ourService2.png"
import ourService3 from "./../Assets/ourService3.png"
import gambarHome2 from "./../Assets/fotoHome-2.png"



// Import css
import "./../Supports/home.css"

class Test extends React.Component{
    render(){
        return(
            <>
                <div className="border bgimg" style={{width: "100%", height: "900px"}}>
                    <nav className = "navbar navbar-light d-flex flex-row justify-content-between container1" style={{marginTop:"55px"}}>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>

                        <div className = "d-flex flex-row">
                            <div>
                                <Link to="/project" className="fontlato" style={{color: "black"}}>Project</Link>
                            </div>
                            <div className="fontlato" style = {{marginRight: "20px", marginLeft: "20px"}}>
                                Studio
                            </div>
                            <div className= "fontlato">
                                Contact us
                            </div>
                        </div> 
                    </nav>
                </div>
            </>
        )
    }
}

export default Test
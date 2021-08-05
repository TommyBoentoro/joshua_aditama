import React from "react"
import "./../Supports/navbarDev.css"



class NavbarDev extends React.Component{

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <>
            {/* Navbar Dev Ed */}
                <div style={{width:"100%"}}>
                    <nav > {/* Class container */}
                        <div className="logo">
                            <h4>The Nav</h4>
                        </div>
                        <ul className={this.state.clicked? `nav-links nav-active`: `nav-links`}>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Work</a>
                            </li>
                        </ul>
                        <div className="burger">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <div onClick={this.handleClick}>
                            <div className={this.state.clicked ? `testburger` : `testsilang`}> </div>
                        </div>


                    </nav>

                   
                </div>
            </>

            
        )
    }
}

export default NavbarDev
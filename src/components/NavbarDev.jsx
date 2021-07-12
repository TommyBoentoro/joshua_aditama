import React from "react"
import navSlide from "../helpers/navbarDev"
import "./../Supports/navbarDev.css"


class NavbarDev extends React.Component{

    onClickBurger = () => {
        const burger = document.querySelector(`.burger`)
        const nav = document.querySelector(`.nav-links`)
        console.log(`Masuk`)

        burger.addEventListener(`click`, () => {
            nav.classList.toggle(`nav-active`)
        })
    }

    onTest = () => {
        console.log(`Masuk`)
    }

    onClickIcon = () => {
        navSlide()
        console.log(`Masuk`)
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
                        <ul className="nav-links">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Work</a>
                            </li>
                        </ul>
                        <div className="burger" onclick={() => this. onClickBurger()}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <button onClick={()=> this.onClickIcon()} >Test</button>
                    </nav>

                   
                </div>
            </>

            
        )
    }
}

export default NavbarDev
import React from "react"
import {Link} from "react-router-dom"

class Home extends React.Component{
    render(){
        return(
            <div className = "container">
                <nav class="navbar navbar-light bg-light">
                    <div>
                        <a class="navbar-brand" href="#">Joshua Aditama</a>
                    </div>
                    <div>
                        <Link to="/project" style={{color: "#39986E"}}>Project</Link>
                        <a class="navbar-brand" href="http://localhost:3000/project">Project</a>
                        <a class="navbar-brand" href="http://localhost:3000/studio">Studio</a>
                        <a class="navbar-brand" href="http://localhost:3000/contactus">Contact Us</a>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Home
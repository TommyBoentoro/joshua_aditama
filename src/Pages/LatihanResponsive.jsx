import React from "react"

import "./../Supports/LatihanResponsive.css"

class LatihanResponsive extends React.Component{
    render(){
        return(
            <div className="border" style={{marginTop:"200px", marginLeft:"200px"}}>
                <ul className="ularrow">
                    <li className="arrowPrev"><span></span></li>
                    <li className="arrowNext"><span></span></li>
                </ul>
            </div>
        )
    }
}

export default LatihanResponsive
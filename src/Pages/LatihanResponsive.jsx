import React from "react"

import "./../Supports/LatihanResponsive.css"

class LatihanResponsive extends React.Component{
    render(){
        return(
            <div className="container border" style={{marginTop:"200px", height:"200px"}}>
                <div className="row"> 
                    <div className="col-sm-6 col-12 border">
                        <div className="fontLatihan">
                            Contact Us
                        </div>
                        <div>
                            628172398129
                        </div>
                    </div>
                    <div className="col-sm-6 col-12 border">
                        <div className="fontLatihan">
                            Test Latihan
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LatihanResponsive
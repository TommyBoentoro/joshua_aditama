import React from "react"
import { Link } from "react-router-dom"

// Import Redux
import { connect } from "react-redux"
import { onGetData } from "../Redux/Actions/projectaction"

// Import css
import "./../Supports/home.css"
import "./../Supports/projectResponsive.css"

// Import Footer
import Footbar from "../components/Footer"

// Import IMAGES
import openaire from "./../Assets/project/OPENAIRE/baru/openaire-1.jpg"
import houseE from "./../Assets/project/HOUSE E/COVER.JPG"
import houseKM from "./../Assets/project/HOUSE KM/COVER.jpeg"
import linds from "./../Assets/project/LINDS/COVER.jpg"
import omnia from "./../Assets/project/OMNIA/COVER.jpg"
import senayanCafe from "./../Assets/project/SENAYAN CAFE/COVER.jpg"
import stradaCoffee from "./../Assets/project/STRADA COFFEE/COVER.jpg"
import zamia from "./../Assets/project/ZAMIA/COVER.jpg"
import wongart from "./../Assets/project/WONG_ART/thumbnail.jpg"
import lindspapandayan from "./../Assets/project/LINDS_PAPANDAYAN/thumbnail.jpg"
import tabebuya from "./../Assets/project/TABEBUYA/thumbnail.JPG"
import surfing from "./../Assets/project/SURFING_RESORT/thumbnail.jpg"
import birdnest from "./../Assets/project/BIRDNEST/1.jpg"


class Project extends React.Component {

    componentDidMount() {
        this.onGet()
    }

    onGet = () => {
        this.props.onGetData()
    }


    render() {
        return (
            <>
                <div className="bgproject bgimageresponsive">
                    <div className="overlay">
                        <div className="container px-md-3 px-sm-0 px-4 fontlato" style={{ height: "100%", color: "white" }}>
                            <div className="d-flex flex-column justify-content-end px-md-0 px-sm-3 px-2" style={{ height: "100%" }}>
                                <div className="fontbgproject " style={{ fontWeight: "300", letterSpacing: "0.015cm" }}>
                                    Projects
                                </div>
                                <div className="linebgproject" >

                                </div>
                            </div>
                        </div>.
                    </div>
                </div>

                {/*  */}
                {/* <div className="d-flex flex-row justify-content-between" style={{width:"100%", marginTop:"74px"}}>
                    <div className="border fontlato" style={{width:"1050px", height:"557px", marginLeft:"130px"}}>
                       <div className="border" style={{height:"360px"}}>
                           <img src={project1} alt="" style={{height:"100%", width:"100%"}}/>
                       </div>
                       <div className="d-flex flex-column" style={{marginTop:"40px"}}>
                           <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                               Interior
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem", color:"black"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-7" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt. Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                       </div>
                    </div>
                    <div className="border" style={{width:"550px", height:"557px", marginRight:"130px"}}>
                        <div className="border" style={{height:"360px"}}>
                            <img src={project2} alt="" style={{height:"100%", width:"100%"}} />
                        </div>
                        <div className="d-flex flex-column" style={{marginTop:"40px"}}>
                           <div style={{fontSize:"14px", fontWeight:"400",  lineHeight:"130.5%", letterSpacing:"0.06rem", color:"black"}}>
                               Architect
                           </div >
                           <div style={{marginTop:"15px", fontSize:"24px", fontWeight:"300",  lineHeight:"130.5%", letterSpacing:"0.02rem", color:"black"}}>
                                Openaire Semarang
                           </div>
                           <div className="col-10" style={{marginTop:"15px", position:"relative", right:"15px", fontSize:"15px", fontWeight:"400", color:"#C4C4C4"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet nibh a neque dignissim, a ullamcorper ligula tincidunt. Praesent ac sapien mollis, tristique lacus non, aliquet nisi.
                           </div>
                       </div>
                    </div>
                    <div>
                        test
                    </div>
                </div> */}

                {/*  */}

                {/* Content */}

                <div className="container px-md-3 px-sm-4 px-5" >
                    <div className="row">
                        {
                            this.props.project.data ?
                                this.props.project.data.map((value, index) => {
                                    if (index + 1 === 1 || index + 1 === 9 || index + 1 === 17) {
                                        return (
                                            <>
                                                <div key={index} className="col-sm-9 px-md-3 px-sm-1 px-0 image imagehover paddingbody image imagehover">
                                                    <div>
                                                        {
                                                            value.image.map((val, idx) => {
                                                                if (idx === 0) {
                                                                    return (
                                                                        <>
                                                                            <div key={idx} className="image">
                                                                                <div className="imagehover" style={{ overflow: "hidden", width: "100%" }}>
                                                                                    <Link to={`/projectdetail/${value.id}`}>
                                                                                        <img src={val.image} alt="logo" className="imagecol-9" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                } else {
                                                                    return null
                                                                }

                                                            })
                                                        }
                                                    </div>
                                                    <div className="margincardbody">
                                                        <div className="fontcategory">
                                                            {value.category}
                                                        </div >
                                                        <div className="fontcategory">
                                                        </div>
                                                        <div className="fonttitle">
                                                            {value.title}
                                                        </div>
                                                        <div className="col-md-8 col-12 px-0  fontbodyproject">
                                                            {value.head_description}
                                                        </div>
                                                    </div>
                                                </div>


                                            </>
                                        )
                                    } else if (index + 1 === 2 || index + 1 === 3 || index + 1 === 5 || index + 1 === 7 || index + 1 === 8 || index + 1 === 10
                                        || index + 1 === 11 || index + 1 === 13 || index + 1 === 15 || index + 1 === 16 || index + 1 === 18 || index + 1 === 19
                                        || index + 1 === 21 || index + 1 === 23 || index + 1 === 24) {
                                        return (
                                            <>
                                                <div className="col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                                                    <div key={index}>
                                                        {
                                                            value.image.map((val, idx) => {
                                                                if (idx === 0) {
                                                                    return (
                                                                        <>
                                                                            <div key={idx} className="image">
                                                                                <div className="imagehover" style={{ overflow: "hidden", width: "100%" }}>
                                                                                    <Link to={`/projectdetail/${value.id}`}>
                                                                                        <img src={val.image} alt="logo" className="imagecol-3" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                } else {
                                                                    return null
                                                                }

                                                            })
                                                        }
                                                    </div>
                                                    <div className="margincardbody">
                                                        <div className="fontcategory">
                                                            {value.category}
                                                        </div >
                                                        <div className="fonttitle">
                                                            {value.title}
                                                        </div>
                                                        <div className="fontbodyproject">
                                                            {value.head_description}
                                                        </div>
                                                    </div>
                                                </div>


                                            </>
                                        )
                                    } else if (index + 1 === 4 || index + 1 === 6 || index + 1 === 12 || index + 1 === 14 || index + 1 === 20 || index + 1 === 22) {
                                        return (
                                            <>
                                                <div key={index} className="col-sm-6 px-md-3 px-sm-1 px-0  image imagehover paddingbody">
                                                    <div>
                                                        {
                                                            value.image.map((val, idx) => {
                                                                if (idx === 0) {
                                                                    return (
                                                                        <>
                                                                            <div key={idx} className="image">
                                                                                <div className="imagehover" style={{ overflow: "hidden", width: "100%" }}>
                                                                                    <Link to={`/projectdetail/${value.id}`}>
                                                                                        <img src={val.image} alt="logo" className="imagecol-6" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                } else {
                                                                    return null
                                                                }

                                                            })
                                                        }
                                                    </div>
                                                    <div className="margincardbody">
                                                        <div className="fontcategory">
                                                            {value.category}
                                                        </div >
                                                        <div className="fontcategory">
                                                            {value.title}
                                                        </div>
                                                        <div className="col-12 px-0 fontbodyproject">
                                                            {value.head_description}
                                                        </div>
                                                    </div>
                                                </div>


                                            </>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                                :
                                null
                        }
                    </div>

                    <div className="row">
                        <div className="col-sm-9 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }}>
                                <a href="/openaire"> <img src={openaire} alt="logo" className="imagecol-9" /> </a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory">
                                    Architecture, Interior, Landscape
                                </div >
                                <div className="fonttitle">
                                    OPENAIRE
                                </div>
                                <div className="col-md-8 col-12 px-0  fontbodyproject">
                                    A 7000 square meters consists of a restaurant, a concept store, bars, and outdoor attractions, incorporating man-made nature into its structure.
                                    Tons of planted real trees and plants give an experience of open air architecture.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/housee"><img src={houseE} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Interior Design
                                </div >
                                <div className="fonttitle " >
                                    HOUSE E
                                </div>
                                <div className="fontbodyproject">
                                    A renovation of an old house, with minor changing in
                                    architectural elements to go with modern luxury living
                                    concept.
                                </div>
                            </div>
                        </div>

                        {/* New */}
                        <div className="col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/wongart"><img src={wongart} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Interior
                                </div >
                                <div className="fonttitle">
                                    WONG ART
                                </div>
                                <div className=" fontbodyproject">
                                    The new location for Wong Art where home baked pastries and foods are served like home.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 px-md-3 px-sm-1 px-0  image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/lindspapandayan"><img src={lindspapandayan} alt="" className="imagecol-6" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory">
                                    Interior
                                </div >
                                <div className="fonttitle">
                                    LIND'S ICE CREAM PAPANDAYAN
                                </div>
                                <div className="col-12 px-0 fontbodyproject">
                                    An Art-Deco interior style is being used as a renovation concept for Lind’s Ice Cream Restaurant.
                                </div>
                            </div>
                        </div>

                        <div className=" col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/tabebuya"><img src={tabebuya} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Architecture
                                </div >
                                <div className="fonttitle">
                                    TABEBUYA RESORT
                                </div>
                                <div className="fontbodyproject">
                                    A modern luxury resort located in a seaside bay,provides Restaurant, Bars, and Private Suite Villas.
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className="col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/housekm"><img src={houseKM} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Architecture
                                </div >
                                <div className="fonttitle">
                                    HOUSE KM
                                </div>
                                <div className=" fontbodyproject">
                                    A formal play of two-storey private villa in one monolithic roof shape.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 px-md-3 px-sm-1 px-0  image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/linds"><img src={linds} alt="" className="imagecol-6" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory">
                                    Architecture, Interior
                                </div >
                                <div className="fonttitle">
                                    LIND'S ICE CREAM
                                </div>
                                <div className="col-12 px-0 fontbodyproject">
                                    Lind’s Ice Cream is having a new look for its first ice
                                    cream shop, preserving the identity of vintage local
                                    artisan ice cream shop. The old building is where Lind’s
                                    opened its first shop.
                                </div>
                            </div>
                        </div>

                        <div className=" col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/omnia"><img src={omnia} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Architecture
                                </div >
                                <div className="fonttitle">
                                    OMNIA
                                </div>
                                <div className="fontbodyproject">
                                    Representing teamwork and togetherness in its
                                    architectural shape and form, combines with
                                    vernacular elements.
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-6 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/senayancafe"><img src={senayanCafe} alt="" className="imagecol-6" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory">
                                    Architecture
                                </div >
                                <div className="fonttitle">
                                    SENAYAN CAFE
                                </div>
                                <div className="col-12 px-0   fontbodyproject">
                                    Located in Gelora Bung Karno, Senayan Cafe targeted a

                                    luxury cafe and bar. The site area is a private man-
                                    made grass fields with ponds which give a big

                                    advantage for the architecture.
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/stradacoffee"><img src={stradaCoffee} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Architecture, Interior
                                </div >
                                <div className="fonttitle">
                                    STRADA COFFEE
                                </div>
                                <div className=" fontbodyproject">
                                    Bringing a new modern coffee culture into its coffee
                                    shop, Strada Coffee redesigns its space to be more
                                    spacious and modern.
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/zamia"><img src={zamia} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Architecture
                                </div >
                                <div className="fonttitle">
                                    ZAMIA
                                </div>
                                <div className=" fontbodyproject">
                                    A small flower and pottery shop that elevate its original
                                    workshop to be an artisanal shop for local consumers.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }}>
                                <a href="/surfing_resort"> <img src={surfing} alt="logo" className="imagecol-9" /> </a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory">
                                    Architecture
                                </div >
                                <div className="fonttitle">
                                    R's SURFING RESORT
                                </div>
                                <div className="col-md-8 col-12 px-0  fontbodyproject">
                                    Interpreting ocean waves as an architecture.
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-3 px-md-3 px-sm-1 px-0 image imagehover paddingbody">
                            <div style={{ overflow: "hidden" }} >
                                <a href="/birdnest"><img src={birdnest} alt="" className="imagecol-3" /></a>
                            </div>
                            <div className="margincardbody">
                                <div className="fontcategory" >
                                    Architecture, Interior
                                </div >
                                <div className="fonttitle">
                                    BIRDNEST
                                </div>
                                <div className=" fontbodyproject">
                                    An architecture where it corresponds the existing site
                                    and nature.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footbar />

                {/*  */}

                {/* <div className=" d-flex justify-content-center marginbutton" >
                <button className="fontlato btn-11 buttonview">
                    View more
                </button>
            </div> */}
            </>
        )
    }
}

const mapDispatchToProps = {
    onGetData
}

const mapStateToProps = (state) => {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
import React from "react"
import {connect} from "react-redux"

// Action
import {onAddData} from "../Redux/Actions/projectaction" 
import {onGetData} from "../Redux/Actions/projectaction"

class AdminPage extends React.Component{

    componentDidMount () {
        this.onGet()
    }

    onSubmit = () => {
        let token = localStorage.getItem("my-tkn")

        let addData = {
            title : this.title.value,
            description : this.description.value,
            token
        }

        this.props.onAddData(addData)
        window.location = "/adminpage"

    }

    onGet = () => {
        let token = localStorage.getItem("my-tkn")

        let data = {
            token : token
        }
        
        this.props.onGetData(data)

        
    }


    render(){
        // if(this.props.project.data === null){
        //     return(
        //         <div>
        //             Loading
        //         </div>
        //     )
        // }
        return(
            <div className ="container my-5">
                <h2>
                    Add Data
                </h2>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" ref={(e)=> this.title=e} className="form-control" placeholder= "Input Title"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" ref={(e)=> this.description=e} className="form-control" placeholder= "Input Description"/>
                </div>
                <button type="submit" onClick={() => this. onSubmit()} class="btn btn-primary">Submit</button>

                    <h6 className="mt-1 text-danger">
                        {
                            this.props.project.message
                        }
                    </h6>
                <hr />
                <br />
                {/* Test Maping */}
                {/* <div>
                    {
                        this.props.project.data.map((value,index) => {
                            return(
                                <>
                                    <p>
                                        {value.title}
                                    </p>
                                </>
                            )
                        })
                    }
                </div> */}

                <br />

                <div>
                    {
                        this.props.project.data?
                        this.props.project.data.map((value,index) => {
                            return(
                                <>
                                    <h4>
                                        {value.title}
                                    </h4>
                                    <p>
                                        {value.description}
                                    </p>
                                </>
                            )
                        })
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onAddData, onGetData
}

const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (AdminPage)
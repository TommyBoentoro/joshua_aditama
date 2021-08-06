import React from "react"
import {connect} from "react-redux"

// Action
import {onAddData} from "../Redux/Actions/projectaction" 
import {onGetData} from "../Redux/Actions/projectaction"
import {onDelete} from "../Redux/Actions/projectaction"
import {onUserLogout} from "../Redux/Actions/useraction"

// Import Modal
import CreateModal from "./../components/Modal"

class AdminPage extends React.Component{

    state = {
        imageErrorMessage: "",
        images: null,
        is_login: false,
        modal_open: false
    }

    componentDidMount () {
        this.onGet()
        this.login()
    }

    onDeleteData = (idToDel) => {
        let id = idToDel
        let confirm = window.confirm(`Are you sure want to delete?`)

        if(confirm === true){
            this.props.onDelete(id)
            window.location="/adminpage"
        }
       
    }

    onSubmit = () => {
        // let token = localStorage.getItem("my-tkn")
        try {
            let title = this.title.value
            let status = this.status.value
            let location = this.location.value
            let category = this.category.value
            let year = this.year.value
            let headDescritpion = this.headDescription.value
            let description = this.description.value
            let descriptionDua = this.descriptionDua.value
            let user_id = 1

            if(!title || !description || !user_id || !status || !location || !category || !year || !headDescritpion || !descriptionDua) throw new Error (`All data must be filled`)
            if(!this.state.images) throw new Error ("Select image")
            let addData = {
                title : this.title.value,
                status : this.status.value,
                location : this.location.value,
                category : this.category.value,
                year : this.year.value,
                head_description : this.headDescription.value,
                description : this.description.value,
                descriptionDua : this.descriptionDua.value,
                user_id

            }

            let dataToSend = JSON.stringify(addData)

            let fd = new FormData()
            fd.append(`data`, dataToSend)
            for(let i = 0; i< this.state.images.length; i++){
                fd.append(`images`, this.state.images[i])
            }
            console.log([...fd])
            this.props.onAddData(fd)
            window.location = "/adminpage"
        } catch (error) {
            this.setState({imageErrorMessage: error.message})
        }
        

    }

    login = () => {
        let tokenLogin = localStorage.getItem("my-tkn")
        console.log(tokenLogin)

        if(tokenLogin){
            this.setState({is_login:true})
        }else{
            this.setState({is_login:false})
        }
    }
    
    onGet = () => {
        this.props.onGetData()
    }

    onImageValidation = (e) =>{
        const files = e.target.files

        try {
            if(files.length > 10) throw new Error (`Max select 10 images`)

            for (let i = 0; i<files.length; i++){
                if(files[i].size > 10000000 ) throw new Error (`${files[i].name} more than 10Mb`)
            }

            this.setState({images: files})
        } catch (error) {
            this.setState({imageErrorMessage: error.message})
        }
    }

    onLogOut = () => {
        let data = {
            token : localStorage.getItem("my-tkn")
        }
        let confirm = window.confirm(`Are you sure want to Log out?`)

        if(confirm === true){
            this.props.onUserLogout(data)
        }
       
    }


    render(){
        if(this.props.project.data === null){
            return(
                <div>
                    Loading
                </div>
            )
        }
        return(
            <>
            <div className ="container" style={{paddingTop:"200px"}}>
                <div className="d-flex justify-content-between">
                    <h2>
                        Add Data
                    </h2>
                    {
                        this.state.is_login?
                        null
                        :
                        <h4 className="text-danger">
                            You must login first
                        </h4>
                    }
                    <CreateModal/>
                    <input type="button" value="LogOut" disabled={this.state.is_login?false:true} onClick={() => this. onLogOut()} className="btn btn-danger" />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" ref={(e)=> this.title=e} className="form-control" placeholder= "Input Title"/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input type="text" ref={(e)=> this.status=e} className="form-control" placeholder= "Input Status"/>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" ref={(e)=> this.location=e} className="form-control" placeholder= "Input Location"/>
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" ref={(e)=> this.category=e} className="form-control" placeholder= "Input Category"/>
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="text" ref={(e)=> this.year=e} className="form-control" placeholder= "Input Year"/>
                </div>
                <div className="form-group">
                    <label>Head Description</label>
                    <input type="text" ref={(e)=> this.headDescription=e} className="form-control" placeholder= "Input Head Description"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" ref={(e)=> this.description=e} className="form-control" placeholder= "Input Description"/>
                </div>
                <div className="form-group">
                    <label>Description dua</label>
                    <input type="text" ref={(e)=> this.descriptionDua=e} className="form-control" placeholder= "Input Description dua"/>
                </div>
                <div>
                    <input type="file" ref={(e) => this.files = e} onChange={this.onImageValidation} multiple style={{display: "none"}} />
                    <input type="button" value = "choose File" className="btn btn-success" onClick={() => this.files.click()} />
                </div>
                <br />
                <button type="submit" onClick={() =>this. onSubmit()} disabled={this.state.is_login?false:true} class="btn btn-primary">Submit</button> 
                    <h6 className="mt-1 text-danger">
                        {
                            this.props.project.message
                        }
                    </h6>
                    <div className="text-danger">
                        {
                            this.state.imageErrorMessage
                        }
                    </div>
                <hr />
                <br />
                <br />
            </div>
            <div className="container-fluid" >
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                                <th scope="col">Location</th>
                                <th scope="col">Category</th>
                                <th scope="col">Year</th>
                                <th scope="col">Head Description</th>
                                <th scope="col">Description</th>
                                <th scope="col">Description Dua</th>
                                <th scope="col">Images</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.is_login?
                                    this.props.project.data?
                                    this.props.project.data.map((value,index) => {
                                        return(
                                            <tr key={index}>
                                                <th>{index+1}</th>
                                                <td>{value.title}</td>
                                                <td>{value.status}</td>
                                                <td>{value.location}</td>
                                                <td>{value.category}</td>
                                                <td>{value.year}</td>
                                                <td>{value.head_description}</td>
                                                <td>{value.description}</td>
                                                <td>{value.descriptionDua}</td>
                                                <td className="row">
                                                    {
                                                        value.image.map((val,idx)=>{
                                                            return(
                                                                <div key={idx}>
                                                                    <img src={val.image} alt="" style={{width:"100px", height:"100px"}} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    <input type="button" value="Delete" className="btn btn-primary" onClick={()=> this.onDeleteData(value.id)} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    null
                                :
                                null
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    onAddData, onGetData, onDelete, onUserLogout
}

const mapStateToProps = (state) => {
    return{
        project: state.project,
        user: state.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (AdminPage)
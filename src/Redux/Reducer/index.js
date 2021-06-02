import {combineReducers} from "redux"
import projectReducer from "./projectreducer"
import userReducer from "./userreducer"

const allReducer = combineReducers({
    user: userReducer,
    project : projectReducer
})

export default allReducer
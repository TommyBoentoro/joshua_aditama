import React from "react"

import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Pages
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import Project from "./Pages/Project"
import Studio from "./Pages/Studio"
import adminPage from "./Pages/AdminPage"
import loginPage from "./Pages/LoginPage"
import Test from "./Pages/Test"

// Redux
import {applyMiddleware, createStore} from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import allReducer from "./Redux/Reducer/index"


const store = createStore(allReducer,applyMiddleware(thunk))

function App (){
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route path = "/project" component = {Project}/>
          <Route path = "/studio" component = {Studio}/>
          <Route path = "/contactus" component = {ContactUs} />
          <Route path = "/adminpage" component = {adminPage} />
          <Route path = "/loginpage" component = {loginPage} />
          <Route path = "/test" component = {Test} />
        </Switch>
      </BrowserRouter>
    </Provider>
    
  )
}



export default App;

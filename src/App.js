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
import Navbar from "./components/Navbar"
import Footbar from "./components/Footer"
import ProjectDetail from "./Pages/projectDetail"
import Responsive from "./Pages/Responsive"
import Tiga from "./Pages/tiga"
import Testdua from "./Pages/hoverHome"
import LatihanResponsive from "./Pages/LatihanResponsive"
import NavbarDev from "./components/NavbarDev"


// Redux
import {applyMiddleware, createStore} from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import allReducer from "./Redux/Reducer/index"


const store = createStore(allReducer,applyMiddleware(thunk))

function App (){
  document.title="Joshua Aditama"
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route path = "/project" component = {Project}/>
          <Route path = "/studio" component = {Studio}/>
          <Route path = "/contactus" component = {ContactUs} />
          <Route path = "/adminpage" component = {adminPage} />
          <Route path = "/loginpage" component = {loginPage} />
          <Route path = "/test" component = {Test} />
          <Route path = "/projectdetail" component = {ProjectDetail}/>
          <Route path = "/responsive" component = {Responsive}/>
          <Route path = "/tiga" component = {Tiga}/>
          <Route path = "/testdua" component = {Testdua}/>
          <Route path = "/navbar" component = {Navbar}/>
          <Route path = "/latihan" component = {LatihanResponsive}/>
        </Switch>
        <Footbar/>
      </BrowserRouter>
    </Provider>

      
    
  )
}



export default App;

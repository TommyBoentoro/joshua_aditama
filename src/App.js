import React from "react"
import { Provider } from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Pages
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import Project from "./Pages/Project"
import Studio from "./Pages/Studio"

function App (){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = "/project" component = {Project}/>
        <Route path = "/studio" component = {Studio}/>
        <Route path = "/contactus" component = {ContactUs} />
      </Switch>
    </BrowserRouter>
  )
}



export default App;

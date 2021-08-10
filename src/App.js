import React from "react"

import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Pages
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import Project from "./Pages/Project"
import Studio from "./Pages/Studio"
import Navbar from "./components/Navbar"
import Footbar from "./components/Footer"

// ProjectDetail
import Openaire from "./Pages/projectdetail/openaire"
import HouseE from "./Pages/projectdetail/houseE"
import HouseKM from "./Pages/projectdetail/houseKM "
import Linds from "./Pages/projectdetail/linds"
import Omnia from "./Pages/projectdetail/omnia"
import SenayanCafe from "./Pages/projectdetail/senayanCafe"
import StradaCoffee from "./Pages/projectdetail/stradaCoffee"
import Zamia from "./Pages/projectdetail/zamia"

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
          {/* <Route path = "/adminpage" component = {adminPage} />
          <Route path = "/loginpage" component = {loginPage} />
          <Route path = "/projectdetail/:idProduct" component = {ProjectDetail}/> */}

          {/* Project Detail */}
          <Route path = "/openaire" component = {Openaire} />
          <Route path = "/housee" component = {HouseE} />
          <Route path = "/housekm" component = {HouseKM} />
          <Route path = "/linds" component = {Linds} />
          <Route path = "/omnia" component = {Omnia} />
          <Route path = "/senayancafe" component = {SenayanCafe} />
          <Route path = "/stradacoffee" component = {StradaCoffee}/>
          <Route path = "/zamia" component = {Zamia}/>

        </Switch>
        <Footbar/>
      </BrowserRouter>
    </Provider>

      
    
  )
}



export default App;

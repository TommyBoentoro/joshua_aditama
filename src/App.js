import React from "react"

import {BrowserRouter, Switch, Route} from "react-router-dom"

// Import Pages
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import Project from "./Pages/Project"
import Studio from "./Pages/Studio"
import Navbar from "./components/Navbar"

// ProjectDetail
import Openaire from "./Pages/projectdetail/openaire"
import HouseE from "./Pages/projectdetail/houseE"
import HouseKM from "./Pages/projectdetail/houseKM "
import Linds from "./Pages/projectdetail/linds"
import Omnia from "./Pages/projectdetail/omnia"
import SenayanCafe from "./Pages/projectdetail/senayanCafe"
import StradaCoffee from "./Pages/projectdetail/stradaCoffee"
import Zamia from "./Pages/projectdetail/zamia"
import wongart from "./Pages/projectdetail/wong_art"
import lindsPapandayan from "./Pages/projectdetail/linds_papandayan"
import tabebuya from "./Pages/projectdetail/tabebuya"
import surfingResort from "./Pages/projectdetail/surfing_resort"
import Birdnest from "./Pages/projectdetail/birdnest"
import cutoclock from "./Pages/projectdetail/cutoclock"
import Amaya from "./Pages/projectdetail/houseamaya"
import GrahaPadma from "./Pages/projectdetail/housegrahapadma"
import HilagoBali from "./Pages/projectdetail/househilagobali"
import HilagoIndustrial from "./Pages/projectdetail/househilagoindustrial"
import HouseMb from "./Pages/projectdetail/housemb"

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
          <Route path = "/wongart" component = {wongart}/>
          <Route path = "/lindspapandayan" component = {lindsPapandayan}/>
          <Route path = "/tabebuya" component = {tabebuya}/>
          <Route path = "/surfing_resort" component = {surfingResort}/>
          <Route path = "/birdnest" component = {Birdnest}/>
          <Route path = "/cutoclock" component = {cutoclock}/>
          <Route path = "/houseamaya" component = {Amaya}/>
          <Route path = "/housegrahapadma" component = {GrahaPadma}/>
          <Route path = "/hilagobali" component = {HilagoBali}/>
          <Route path = "/hilagoindustrial" component = {HilagoIndustrial}/>
          <Route path = "/housemb" component = {HouseMb}/>
        </Switch>
        {/* <Footbar/> */}
      </BrowserRouter>
    </Provider>

      
    
  )
}



export default App;

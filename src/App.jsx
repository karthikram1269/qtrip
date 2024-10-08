import React, { Component } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Bengaluru from "./pages/Bengaluru/Bengaluru.jsx";
import Goa from "./pages/Goa/Goa.jsx";
import BengSub from "./pages/Bengaluru/BengSub.jsx";
import Perthby from "./pages/Goa/Perthby.jsx";
import Kolkata from "./pages/Kolkata/Kolkata.jsx";
import Niaboytown from "./pages/Bengaluru/Niaboytown.jsx";
import MApp from "./MApp.jsx";
import Thton from "./pages/Kolkata/Thton.jsx";
import Singapore from "./pages/Singapore/Singapore.jsx";
import Vangreatshot from "./pages/Singapore/Vangreatshot.jsx";
import Paris from "./pages/Paris/Paris.jsx";
import Lowtra from "./pages/Paris/Lowtra.jsx";
import NewYork from "./pages/New York/NewYork.jsx";
import Calnyonnenfield from "./pages/New York/Calnyonnenfield.jsx";
import Malaysia from "./pages/Malaysia/Malaysia.jsx";
import Bangkok from "./pages/Bangkok/Bangkok.jsx";
import StGosmydro from "./pages/Malaysia/St Gosmydro.jsx";
import Nishgam from "./pages/Bangkok/Nishgam.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export default class App extends Component{
  render(){
    return(
  <>
   <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<MApp/>} />
         <Route exact path="/login" element={<Login/>} />
         <Route exact path="/rgstr" element={<Register/>} />
         <Route exact path="*" element={<ErrorPage/>} />
         <Route exact path="/bengaluru" element={<Bengaluru/>}/>
         <Route exact path="/2447910730" element={<BengSub/>}/>
         <Route exact path="/bengaluru/2447910730" element = {<Niaboytown/>}/>
         <Route exact path="/goa" element={<Goa/>}/>
         <Route exact path="/goa/8549673097" element={<Perthby/>}/>
         <Route exact path="/kolkata" element={<Kolkata/>}/>
         <Route exact path="/kolkata/8318638903" element={<Thton/>}/>
         <Route exact path="/singapore" element={<Singapore />}/>
         <Route exact path="/singapore/0301948003" element={<Vangreatshot />}/>
         <Route exact path="/paris" element={<Paris />}/>
         <Route exact path="/paris/9536498117" element={<Lowtra />}/>
         <Route exact path="/new-york" element={<NewYork />}/>
         <Route exact path="/new-york/6302945339" element={<Calnyonnenfield />}/>
         <Route exact path="/malaysia" element={<Malaysia />}/>
         <Route exact path="/malaysia/0306928663" element={<StGosmydro />}/>
         <Route exact path="/bangkok" element={<Bangkok />}/>
         <Route exact path="bangkok/8304353098" element={<Nishgam />}/>
      </Routes>
   </BrowserRouter>
  </>
  )
  }
}

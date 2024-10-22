import React, { Component } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MApp from "./MApp.jsx";
import Login from "./pages1/Login.jsx";
import Register from "./pages1/Register.jsx";
import ErrorPage from "./pages1/ErrorPage.jsx";
import Cities from "./pages1/Cities.jsx";
import Locations from "./pages1/Locations.jsx";

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
         <Route exact path="/cities/:id" element= {<Cities/>}/>
         <Route path="/:idCl/:id" element={<Locations />} />
      </Routes>
   </BrowserRouter>   
  </>
  )
  }
}


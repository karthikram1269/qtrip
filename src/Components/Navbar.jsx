import React, { Component } from 'react'
import "../styles/qtrip.css"
import {Link} from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
            <div className="logo">
                <h1>QTrip</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Reservations</a></li>
                <Link to="/login"><li><a href="#" className="login">Login Here</a></li></Link>
                <Link to="/rgstr"><li><a style={{padding:"10px 15px"}} href="#" className="register-btn">Register</a></li></Link>
            </ul>
        </nav>
      </>
    )
  }
}

export default Navbar


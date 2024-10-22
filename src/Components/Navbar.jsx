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
                <li><a href="/">Home</a></li>
                <li><a href="/">Reservations</a></li>
                <li><Link to="/login" className="login">Login Here</Link></li>
                <li><Link to="/rgstr" className="register-btn" style={{padding:"10px 15px"}}>Register</Link></li>
            </ul>
        </nav>
      </>
    )
  }
}

export default Navbar


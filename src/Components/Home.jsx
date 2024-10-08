import React, { Component } from 'react'
import "../styles/qtrip.css"
class Home extends Component {
  constructor() {
    super();
    };
 
  render() {
    
    return (
      <>
       <div id='home'>
            <div id='img-content'>
                <h1 >Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
            </div>
       </div>
      </>
    )
  }
}
export default Home;
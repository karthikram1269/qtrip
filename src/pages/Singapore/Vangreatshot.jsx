import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../styles/bangaluru/subcards.css"
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default class Vangreatshot extends Component {
  constructor(){
    super();
    this.state = {
      name :"",
      subtitle: "",
      images : [],
      content : ""
    }
  }

  componentDidMount() {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0301948003")
    .then(res => res.json())
    .then(response =>{
      // console.log(response);
      
      this.setState({name:response.name});
      this.setState({subtitle:response.subtitle});
      this.setState({images:response.images});
      this.setState({content:response.content});
      
    })
    .catch(e => {
      console.error('Error fetching data : ',e);
    })
  }
  render() {
    return (
      <>
      <Navbar/>
        <div id="carousel" style={{height:"992px"}}>
            <h1>{this.state.name}</h1>
            <p>{this.state.subtitle}</p>
            <div id='car1' style={{overflow:"hidden",height:"500px",width:"98%" }}>
            <Carousel>
                 
                  <img src={this.state.images[0]} alt=""/>
                  <img src={this.state.images[1]} alt=""/>
                  <img src={this.state.images[2]} alt=""/>

                
            </Carousel>
            </div>
            <hr style={{marginBottom:"10px"}}/>
            <h2>About the Experience</h2>
            <div style={{ height:"392px"}}>{this.state.content}</div>
        </div>
        <Footer />
      </>
    );
  }
}



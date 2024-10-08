import React, { Component } from 'react';
import "./styles/qtrip.css"
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Cards from './Components/Cards.jsx';
import Footer from './Components/Footer.jsx';

export default class MApp extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }
  componentDidMount() {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
    .then(res => res.json())
      .then(response => {
        this.setState({ cities: response });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
   
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Cards />
        <Footer />
      </>
    );
  }
}

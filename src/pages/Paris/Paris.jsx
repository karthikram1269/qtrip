import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import BHead from '../Bengaluru/BHead';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import ParisCards from './ParisCards';

class Paris extends Component {
  constructor(){
    super();
    this.state = {
      places : []
    }
  }
  componentDidMount() {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=paris")
    .then(res => res.json())
    .then(response =>{
      this.setState({places: response});
      // console.log(response);
      
    })
    .catch(e => {
      console.error('Error fetching data : ',e);
    })
  }
  render() {
    return (
      <>
        <Navbar />
        <BHead />
        {
            <div id="cmd" style={{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",marginLeft:"70px"}}>
            {
                   this.state.places.map(x=>{
                    return(
                     <Link to={x.id}  key={x.id}> <ParisCards image = {x.image}  category={x.category} name={x.name} costPerHead={`₹${x.costPerHead}`} duration={`${x.duration} hours`}/></Link>
                    )
                })
            }
        </div>
           }
        <Footer />
      </>
    );
  }
}

export default Paris;

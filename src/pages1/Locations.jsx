import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate,useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Locations = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let idC = location.state;
    
    let [state,setState] = useState({});

    useEffect(() => {
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=${idC}`)
        .then(res=>res.json())
        .then(res=>{
            setState(res);
        }).catch(err => console.error(err));
    },[])
    
    if (!state || !state.images) {
        return <div>Loading...</div>; 
    }
  return (
    <>
      <Navbar />
      <div id="carousel" style={{height:"992px"}}>
        <h1>{state.name}</h1>
        <p>{state.subtitle}</p>
        <div id='car1' style={{overflow:"hidden",height:"500px",width:"98%" }}>
        <Carousel>
        {
            state.images && state.images.length > 0 ? (
                state.images.map((x, index) => (
                    <img key={index} src={x} alt={`image-${index}`} />
                ))
            ) : (
                <p>No images available</p>
            )
        }
        </Carousel>
        </div>
            <hr style={{marginBottom:"10px"}}/>
            <h2>About the Experience</h2>
            <div style={{ height:"392px"}}>{state.content}</div>
        </div>
      <Footer />

    </>
  )
}

export default Locations

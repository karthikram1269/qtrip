import React, { Component } from 'react';
import SubCards from './SubCards';
import Navbar from '../../Components/Navbar';
import BHead from './BHead';
import Footer from "../../Components/Footer"
import {Link} from "react-router-dom"

class Bengaluru extends Component {
  constructor(){
    super();
    this.state = {
      places : []
    }
  }

  componentDidMount() {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bengaluru")
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
                         <Link  key={x.id} to={x.id}> <SubCards  image = {x.image} alt =  {x.id} category={x.category} name={x.name} costPerHead={`₹${x.costPerHead}`} duration={`${x.duration} hours`}/></Link>
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
export default Bengaluru;

// class Bengaluru extends Component {
//   render() {
//     return (
//         <> 
//            <Navbar />
//            <BHead />  
//            {
//             <div id="cmd" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between", padding:"100px 100px"}}>
//             {
//                     BData.map(x=>{
//                         return(
//                          <Link to={x.link}> <SubCards img = {x.img}  p={x.p1} tname={x.tname} p2={x.p2} hrs={x.hrs} p3={x.p3}/></Link>
//                         )
//                     })
//                 }
//             </div>
//            }
//            <Footer />
               
//         </>

//     );
//   }
// }
// export default Bengaluru;

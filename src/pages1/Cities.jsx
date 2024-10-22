import {useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import CitiesHead from './CitiesHead';
import Footer from '../Components/Footer';
import "../styles/qtrip.css"

const Cities = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let idCl = location.state.id;
    // console.log(idCl);
    
    let [state,setState] = useState([]);
    useEffect(()=>{
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=${idCl}`)
        .then(res=>res.json())
        .then(res=>{
            setState(res);
        }).catch(err => console.error(err));
    },[])

  return (
    <>
        <Navbar />
        <CitiesHead />
        {
            <div id="cmd" style={{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",marginLeft:"70px"}}>
            {
                    state.map(x=>{
                        return(
                            <div key={x.id} id="bcd" style={{border:"1px solid gray", marginRight:"20px"}}>
                            <img onClick={() => navigate(`/${idCl}/${x.id}`,{state:x.id})}  id = {x.id} src={x.image}  alt={x.alt}></img> 
                            <p id="bp1">{x.category}</p>
                            <div id='dt1'>
                              <h5 >{x.name}</h5>
                              <span>{`₹${x.costPerHead}`}</span>
                            </div>
                            <div id='dt2'>
                              <h5>{"Duration"}</h5>
                              <span >{`${x.duration} Hours`}</span>
                            </div>
                        </div>
                        )
                    })
            }
            </div>
           }
           <Footer />
    </>
  )
}

export default Cities;

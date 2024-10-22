
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Cards(){
    const [state,setState] = useState([]);
    const [search,setSearch] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
        .then(res=>res.json())
        .then(res=>{
            setState(res);
        }).catch(err => console.error(err));
    },[])
    
    const filteredData = state.filter((item) => {
        return item.city.toLowerCase().includes(search.toLowerCase());
    });
    return(
        <>
            <div className='search-bar'>
                <input 
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search cities"
                />
            </div>
            <div id="main">
                {filteredData.map(item=>{
                    return(
                        <div key={item.id} className="card">
                            <div className="image-container">
                            <img onClick={() => navigate(`/cities/${item.id}`, {state:item})} src={item.image} alt={item.city} />
                                <div className="content">
                                    <h2>{item.city}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Cards;


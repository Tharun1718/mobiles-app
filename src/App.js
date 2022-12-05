import './App.css';
import { useState, useEffect } from "react";

const API ="https://tharun-mobiles.onrender.com";

function App() {
  const [mobiles, setMobiles] = useState([])  

  // fetch the data from the api 
  useEffect(()=>{
     fetch(`${API}/mobiles`)
     .then((data)=>data.json())
     .then((res)=>setMobiles(res))
  },[])

  return (
    <div className="App">
      <div className=".phone-list-container" >
        {mobiles.map((mobile,index)=>(
          <Phone key={index} mobile={mobile} />
        ))}
      </div>
    </div>
  );
}

function Phone({mobile}){
  return(
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className="phone-picture"/>
      <h3 className="phone-name">{mobile.model}</h3>
      <p className="phone-company">{mobile.company}</p>
    </div>
  )
}

export default App;

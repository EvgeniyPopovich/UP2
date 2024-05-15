import React, {useState, useEffect} from 'react';
import './IpCalc.css';
import Calc from '../components/Calc.js'

function IpCalc() {
  const[calcs, setCalcs] = useState([])
  useEffect(() => {

    const api = 'http://localhost:9001/calcs'
        
    fetch(api)
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      setCalcs(result.data)
    })
  
  }, [])
    
  return (
    <div className="IpCalc">
      <h1>Калькуляторы</h1>
      { calcs.map((item) => <Calc key={item._id} id={item._id} header={item.header} rate={item.rate}/>) }
    </div>
  );
}

export default IpCalc;
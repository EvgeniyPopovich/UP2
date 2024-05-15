import React, {useState} from 'react';
import './CalcDel.css';

function CalcDel({header, id}) {
  
  function Del(){
    const api = 'http://localhost:9001/del'
    const del = {
      header: header
    }
    fetch(api,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(del)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
    })
    alert('Калькулятор удалён!')
    window.location.reload()
  }

  return (
    <div className="CalcDel">
     
      <h1>{header}</h1>
      <button onClick={Del} >Удалить</button>
    </div>
  );
}

export default CalcDel;
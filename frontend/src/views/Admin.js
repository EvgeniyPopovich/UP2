import React, {useState, useEffect} from 'react';
import './Admin.css';
import CalcDel from '../components/CalcDel.js'


function Admin() {
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
  function Auth(){
    const token = localStorage.getItem("token")
    if (token == null){
      console.log(1)
      alert('Вы не выполнили вход! Страница будет доступна после авторизации!')
      window.location.href = "http://localhost:3000/"
    }
  }
  function Add(){
    const header = document.getElementById('header').value
    const rate = document.getElementById('rate').value
    const dataCalc = {
        header: header,
        rate: rate
    }
    console.log(dataCalc)

    const api = 'http://localhost:9001/addcalc'
    
    fetch(api,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataCalc)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
    })
    alert('Калькулятор добавлен!')
    window.location.reload()
}    
  return (
    <div className="Admin"> 
      {Auth()}
      <h1>Администратор</h1>
      <h2>Добавить Калькулятор</h2>
      <input id='header' type='text' placeholder='Название' />
        <input id='rate' type='text' placeholder='Ставка' />
        <button onClick={Add} >Добавить</button>  
        { calcs.map((item) => <CalcDel key={item._id} header={item.header}/>) } 

    </div>
    
  );
}

export default Admin;
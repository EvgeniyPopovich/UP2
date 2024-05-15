import React, {useState} from 'react';
import './Calc.css';

function Calc({header,rate,id}) {
    const MonthRate = rate / 12 / 100;
    let [MainRate,setMainRate] = useState(0)
    let [MonthPay,setMonthPay] = useState(0)
    
  function Calculate(){
    let Summ = document.getElementById('Summ').value
    let Time = document.getElementById('Time').value
    console.log(Time)
    MainRate = (1 + MonthRate) ** Time
    MonthPay = Summ*MonthRate*MainRate/(MainRate-1)
    setMainRate(MainRate)
    setMonthPay(MonthPay)
    console.log(MonthRate)
    console.log(MainRate)
    console.log(MonthPay)
  }

  return (
    <div className="Calc">
     
      <h1>{header}</h1>
      <p>{ `Ставка ${rate} `} </p>
      <p>{ `Ежемесечная ставка ${MonthRate} `} </p>
      <p>{ `Общая ставка ${MainRate} `} </p>
      <p>{ `Ежемесечный платеж ${MonthPay} `} </p>
      <input id='Summ' type='text' placeholder='Сумма ипатеки/кредита' />
      <input id='Time' type='text' placeholder='Срок ипотеки в месяцах' />
      <button onClick={Calculate} >Посчитать</button>
    </div>
  );
}

export default Calc;
import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
       <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('IpCalc')}>Калькуляторы</li>
        <li onClick={() => setPage('Admin')}>Администратор</li>
      </ul>
      <UserBox setModalBox={setModalBox} setPage={ setPage }/>
    </div>
  );
}

export default Header;
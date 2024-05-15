import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import IpCalc from './views/IpCalc';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Admin from './views/Admin';

function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const pages = {
    Main: <Main />,
    IpCalc: <IpCalc />,
    Admin: <Admin />
  }
  const modalBoxes ={
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login setPage={ setPage }/></ModalBox>
  }

  return (
    <div className="App">
        <Header setPage={ setPage } setModalBox={ setModalBox }/>
        { pages[page] } 
        { modalBoxes[modalBox]}
        <Footer /> 
    </div>
  );
}

export default App;

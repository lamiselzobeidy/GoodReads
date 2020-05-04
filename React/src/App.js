import 'bootstrap/dist/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavBar from './components/MainNavBar/mainNavBar'
import HotBooks from './components/HotBooks/HotBooks'

function App() {
  return (
    <div className="App">
        <MainNavBar></MainNavBar>
        <HotBooks></HotBooks>
    </div>
  );
}

export default App;

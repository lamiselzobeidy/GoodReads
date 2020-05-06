import 'bootstrap/dist/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavBar from './components/MainNavBar/mainNavBar'
import HotBooks from './components/HotBooks/HotBooks'
import ListingCatogries from "./components/ListingCatogries/ListingCatogries"
import Author from './components/Author/Author'
import {Navbar,Button , Nav , Form,FormControl} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <MainNavBar></MainNavBar>
        {/* <Button variant="light" className="btn">Popular books</Button> 
        <HotBooks></HotBooks>
        <ListingCatogries></ListingCatogries> */}

        <Author></Author>
    </div>
  );
}

export default App;

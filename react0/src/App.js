import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';

import { NavLink, Link, Route, BrowserRouter as Router ,Switch} from 'react-router-dom';

import AdminPanel from './components/AdminPanel/AdminPanel'
import MainNavBar from './components/MainNavBar/mainNavBar'
import HotBooks from './components/HotBooks/HotBooks'
import ListingCatogries from "./components/ListingCatogries/ListingCatogries"
import Author from './components/Author/Author'
import ListingAuthors from './components/ListingAuthors/ListingAuthors';
import PaginationCompo from './components/Pagentaion/Pagentaion'
import ListingBooks from './components/ListingBooks/ListingBooks'
import HomePage from './components/HomePage/HomePage'
import WelcomePage from './components/welcomePage/welcomePage';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories'
import BookProfile from './components/bookProfile/bookProfile';
import CategoryProfile from './components/categoryProfile/categoryProfile';
import UserProfilePage from './components/UserProfilePage/UserProfilePage'

function App() {
  return (
    <Router>
      <div className="App">
        <MainNavBar></MainNavBar>
        <Switch>
          <Route path="/HomePage" component={HomePage} />
          <Route path="/ListingAuthors" component={ListingAuthors} />
          {/* <Route path="/" exact component={WelcomePage} /> */}
          <Route path="/categories" component={Categories} />
          <Route path="/bookprofile" component={BookProfile} />
          <Route path="/categorypage" component={CategoryProfile} />
        </Switch>

        <AdminPanel></AdminPanel>
        {/* <UserProfilePage></UserProfilePage> */}
        {/* <ListingBooks></ListingBooks> */}
        {/* <Button variant="light" className="btn">Popular books</Button> 
        <HotBooks></HotBooks>
        <ListingCatogries></ListingCatogries> */}
        {/* <ListingAuthors></ListingAuthors>  */}
        {/* <Author></Author> */}
        {/* <PaginationCompo></PaginationCompo> */}

        <Footer></Footer>
      </div>
    </Router>
  )
}



export default App;

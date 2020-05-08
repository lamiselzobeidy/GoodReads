import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import WelcomePage from './components/welcomePage/welcomePage';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories'
import BookProfile from './components/bookProfile/bookProfile';
import CategoryProfile from './components/categoryProfile/categoryProfile';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/categories" component={Categories} />
        <Route path="/bookprofile" component={BookProfile} />
        <Route path="/categorypage" component={CategoryProfile} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;

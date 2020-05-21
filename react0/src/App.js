import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink, Link, Route, BrowserRouter as Router ,Switch} from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage/registrationPage';
import ListingCategories from "./components/ListingCategories/ListingCategories"
import AdminPanel from './components/AdminPanel/AdminPanel';
import MainNavBar from './components/MainNavBar/mainNavBar';
import HotBooks from './components/HotBooks/HotBooks';
import ListingCatogries from "./components/ListingCatogries/ListingCatogries";
import Author from './components/Author/Author';
import ListingAuthors from './components/ListingAuthors/ListingAuthors';
import PaginationCompo from './components/Pagentaion/Pagentaion';
import ListingBooks from './components/ListingBooks/ListingBooks';
import HomePage from './components/HomePage/HomePage';
import WelcomePage from './components/welcomePage/welcomePage';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories';
import BookProfile from './components/bookProfile/bookProfile';
import CategoryProfile from './components/categoryProfile/categoryProfile';
import UserProfilePage from './components/UserProfilePage/UserProfilePage'
import NewNavBar from './components/NewNavBar/NewNavBar'
import NewCategories from './components/NewCategories/NewCategories'
import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchPage from "./components/SearchPage/SearchPage";

  function App() {
  return (

    <Router>
      <div className="App">
        <SearchPage/>
        {/* <MainNavBar></MainNavBar> */}
        {/*<NewNavBar></NewNavBar>*/}
        {/*<Switch>*/}
        {/*  /!* <Route path="/" exact component={HomePage} /> *!/*/}
        {/*  <Route path="/HomePage" component={HomePage} />*/}

        {/*  <Route path="/ListingAuthors" component={ListingAuthors} />*/}
        {/*  <Route path="/ListingBooks" component={ListingBooks} />*/}
        {/*  <Route path="/ListingCategories" component={ListingCategories} />*/}

        {/*  /!* <Route path="/" exact component={WelcomePage} /> *!/*/}
        {/*  */}
        {/*  <Route path="/bookprofile" component={BookProfile} />*/}
        {/*  <Route path="/author" component={Author} />*/}
        {/*  <Route path="/categorypage" component={CategoryProfile} />*/}
        {/*  */}
        {/*  /!* <Route path="/" exact component={WelcomePage} /> *!/*/}
        {/*  <Route path="/Registration" exact component={RegistrationPage} />*/}
        {/*  <Route path="/categories" component={Categories} />*/}
        {/*  <Route path="/bookprofile" component={BookProfile} />*/}
        {/*  /!* <Route path="/bookprofile/:bookId" component={BookProfile} /> *!/*/}
        {/*  <Route path="/categorypage/:categoryId" component={CategoryProfile} />*/}
        {/*  <Route path="/userprofile" component={UserProfilePage} />*/}
        {/*</Switch>*/}
        {/* <RegistrationPage/> */}
        {/* <ListingCategories></ListingCategories> */}
        {/* <ListingBooks></ListingBooks> */}
        {/* <Categories></Categories> */}
        {/* <LoadingPage></LoadingPage> */}
        {/* <AdminPanel></AdminPanel> */}
        {/*<UserProfilePage></UserProfilePage>*/}
        {/* <ListingBooks></ListingBooks> */}
        {/* <NewCategories></NewCategories> */}
        {/* <HomePage></HomePage> */}
        {/* <ListingAuthors></ListingAuthors>  */}
        {/* <Author></Author> */}
        {/* <PaginationCompo></PaginationCompo> */}

        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;

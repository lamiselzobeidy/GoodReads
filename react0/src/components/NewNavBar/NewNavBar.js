import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import './NewNavBar.css'
import {
    Link,
    NavLink
  } from 'react-router-dom';


const NewNavBar = () => {

    return (
        <div className="httml">
            <div class="menu-toggle" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <div class="overlay"></div>
            {/* <div class="container"> */}
                <nav>
                    <h1 class="brand"><Link to="/HomePage"><span>g</span>ood<span>r</span>eads</Link></h1>
                    <ul>
                        <li><NavLink className="aa" to="/HomePage">Home</NavLink></li>
                        <li><NavLink className="aa" to="/ListingAuthors">Authors</NavLink></li>
                        <li><NavLink className="aa" to="/ListingCategories">Categories</NavLink></li>
                        <li><NavLink className="aa" to="/ListingBooks">Books</NavLink></li>
                        <li><NavLink className="aa" to="/search">Search</NavLink></li>
                        <li className="aa">
                            <NavDropdown title="Profile" id="nav-dropdown" class="dropD">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        // </div>



    );
}


export default NewNavBar

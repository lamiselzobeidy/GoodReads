import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import './NewNavBar.css'
import {
    Link,
  } from 'react-router-dom';


const NewNavBar = () => {

    return (
        <div className="httml">
            <div class="menu-toggle" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <div class="overlay"></div>
            <div class="container">
                <nav>
                    <h1 class="brand"><Link to="/HomePage">go<span>od</span>reads</Link></h1>
                    <ul>
                        <li><Link className="aa" to="/HomePage">Home</Link></li>
                        <li><Link className="aa" to="/ListingAuthors">Authors</Link></li>
                        <li><Link className="aa" to="/ListingCategories">Categories</Link></li>
                        <li><Link className="aa" to="/ListingBooks">Books</Link></li>
                        <li><Link className="aa" to="/search">Search</Link></li>
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
        </div>



    );
}


export default NewNavBar

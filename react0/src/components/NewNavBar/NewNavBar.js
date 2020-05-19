import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import './NewNavBar.css'


const NewNavBar = () => {

    return (
        <div>
            <div class="menu-toggle" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <div class="overlay"></div>
            <div class="container">
                <nav>
                    <h1 class="brand"><a href="index.html">B<span>oo</span>k</a></h1>
                    <ul>
                        <li><a href="/HomePage">Home</a></li>
                        <li><a href="/ListingAuthors">Authors</a></li>
                        <li><a href="/ListingCategories">Categories</a></li>
                        <li><a href="/ListingBooks">Books</a></li>
                        <li>
                            <NavDropdown title="Profile" id="nav-dropdown" class="DropD">
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
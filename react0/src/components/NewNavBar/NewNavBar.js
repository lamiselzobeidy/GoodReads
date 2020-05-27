import React from 'react'
import {Nav, NavDropdown} from 'react-bootstrap'
import './NewNavBar.css'
import {
    Link,
    NavLink
} from 'react-router-dom';
import axios from "axios";
import {MDBBtn} from "mdbreact";

const NewNavBar = () => {

    return (
        <div className="httml">
            <div class="menu-toggle" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <div class="overlay"></div>
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
                            <NavDropdown.Item href="/userprofile">User Profile</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onSelect={() => {
                                axios({
                                    method: 'post',
                                    url: 'http://34.107.102.252:3000/logout',
                                    headers: {'JWT': JSON.parse(sessionStorage.getItem("user")).token}
                                }).then(result => {
                                    sessionStorage.removeItem('user');
                                    window.location = '/'
                                });
                            }}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>
            </nav>
        </div>
        // </div>


    );
}


export default NewNavBar

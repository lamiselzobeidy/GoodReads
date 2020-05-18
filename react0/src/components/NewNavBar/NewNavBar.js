import React from 'react'
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
                    <h1 class="brand"><a href="index.html">Br<span>a</span>nd</a></h1>
                    <ul>
                        <li><a href="/HomePage">Home</a></li>
                        <li><a href="/ListingAuthors">Authors</a></li>
                        <li><a href="/ListingCategories">Categories</a></li>
                        <li><a href="/ListingBooks">Books</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </nav>
            </div>
        </div>



    );
}


export default NewNavBar
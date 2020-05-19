import React, { useEffect, useState, } from 'react'
import './NewCategories.css'
import axios from 'axios'


const NewCategories = (props) => {
    
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log("cats page",props.HomePage);

        setCategories(props.HomePage)

    }, [])



    return ( 


        <div class="mainc">

        {
            categories.map(category=>(

                <a href="#">

                <div class="card">
                    <div class="card-image"></div>
                    <div class="card-text">
                        <span class="date">4 days ago</span>
                         <h2>{ category.categoryName  }</h2>
                            <p>{category.summary}</p>
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <div class="value">4<sup>m</sup></div>
                            <div class="type">read</div>
                        </div>
                        <div class="stat border">
                            <div class="value">5123</div>
                            <div class="type">views</div>
                        </div>
                        <div class="stat">
                            <div class="value">32</div>
                            <div class="type">comments</div>
                        </div>
                    </div>
                </div>
            </a>

            ))
        }
          

            <a>
                <div class="card">
                    <div class="card-image card2"></div>
                    <div class="card-text card2">
                        <span class="date">1 week ago</span>
                        <h2>Post Two</h2>
                        <p>Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
                    </div>
                    <div class="card-stats card2">
                        <div class="stat">
                            <div class="value">7<sup>m</sup></div>
                            <div class="type">read</div>
                        </div>
                        <div class="stat border">
                            <div class="value">7152</div>
                            <div class="type">views</div>
                        </div>
                        <div class="stat">
                            <div class="value">21</div>
                            <div class="type">comments</div>
                        </div>
                    </div>
                </div>
            </a>


            <a>
                <div class="card">
                    <div class="card-image card3"></div>
                    <div class="card-text card3">
                        <span class="date">3 week ago</span>
                        <h2>Post Three</h2>
                        <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
                    </div>
                    <div class="card-stats card3">
                        <div class="stat">
                            <div class="value">5<sup>m</sup></div>
                            <div class="type">read</div>
                        </div>
                        <div class="stat border">
                            <div class="value">3021</div>
                            <div class="type">views</div>
                        </div>
                        <div class="stat">
                            <div class="value">15</div>
                            <div class="type">comments</div>
                        </div>
                    </div>
                </div>
            </a>

            <a>

                <div class="card">
                    <div class="card-image card4"></div>
                    <div class="card-text card4">
                        <span class="date">3 week ago</span>
                        <h2>Post Three</h2>
                        <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
                    </div>
                    <div class="card-stats card4">
                        <div class="stat">
                            <div class="value">5<sup>m</sup></div>
                            <div class="type">read</div>
                        </div>
                        <div class="stat border">
                            <div class="value">3021</div>
                            <div class="type">views</div>
                        </div>
                        <div class="stat">
                            <div class="value">15</div>
                            <div class="type">comments</div>
                        </div>
                    </div>
                </div>
            </a>

        </div>

    );

}

export default NewCategories
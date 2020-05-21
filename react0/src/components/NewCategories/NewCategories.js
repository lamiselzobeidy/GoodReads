import React, { useEffect, useState, } from 'react'
import './NewCategories.css'
import axios from 'axios'


const NewCategories = (props) => {
    
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log("cats page",props.HomePage);

        setCategories(props.HomePage)
        
        // if(props.cats.length >0)
        // {
        //     
        // }
        // axios.get("http://34.107.102.252:3000/category/")
        //     .then(res => {
                
        //         setCategories(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);

        //     })
    }, [])



    return ( 


        <div class="mainc">

        {
            categories.map(category=>(

                <a href="gg">

                <div class="cardd">
                    <div class="cardd-image"></div>
                    <div class="cardd-text">
                        <span class="date">4 days ago</span>
                         <h2>{ category.categoryName  }</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                    </div>
                    <div class="cardd-stats">
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
                <div class="cardd">
                    <div class="cardd-image cardd2"></div>
                    <div class="cardd-text cardd2">
                        <span class="date">1 week ago</span>
                        <h2>Post Two</h2>
                        <p>Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
                    </div>
                    <div class="cardd-stats cardd2">
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
                <div class="cardd">
                    <div class="cardd-image cardd3"></div>
                    <div class="cardd-text cardd3">
                        <span class="date">3 week ago</span>
                        <h2>Post Three</h2>
                        <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
                    </div>
                    <div class="cardd-stats cardd3">
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

                <div class="cardd">
                    <div class="cardd-image cardd4"></div>
                    <div class="cardd-text cardd4">
                        <span class="date">3 week ago</span>
                        <h2>Post Three</h2>
                        <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
                    </div>
                    <div class="cardd-stats cardd4">
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
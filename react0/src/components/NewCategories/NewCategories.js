import React, { useEffect, useState, } from 'react'
import './NewCategories.css'
import axios from 'axios'
import { Label } from 'semantic-ui-react'


const Newarray = (props) => {
    
    
    const [array, setArray] = useState([])
    const [type,setType] =useState ("cat")
    useEffect(() => {
        console.log("cats page",props.HomePage);

        setArray(props.HomePage)
        setType(props.type)
        
        // if(props.cats.length >0)
        // {
        //     
        // }
        // axios.get("http://34.107.102.252:3000/category/")
        //     .then(res => {
                
        //         setArray(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);

        //     })
    }, [])



    return ( 


        <div class="mainc">

        {
            array.map(item=>(

                <a href="gg">

                <div class="cardd">
                    <div class="cardd-image">
                        {
                            type==="cats"?"":
                            <img class="cardd-image w-100 h-100" src={`http://34.107.102.252:3000/${item.authorImage }`}>
                            </img>
                        }
                    </div>
                    <div class="cardd-text">
                        <span class="date">4 days ago</span>
                         <h3>{ type==="cats"? item.categoryName :item.fullName }</h3>
                        <p className="cardd-p">{ type==="cats"? item.summary :item.bio }</p>
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
          

            {/* <a>
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
            </a> */}

        </div>

    );

}

export default Newarray
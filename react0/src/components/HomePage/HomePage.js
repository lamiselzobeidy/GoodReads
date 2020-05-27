import React ,{useState,useEffect} from 'react'
import HotBooks from '../HotBooks/HotBooks'
import ListingCatogries from '../ListingCategories/ListingCategories'
import { Button} from 'react-bootstrap';
import NewCategories from '../NewCategories/NewCategories'
import axios from 'axios'
import LoadingPage from '../LoadingPage/LoadingPage'
import { Label } from 'semantic-ui-react';


const HomePage =()=>{
    console.log(sessionStorage.getItem('user'))

    const [HomePage,setHomePage] = useState([])
    const [dataLoad,setDataLoad] = useState(false)

    useEffect(() => {
        axios.get("http://34.107.102.252:3000/home")
            .then(res => {  
                console.log("this is home page",res.data);
                      
                setHomePage(res.data);
                setTimeout(()=>{
                    setDataLoad(true)
                } , 2000)
                
               
                
            })
            .catch(err => {
                console.log(err);

            })

    }, [])

    if(dataLoad === true)
    {
        return(

            <div  className="text-center">
                
            <Label variant="light"  style={{fontSize:30,"margin-bottom":"10px" }}>Popular books</Label> 
            <HotBooks books={HomePage.books} ></HotBooks>
            
            <div >
                <Label style={{fontSize:30 }}>Top Categories</Label>
            <NewCategories  HomePage={HomePage.cats} type="cats" ></NewCategories>

            </div>
            <div>
            <Label style={{fontSize:30 }}>Top Authors</Label>
            <NewCategories  HomePage={HomePage.authors} type="ath" ></NewCategories>
            </div>
            {/* <ListingCatogries></ListingCatogries> */}
            </div>
    
    
        );

    }
    else {
        return ( 
                <LoadingPage></LoadingPage>

        )
       
    }
   
}

export default HomePage
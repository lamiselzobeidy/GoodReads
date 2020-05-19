import React ,{useState,useEffect} from 'react'
import HotBooks from '../HotBooks/HotBooks'
import ListingCatogries from '../ListingCategories/ListingCategories'
import { Button} from 'react-bootstrap';
import NewCategories from '../NewCategories/NewCategories'
import axios from 'axios'
import LoadingPage from '../LoadingPage/LoadingPage'


const HomePage =()=>{

    const [HomePage,setHomePage] = useState([])
    const [dataLoad,setDataLoad] = useState(false)

    useEffect(() => {
        axios.get("http://34.107.102.252:3000/home")
            .then(res => {  
                console.log("this is home page",res.data.cats);
                      
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

            <div>
                
            <Button variant="light" className="btn" style={{fontSize:30 }}>Popular books</Button> 
            <HotBooks ></HotBooks>
            <NewCategories  HomePage={HomePage.cats} ></NewCategories>
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
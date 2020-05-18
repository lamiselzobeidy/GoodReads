import React from 'react'
import HotBooks from '../HotBooks/HotBooks'
import ListingCatogries from '../ListingCategories/ListingCategories'
import { Button} from 'react-bootstrap';
import NewCategories from '../NewCategories/NewCategories'


const HomePage =()=>{

    return(

        <div>
        <Button variant="light" className="btn" style={{fontSize:30}}>Popular books</Button> 
        <HotBooks></HotBooks>
        <NewCategories></NewCategories>
        {/* <ListingCatogries></ListingCatogries> */}
        </div>


    );
}

export default HomePage
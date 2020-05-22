import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import ListingAuthors from "../ListingAuthors/ListingAuthors";
import axios from 'axios'

const PaginationCompo = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([1, 2, 3, 4, 5]); // for the equation that calculates the number of pages

  useEffect(()=>{

    axios.get("http://34.107.102.252:3000/author")
    .then(res => {          
        let PN = parseInt(res.data.length /5)
        PN =( res.data.length % 5) !== 0 ? PN +1 : PN
        const ts =[]
        for (let index = 0; index < PN; index++) {
          
          ts.push(index+1)
        }
        console.log(ts);
        
        setItems(ts)
    })
    .catch(err => {
        console.log(err);

    })
    

  },[])

  return (
    <Pagination>
      <Pagination.First />

      {items.map((item) => (
        <Pagination.Item
          onClick={() => {
            setCurrentPage(item);
            props.koko(item)
          }}
        >
          {item}
       
        </Pagination.Item>
      ))}

      <Pagination.Last />
    </Pagination>
  );
};

export default PaginationCompo;

// import React , {useState,useEffect} from 'react'
// import axios from 'axios'

// const test = ()=>{
// const [posts,setPost] =useState([])
// const [loading,SetLoading] = useState(false)
// const [currentPage,setCurrentPage]= useState(1)
// const [postsPerPage,setpostsPerPage]=useState(10)

// useEffect(()=>{
//   SetLoading
// },[])

// return(

// );

// };

// export default test

import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import ListingAuthors from "../ListingAuthors/ListingAuthors";
import axios from "axios";
import './Pagentaion.css'

const PaginationCompo = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([1, 2, 3, 4, 5]); // for the equation that calculates the number of pages

  useEffect(() => {
    if (props.type === 1) {
      setAuthorPagenation();
    } else if (props.type === 2) {
      setBookPagenation();
    }else if(props.type===3){
      setCatPagnation();
    }
  }, []);

  function setCatPagnation() {
    axios
      .get("http://34.107.102.252:3000/category")
      .then((res) => {
        setPageNumber(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function setAuthorPagenation() {
    axios
      .get("http://34.107.102.252:3000/author")
      .then((res) => {
        setPageNumber(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setBookPagenation() {
    axios
      .get("http://34.107.102.252:3000/book")
      .then((res) => {
        setPageNumber(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setPageNumber(res) {
    let PN = parseInt(res.data.length / 5);
    PN = res.data.length % 5 !== 0 ? PN + 1 : PN;
    const ts = [];
    for (let index = 0; index < PN; index++) {
      ts.push(index + 1);
    }
    console.log(ts);

    setItems(ts);
  }

  return (
    <Pagination className="page">
      <Pagination.First />

      {items.map((item) => (
        <Pagination.Item
          onClick={() => {
            setCurrentPage(item);
            props.pageNumberHandler(item);
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

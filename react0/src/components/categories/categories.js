import React, { Component, useState, useEffect } from 'react';
import "./categories.css"
import { Card, CardGroup, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagenation from "../Pagentaion/Pagentaion";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    const [filtered, setfiltred] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const pageNumberHandler = (number) => {
        setPageNumber(number);
    };

    useEffect(() => {
        const start = 5 * (pageNumber - 1);
        const end = start + 5;
        const filtred = categories.slice(start, end);
        setfiltred(filtred);
    }, [pageNumber]);

    useEffect(() => {
        const filtred = categories.slice(0, 5);
        setfiltred(filtred);
    }, [categories]);

    const getCategories = () => {
        axios.get('http://34.107.102.252:3000/category/')
            .then(result => {
                setCategories(result.data)
                console.log(result.data)
            })

    }
    if (categories[1]) {
        return (
            <div className="categoriesPage h-100">
                <h1>All Categories</h1>
                <CardDeck className="mx-auto pt-2">
                    {filtered.map(category => (
                        <Card key={category._id} border="info" className="my-2 lamis">
                            <Card.Header><Link to={`/categorypage/${category._id}`}>{category.categoryName}</Link></Card.Header>
                            <Card.Body>
                                <Card.Text>Hello this a brief about category</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
                <Pagenation pageNumberHandler={pageNumberHandler} type={3}></Pagenation>
            </div>

        )
    }
    else {
        getCategories();
        return null;
    }
}

export default Categories;
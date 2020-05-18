import React, { Component, useState } from 'react';
import "./categories.css"
import { Card, CardGroup, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
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
                    {categories.map(category => (
                        <Card key={category._id} border="info" className="my-2">
                            <Card.Header><Link to={`/categorypage/${category._id}`}>{category.categoryName}</Link></Card.Header>
                            <Card.Body>
                                <Card.Text>Hello this a brief about category</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </div>

        )
    }
    else {
        getCategories();
        return null;
    }
}

export default Categories;
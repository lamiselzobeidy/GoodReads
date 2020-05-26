import React, { useState } from "react";
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import './ListingCategories.css';
import axios from 'axios';

const ListingCategories = () => {
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
            <div className="listingCategories">
                <h1>All Categories</h1>
                <Card.Group itemsPerRow={4} className="container mt-5">
                    {categories.map(category => (
                        <Card key={category._id} border="info" className="categoryCrads">
                            <Card.Content>
                                <Card.Header>{category.categoryName}</Card.Header>
                                <Card.Description>{category.summary}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={`/categorypage/${category._id}`}>
                                    <Icon name='info' />
                        More details
                     </a>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </div>
        );
    }
    else {
        getCategories();
        return null;
    }
}

export default ListingCategories
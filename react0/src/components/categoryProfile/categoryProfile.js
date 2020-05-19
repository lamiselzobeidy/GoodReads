import React, {useState} from 'react';
import './categoryProfile.css';
import { Card } from 'react-bootstrap';
import Book from './images/book.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryProfile = (props) => {
    const { match: { params } } = props;
    const [category, setCategory] = useState(0);
    const getCategory = () =>{
    axios.get(`http://34.107.102.252:3000/category/${params.categoryId}`)
    .then(result => {
        setCategory(result.data)
        console.log(result.data)
    })
}
if(category){
    return (
        <div className="categoryProfile pl-4 pr-4 pt-4">
            <h2 className="ml-5" >{category.categoryName}</h2>
            <div className="row row-cols-1 row-cols-md-4 ml-5 pt-5 w-100">
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link className="links">Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link className="links">Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link className="links" >Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link className="links">Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link className="links">Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link className="links">Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link className="links">Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link className="links">Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link className="links">Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link className="links">Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
else{
    getCategory();
    return null;
}
}

export default CategoryProfile;
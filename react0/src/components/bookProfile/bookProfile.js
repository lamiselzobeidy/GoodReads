import React, { useState } from 'react';
import './bookProfile.css';
import { Row, Col, Dropdown, Card } from 'react-bootstrap';
import { MDBRating } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BeautyStars from 'beauty-stars';

const BookProfile = (props) => {
    const { match: { params } } = props;
    console.log(params);
    const [book, setBook] = useState(0);
    const [stars, setSars] = useState(0);
    const getBook = () => {
        axios.get(`http://34.107.102.252:3000/book/${params.bookId}`)
        // axios.get('http://34.107.102.252:3000/book/5ec2d02f919f0b7d7211addf')
            .then(result => {
                setBook(result.data);
                console.log(result.data)
            })
    }
    if (book) {
        return (
            <div className=" pt-5 bookDetails">
                <Row className="mx-auto">
                    <Col xs="4">
                        <Card className="bookCard mx-auto" >
                            <Card.Img variant="top" src={`http://34.107.102.252:3000/`+book.book.coverImageName} height="120px" className="w-75 mx-auto mt-3" />
                            <Card.Body className="mx-auto">
                                <Dropdown>
                                    <Dropdown.Toggle variant="info" id="dropdown-basic" style={{ fontSize: '12px' }}>Want to Read</Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item href="#/action-1" style={{ fontSize: '12px' }}>Want to Read</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" style={{ fontSize: '12px' }}>Currently reading</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" style={{ fontSize: '12px' }}>Done</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <BeautyStars size="20px" value={stars} onChange={value => setSars(value)} />
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs="5" className="pt-4 bookInfo" >
                        <h2 className="bookname">{book.book.bookName}</h2>
                        <Link>by {book.book.authorId.firstName} {book.book.authorId.lastName}</Link><br/>
                        <Link>{book.book.catId.categoryName}</Link>
                        <BeautyStars size="15px" value={book.bookAvgRate} />
                        <p className="mt-3">{book.book.brief}</p>
                    </Col>

                </Row>
                <Row className="justify-content-md-center w-100">
                    <Col sm={10}>
                        <div className="mt-5 pt-3">
                            <h2 className="bookname">Review</h2>
                            <p>First Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
    else {
        getBook();
        return null;
    }
}


export default BookProfile;
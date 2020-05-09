import React from 'react';
import './bookProfile.css';
import { Row, Col, Dropdown, Card } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';
import StarRatings from 'react-star-ratings';
import { MDBContainer, MDBRating } from 'mdbreact';
import Book from './images/book.png';
import { Link } from 'react-router-dom';

const bookProfile = () => {
    return (
        <div className="bookProfile pl-5 pt-5 mt-5 ml-5 pr-0">
            <div className="bookDetails">
                <Row>
                    <Col sm={3} className="pr-0" >
                        <Card style={{ width: '16rem', height:'250px' }}>
                            <Card.Img variant="top" src={Book} height="120px" className="w-75 mx-auto" />
                            <Card.Body className="mx-auto">
                                <Dropdown className="mx-auto" >
                                    <Dropdown.Toggle variant="info" id="dropdown-basic" style={{fontSize:'12px'}}>Want to Read</Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item href="#/action-1" style={{fontSize:'12px'}}>Want to Read</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" style={{fontSize:'12px'}}>Currently reading</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" style={{fontSize:'12px'}}>Done</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <MDBRating className="starRating" iconRegular />

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col sm={6} className="pl-2">
                        <h2 className="bookname">Book Name</h2>
                        <Link>by BookAuthor</Link><br />
                        <Link>Category Name</Link><br/>
                        <StarRatings
                            rating={2.403}  
                            starDimension="20px"
                            starSpacing="1px"
                        /><br/>
                        <p>This is a brief abou the book, In Harry Potter and the Philosopher's Stone, Harry, an orphan, lives with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. One day just before his eleventh birthday, an owl tries to deliver a mysterious letter—the first of a sequence of events that end in Harry meeting a giant man named Hagrid…</p>
                    </Col>
                </Row>
                    <div className="mt-5 pt-3">
                    <h2 className="bookname">Review</h2>
                    <p>First Review: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

            </div>
        </div>
    )
}

export default bookProfile;
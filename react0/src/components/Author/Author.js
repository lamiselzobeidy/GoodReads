import React, {useState, useEffect} from 'react'
import {Table, Card, Row, Col} from 'react-bootstrap'
import "./Author.css"
import axios from 'axios'
import BeautyStars from 'beauty-stars';
import {Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Author(props) {

    const [author, setAuthor] = useState([]);
    const [authorBooks, setAuthorBooks] = useState([]);
    useEffect(() => {
        console.log(props.location.xy.authorId);

        axios.get(`http://34.107.102.252:3000/author/${props.location.xy.authorId}`)
            .then(res => {
                console.log(res.data);

                setAuthor(res.data);

            })
            .catch(err => {
                console.log(err);

            })

        axios.get('http://34.107.102.252:3000/book/', {
            params: {
                authorID: props.location.xy.authorId
            }

        })
            .then(res => {
                console.log(res.data);
                setAuthorBooks(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [props.location.xy]);


    return (

        <Table striped bordered hover variant="white" className="table">
            <tbody>
            <tr>
                <td style={{}} colSpan="3">

                    <Card style={{height: '25rem'}}>
                        <Card.Header
                            className="text-center">{author.firstName + " " + author.lastName}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col className="text-center">
                                    <Card.Img className="mx-auto mb-3 mt-3"
                                              src={`http://34.107.102.252:3000/${author.authorImage}`}
                                              style={{width: 300}}/>
                                    <Card.Title>Date of
                                        Birth: {String(author.DateofBirth).substring(0, 10)}</Card.Title>
                                    <Card.Text>
                                        {author.bio}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </td>
            </tr>

            <tr>
                <Row className=" ">
                    {
                        authorBooks !== undefined ? authorBooks.map(book => {
                            return (
                                <Col className="md-4">
                                    <Link
                                        to={`/bookprofile/${book._id}`}
                                    >
                                        <Card>
                                            <Row>
                                                <Col className="md-2">
                                                    <Card.Img className="w-100 h-100"
                                                              src={`http://34.107.102.252:3000/${book.bookImage}`}/>
                                                </Col>

                                                <Col>
                                                    <Card.Body className="text-left">
                                                        <Card.Title className="m-2" style={{color: 'blue'}}>
                                                            {book.bookName}
                                                        </Card.Title>
                                                        <BeautyStars size="15px"
                                                                     value={book.avgRatings === null ? 0 : book.avgRatings}/>
                                                        <Card.Text className="m-2">
                                                            Average Rating:
                                                            {book.avgRatings === null ? 0 : book.avgRatings}
                                                        </Card.Text>
                                                        <Card.Text className="m-2">
                                                            Number of Ratings:
                                                            {book.numberOfRatings === null ? 0 : book.numberOfRatings}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        }) : <div><p>This author has no books</p></div>

                    }
                </Row>
            </tr>

            </tbody>
        </Table>

    );
}

export default Author

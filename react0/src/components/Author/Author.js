import React, {useState, useEffect} from 'react'
import {Table, Card, Row, Col} from 'react-bootstrap'
import "./Author.css"
import axios from 'axios'
import BeautyStars from 'beauty-stars';
import {Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Author(props) {

    const { match: { params } } = props;

    const [author, setAuthor] = useState([]);
    const [authorBooks, setAuthorBooks] = useState([]);
    useEffect(() => {
        console.log(params.authorId);

        axios.get(`http://34.107.102.252:3000/author/${params.authorId}`)
            .then(res => {
                console.log(res.data);

                setAuthor(res.data);

            })
            .catch(err => {
                console.log(err);

            })

        axios.get('http://34.107.102.252:3000/book/', {
            params: {
                authorID: params.authorId
            }

        })
            .then(res => {
                console.log(res.data);
                setAuthorBooks(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [params]);


    return (

        <Table striped bordered hover variant="white" className="table">
            <tbody>
            <tr>
                <td style={{}} colSpan="3">

                    <Card >
                        <Card.Header
                            className="text-center">{author.firstName + " " + author.lastName}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col className="text-center">
                                    <Card.Img className="mx-auto mb-3 mt-3 w-25 h-50"
                                              src={`http://34.107.102.252:3000/${author.authorImage}`}
                                              />
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

            <tr  > 
            <Row className="mx-auto p-2" >
                    {
                        authorBooks !== undefined ? authorBooks.map(book => {
                            return (
                                <Col md="4"  >
                                    <Link
                                        to={`/bookprofile/${book._id}`}
                                    >
                                        <Card>
                                            <Row>
                                                <Col className="p-0" style={{maxWidth:"200px" ,display:"flex",  "align-items":"center"}}>
                                                    <Card.Img className="w-100 mx-auto h-100"
                                                              src={`http://34.107.102.252:3000/${book.bookImage}`}/>
                                                </Col>

                                                    <Card.Body >
                                                        <Card.Title className="mb-2" style={{color: 'blue'}}>
                                                            {book.bookName}
                                                        </Card.Title>
                                                        <Card.Text className="mb-2">
                                                            Average Rating:
                                                            {book.avgRatings === null ? 0 : book.avgRatings}
                                                        </Card.Text>
                                                        <Card.Text className="mb-2">
                                                            Number of Ratings:
                                                            {book.numberOfRatings === null ? 0 : book.numberOfRatings}
                                                        </Card.Text>
                                                        <BeautyStars size="15px"
                                                                    gap="20px"
                                                                     value={book.avgRatings === null ? 0 : book.avgRatings}/>
                                                        
                                                    </Card.Body>
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

import React, {useState, useEffect} from 'react'
import {Table, Card, Row, Col} from 'react-bootstrap'
import "./Author.css"
import axios from 'axios'
import BeautyStars from 'beauty-stars';

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
                <td style={{height: '60vh'}} colSpan="2">

                    <Card style={{height: '8rem'}}>
                        <Card.Header>{author.firstName + " " + author.lastName}</Card.Header>
                        <Card.Img className="img" variant="top"
                                  src={`http://34.107.102.252:3000/${author.authorImage}`}/>
                        <Card.Body>
                            <Card.Title>Info</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </td>
            </tr>

            <tr>

                {
                    authorBooks !== undefined ? authorBooks.map(book => {
                        return (
                            <Card>

                                <Row>
                                    <Card.Img className="img" variant="top"
                                              src={`http://34.107.102.252:3000/${book.bookImage}`}/>

                                    <Card.Body className="text-left">
                                        <Row>
                                            <Col className="col-8">
                                                <Card.Title className="m-2">
                                                    {book.bookName}
                                                </Card.Title>
                                                <BeautyStars size="15px"
                                                             value={book.avgRatings === null ? 0 : book.avgRatings}/>
                                                <Card.Text className="m-2">
                                                    Number of Ratings:
                                                    {book.numberOfRatings === null ? 0 : book.numberOfRatings}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Row>
                            </Card>
                        )
                    }) : <div><p>This author has no books</p></div>

                }

            </tr>

            </tbody>
        </Table>

    );
}

export default Author

import React, {useState, useEffect} from 'react'
import {Table, Card, Button} from 'react-bootstrap'
import "./Author.css"
import axios from 'axios'
import {Icon, Image} from "semantic-ui-react";
import {MDBCol} from "mdbreact";
import {CardFooter} from "react-bootstrap/Card";


function Author(props) {

    const [author, setAuthor] = useState([{lastName: "", firstName: "", authorImage: ""}]);
    const [allBooks, setBooks] = useState([]);
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
                setBooks(res.data);
            })

    }, []);


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
                <td>
                    {
                        allBooks.map(book => {
                            return (
                                <Card>
                                    <Image
                                        src={book.bookImage}
                                        wrapped
                                        ui={false}/>
                                    <Card.Content>
                                        <Card.Header>
                                            {book.bookName}
                                        </Card.Header>
                                        <Card.Description>
                                            {book.avgRatings}
                                            {book.numberOfRatings}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='book'/>
                                            More details
                                        </a>
                                    </Card.Content>
                                </Card>
                            )
                        })
                    }

                </td>

            </tr>

            </tbody>
        </Table>

    );
}

export default Author

import React, { useState, useEffect } from 'react';
import './UserProfilePage.css'
import { Tab, Row, Col, Nav, Table, Button } from 'react-bootstrap'
import { Label, Rating } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const RatingBar = (props) => (
    <Rating disabled icon='star' defaultRating={props.rating} maxRating={4} />
)

const TableList = (props) => {
    console.log(props.Books)
    if(props.Books.length>0)
    {
    return (
        <Table striped bordered hover className="Table">
            <thead>
                <tr>
                    <th>Cover</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Avg Rate</th>
                    <th>Rating</th>
                    <th>Shelve</th>
                </tr>
            </thead>
            <tbody>
                {props.Books.map(books => (
                    <tr>
                        <td>1</td>
                        <td><Link to={`/bookprofile/${books.bookId}`}>{books.bookName}</Link></td>
                        <td>{books.autherName}</td>
                        <td><RatingBar rating={books.avgRate!=null? books.avgRate : 0}></RatingBar></td>
                        <td><RatingBar rating={books.userRate!=null? books.userRate : 0}></RatingBar></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
                }
                else{
                    return null;
                }

}

const UserProfilePage = (props) => {
    const [datal, setDatal] = useState({});
    const [allBooks, setAllBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [readingBooks, setReadingBooks] = useState([]);
    const [wantBooks, setWantBooks] = useState([]);
    const getData = async () => {
        const result = await axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/',
            headers: { 'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g' }
        });
        await setDatal(result.data[0]);
        console.log(result.data[0])
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/all',
            headers: { 'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g' }
        }).then(result => {
            console.log(result.data.books)
            setAllBooks(result.data.books)
        });
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/read',
            headers: { 'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g' }
        }).then(result => {
            console.log(result.data)
            setReadBooks(result.data)
        });
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/current',
            headers: { 'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g' }
        }).then(result => {
            console.log(result.data)
            setReadingBooks(result.data)
        });
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/want',
            headers: { 'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g' }
        }).then(result => {
            console.log(result.data)
            setWantBooks(result.data)
        });
    }

    const [type, setType] = useState(0)
    useEffect(() => {
        console.log(props.type);
        setType(props.type)
        getData();
    }, [])
    useEffect(() => {
        console.log(allBooks);
    }, [allBooks])

    return (

        <div className="Container mx-2">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} className="NavContainer">
                        <Nav variant="pills" className="flex-column h-100">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Read</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Currently Reading</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth"> Want To Read</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={9} >
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Label className="my-4 w-25 label">All</Label>
                                <TableList Books={allBooks}></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Label className="my-4 w-25 label">Read</Label>

                                <TableList Books={readBooks}></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Label className="my-4 w-25 label">Currently Reading</Label>

                                <TableList Books={readingBooks}></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Label className="my-4 w-25 label">Want To Read</Label>
                                <TableList Books={wantBooks}></TableList>


                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Button onClick={()=>{
                axios({
                    method: 'post',
                    url: 'http://34.107.102.252:3000/logout',
                    headers: { 'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g' }
                }).then(result => {
                    sessionStorage.removeItem('user')
                    window.location = '/'
                });
            }}>Logout</Button>
        </div>

    );
    // }
    // else{
    //     getData();
    //     return null;
    // }
}

export default UserProfilePage;
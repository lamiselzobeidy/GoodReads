import React, { useState, useEffect } from 'react';
import './UserProfilePage.css'
import { Tab, Row, Col, Nav, Table, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { Label, Rating } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const RatingBar = (props) => (
    <Rating disabled icon='star' defaultRating={props.rating} maxRating={4} />
)
const updateBookStatus = (prevStatus, newStatus) => {
    console.log(prevStatus + "  update function  " + newStatus)
    if (prevStatus != newStatus) {

    }
}
const TableList = (props) => {
    const [Type, setType] = useState(1);
    const [currentBooks, setCurrentBooks] = useState("");
    const [readType, setreadType] = useState("");
    const changeBookStatus = (bookId, operation) => {
        axios({
            method: 'patch',
            url: `http://34.107.102.252:3000/user/book/change/${bookId}`,
            data: { operation: operation },
            headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
        }).then(result => {
            console.log("done axios");
        });
    }

    useEffect(() => {

    }, [currentBooks])
    
    if (props.Books.books.length > 0) {
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
                    {/* {console.log(props.status)} */}
                    {
                        props.Books.books.map(books => (

                            <tr>
                                <td>{props.Books.status}</td>
                                <td><Link to={`/bookprofile/${books.bookId}`}>{books.bookName}</Link></td>
                                <td>{books.autherName}</td>
                                <td><RatingBar rating={books.avgRate != null ? books.avgRate : 0}></RatingBar></td>
                                <td><RatingBar rating={books.userRate != null ? books.userRate : 0}></RatingBar></td>
                                <td>
                                    {props.Books.status == 1 ? <div></div> :
                                    <DropdownButton id="dropdown-basic-button" title="Action">
                                    <Dropdown.Item href="#/action-1" onClick={()=>{
                                        if (props.Books.status == 4) { 
                                            console.log("nafs status") }
                                        else if (props.Books.status == 3) {
                                            changeBookStatus(books.bookId, 2)
                                        }
                                        else if (props.Books.status == 2) {
                                            changeBookStatus(books.bookId, 6)
                                        }
                                    }} >want to read</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={() => {
                                        if (props.Books.status == 3) { 
                                            console.log("nafs status") }
                                        else if (props.Books.status == 2) {
                                            changeBookStatus(books.bookId, 5)
                                        }
                                        else if (props.Books.status == 4) {
                                            changeBookStatus(books.bookId, 3)
                                        }
                                    }}>currently reading</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={() => {
                                        if (props.Books.status == 2) { console.log("nafs status") }
                                        else if (props.Books.status == 3) {
                                            changeBookStatus(books.bookId, 1)
                                        }
                                        else if (props.Books.status == 4) {
                                            changeBookStatus(books.bookId, 4)
                                        }
                                    }}>done reading</Dropdown.Item>
                                </DropdownButton>
                                }
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        );
    }
    else {
        return null;
    }

}

const UserProfilePage = (props) => {
    const [bookStatus, setBookStatus] = useState(0)
    const [datal, setDatal] = useState({});
    const [allBooks, setAllBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [readingBooks, setReadingBooks] = useState([]);
    const [wantBooks, setWantBooks] = useState([]);

    //get all, read, current, done books
    const getData = async () => {
        const result = await axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/',
            headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
        });
        await setDatal(result.data[0]);
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/all',
            headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
        }).then(result => {
            setAllBooks(result.data.books)
        });
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/read',
            headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
        }).then(result => {
            setReadBooks(result.data)
        });
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/current',
            headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
        }).then(result => {
            setReadingBooks(result.data)
        });
        axios({
            method: 'get',
            url: 'http://34.107.102.252:3000/user/book/want',
            headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
        }).then(result => {
            setWantBooks(result.data)
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="Container mx-2">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} className="NavContainer">
                        <Nav variant="pills" className="flex-column h-100">
                            <Nav.Item>
                                <Nav.Link eventKey="first" onClick={() => {
                                    setBookStatus(0)
                                    console.log("byd5ol hena all")
                                }}>All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" onClick={() => {
                                    setBookStatus(1)
                                    console.log("byd5ol hena read")
                                }}>Read</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" onClick={() => {
                                    setBookStatus(2)
                                    console.log("byd5ol hena current")
                                }}>Currently Reading</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" onClick={() => {
                                    setBookStatus(3)
                                    console.log("byd5ol hena want")
                                }}> Want To Read</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={9} >
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Label className="my-4 w-25 label">All</Label>
                                <TableList Books={{ books: allBooks, status: 1 }} ></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Label className="my-4 w-25 label">Read</Label>
                                <TableList Books={{ books: readBooks, status: 2 }}></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Label className="my-4 w-25 label">Currently Reading</Label>
                                <TableList Books={{ books: readingBooks, status: 3 }}></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Label className="my-4 w-25 label">Want To Read</Label>
                                <TableList Books={{ books: wantBooks, status: 4 }}></TableList>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Button onClick={() => {
                axios({
                    method: 'post',
                    url: 'http://34.107.102.252:3000/logout',
                    headers: { 'JWT': JSON.parse(sessionStorage.getItem("user")).token }
                }).then(result => {
                    sessionStorage.removeItem('user')
                    window.location = '/'
                });
            }}>Logout</Button>
        </div>

    );
}

export default UserProfilePage;
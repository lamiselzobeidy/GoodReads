import React from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import "./Author.css"


const Author = () => {

    return (

        <Table striped bordered hover variant="white" className="table">
            <tbody >
                <tr >

                    <td style={{ height: '60vh' }} colSpan="2">

                        <Card style={{ height: '8rem' }}>
                            <Card.Header>Fady Jan</Card.Header>
                            <Card.Body>
                                <Card.Img className="img" variant="top" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg" />
                                <Card.Title>Info</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>

                    </td>

                </tr>
                <tr>
                    <td >
                    <Card.Title>All Books</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </td>

                    <td >
                    <Card.Title>History</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </td>

                </tr>

            </tbody>
        </Table>

    );
}

export default Author
import React, { useState,useEffect } from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import "./Author.css"
import axios from 'axios'


const Author = (props) => {
    const [author,setAuthor] = useState([])
    useEffect(()=>{
        axios.get("http://34.107.102.252:3000/author/5ebb3e65e174821f8e201e63")
        .then(res=>{
            console.log(props);
            
            setAuthor(res.data); 
                         
        })
        .catch(err=>{
            console.log(err);
            
        })

    },[props])



    return (

        <Table striped bordered hover variant="white" className="table">
            <tbody >
                <tr>
                    <td style={{ height: '60vh' }} colSpan="2">

                        <Card style={{ height: '8rem' }}>
                             <Card.Header>{author.firstName + " " + author.lastName}</Card.Header>
                            <Card.Body>
                                <Card.Img className="img" variant="top" src={author.authorImage}/>
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
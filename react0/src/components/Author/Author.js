import React, { useState,useEffect } from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import "./Author.css"
import axios from 'axios'


function Author (props) {

    const [author,setAuthor] = useState([{lastName:"",firstName:"",authorImage:"" }])
    useEffect(()=>{
        console.log(props.location.xy.authorId);
        
        axios.get(`http://34.107.102.252:3000/author/${props.location.xy.authorId}`)
        .then(res=>{
            console.log(res.data);
            
            setAuthor(res.data); 
                         
        })
        .catch(err=>{
            console.log(err);
            
        })
        axios.get('http://34.107.102.252:3000/book/', {
            params: {
              authorID: props.location.xy.authorId
            }
        
        })
        .then(res=>{
                        
            console.log(res.data);

        })

    },[])



    return (

        <Table striped bordered hover variant="white" className="table">
            <tbody >
                <tr>
                    <td style={{ height: '60vh' }} colSpan="2">

                        <Card style={{ height: '8rem' }}>
                             <Card.Header>{author.firstName + " " + author.lastName}</Card.Header>
                            <Card.Body>
                                <Card.Img className="img" variant="top" src={`http://34.107.102.252:3000/`+author.authorImage }/>
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
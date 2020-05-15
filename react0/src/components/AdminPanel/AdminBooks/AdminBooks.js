/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react';
import { Table, Modal, Button, Form, Col, Row } from 'react-bootstrap'
import '../AdminCatogries/AdminCatogries.css'
import { Icon } from 'semantic-ui-react';
import axios from 'axios'


function MyVerticallyCenteredModal(props) {
    function addComponent() {
        console.log("asd");
        
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD Book
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Book Name
                     </Form.Label>
                        <Col sm="10">
                            <Form.Control size="lg" type="text" placeholder="Enter Book Name ..." />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category
                     </Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Author
                     </Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input isValid />
                            <Form.File.Label data-browse="Button text">
                                Upload Your Image
                             </Form.File.Label>
                        </Form.File>
                    </div>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={()=>{props.onHide();addComponent()}}>
                    Save Changes
          </Button>
            </Modal.Footer>
        </Modal>
    );
}




function AdminBooks() {
    const [modalShow, setModalShow] = React.useState(false);
    const [books, setBooks] = useState([])
    useEffect(()=>{
        axios.get("http://34.107.102.252:3000/book")
        .then(res=>{
            console.log(res.data);
            setBooks(res.data);              
        })
        .catch(err=>{
            console.log(err);
            
        })

    },[])
    function deleteComponent(x) {
        console.log(x);
        axios.delete(`http://34.107.102.252:3000/category/${x.}`)
        


    }
    function editComponent (x){

    }

     return (
        <div>
            <a className="iconadjustment" onClick={() => setModalShow(true)}>
                <Icon name='add circle test' />
            </a>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>CatogoryId</th>
                        <th>AuthorId</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book=>(

                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>{book.bookName}</td>
                            <td>{book.catId._id}</td>
                            <td>ttt</td>
                            <td>                            <a  onClick={
                                ()=> { editComponent({category}) }    
                            }>
                                <Icon name='edit' />
                            </a>
                            <a  onClick={
                                ()=> { deleteComponent({category}) }    
                            }>
                                <Icon name='delete' />
                            </a>
                            </td>
    
    
                        </tr>
                        ))
                 
                        }
                </tbody>
            </Table>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    );
}

export default AdminBooks;
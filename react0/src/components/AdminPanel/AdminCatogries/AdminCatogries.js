/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react';
import { Table, Modal, Button, Form, Col, Row } from 'react-bootstrap'
import './AdminCatogries.css'
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
                    ADD Category
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category Name
                     </Form.Label>
                        <Col sm="10">
                            <Form.Control size="lg" type="text" placeholder="" />
                        </Col>
                    </Form.Group>
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



function AdminCatogries() {
    const [modalShow, setModalShow] = React.useState(false);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get("http://34.107.102.252:3000/category/")
            .then(res => {
                console.log(res.data);
                setCategories(res.data);
            })
            .catch(err => {
                console.log(err);

            })

    }, [])



    function deleteComponent(x) {
        console.log(x.category._id);
        axios.delete(`http://34.107.102.252:3000/category/${x.category._id}`)
        


    }
    function editComponent (x){

    }
    return (
        <div>
            <a className="iconadjustment" onClick={() => {setModalShow(true) ; }}>
                <Icon name='add circle test' />
            </a>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        categories.map(category=>(
                            <tr>
                            <td>{category._id}</td>
                              <td> {category.categoryName}</td>
                            <td>
                            <a  onClick={
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

export default AdminCatogries;
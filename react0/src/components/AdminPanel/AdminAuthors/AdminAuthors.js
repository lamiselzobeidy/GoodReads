/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useEffect,useState} from 'react'
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
                    ADD Category
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                 <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Author Name
                     </Form.Label>
                        <Col sm="10">
                          <Form.Control size="lg" type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary"onClick={()=>{props.onHide();addComponent()}}>
                    Save Changes
          </Button>
            </Modal.Footer>
        </Modal>
    );
}


function AdminAuthors() {
    const [modalShow, setModalShow] = React.useState(false);

    const [authors,setAuthors] =useState([])
    useEffect(()=>{
        axios.get("http://34.107.102.252:3000/author")
        .then(res=>{
            console.log(res.data);
            setAuthors(res.data);              
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                {
                    authors.map(author=>(
                        <tr>
                        <td className="text-danger" style={{fontSize:15}} >{author._id}</td>
                         <td>{author.authorImage}</td>
                        <td>{author.firstName }</td>
                        <td>{author.lastName}</td>
                        <td>{author.DateofBirth}</td>
                        <td>                          <a  onClick={
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

export default AdminAuthors;
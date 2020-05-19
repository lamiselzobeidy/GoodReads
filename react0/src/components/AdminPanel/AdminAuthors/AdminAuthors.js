/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState,} from 'react'
import { Table, Modal, Button, Form, Col, Row } from 'react-bootstrap'
import '../AdminCatogries/AdminCatogries.css'
import { Icon, Input } from 'semantic-ui-react';
import axios from 'axios'

function MyVerticallyCenteredModal(props) {
    const [fName, setfName] = useState('');
    const [lName, setLName] = useState('');
    const [dateofBirth, setDateofBirth] = useState('');
    const [bio,setBio] =useState('')
    const [file, setFile] = useState(null)

    const submitValue = (evt) => {
        evt.preventDefault();
        const frmdetails = new FormData();
        frmdetails.append('firstName', fName)
        frmdetails.append('lastName', lName)
        frmdetails.append('DateofBirth', dateofBirth)
        frmdetails.append('authorImage', file)
        frmdetails.append('bio' ,bio )

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g'
            }
        };
        axios.post('http://34.107.102.252:3000/author/', frmdetails, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                
            })
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

                <Form onSubmit={submitValue}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                             First Name
                     </Form.Label>
                        <Col sm="10">
                            <Form.Control size="lg" type="text" placeholder="" onChange={e => setfName(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                             Last Name
                     </Form.Label>
                        <Col sm="10">
                           
                        <Form.Control size="lg" type="text" placeholder="" onChange={e => setLName(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Date Of Birth
                     </Form.Label>
                        <Col sm="10">
                        <Form.Control size="lg" type="text" placeholder="" onChange={e => setDateofBirth(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Bio
                     </Form.Label>
                        <Col sm="10">
                        <Form.Control size="lg" type="text" placeholder="" onChange={e => setBio(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input type="file" file="myImage" isValid onChange={(e) => {
                                console.log({ file: e.target.files[0] });
                                setFile(e.target.files[0])
                             }
    
                            } />
                            <Form.File.Label data-browse="Button text">
                                Upload Your Image
                             </Form.File.Label>
                        </Form.File>
                    </div>

                    <Button onClick={props.onHide}>Close</Button>
                    <Button variant="primary" type="submit" onClick={() => { props.onHide() }}>
                        Save Changes
                 </Button>
                </Form>


            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

function AdminAuthors() {
    const [modalShow, setModalShow] = React.useState(false);
    function getAuthors() {
        axios.get("http://34.107.102.252:3000/author")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    const [authors, setAuthors] = useState([])
    useEffect(() => {
        getAuthors()
    }, [])

    function deleteComponent(x) {

        axios.delete(`http://34.107.102.252:3000/author/${x._id}`, {
            headers: {
                JWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g"
            }
        }).then(res => {
            getAuthors()
        })
            .catch(err => {
                console.log(err);

            })




    }
    function editComponent(x) {

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
                        authors.map(author => (
                            <tr>
                                <td className="text-danger" style={{ fontSize: 15 }} >{author._id}</td>
                                <td>{author.authorImage}</td>
                                <td>{author.firstName}</td>
                                <td>{author.lastName}</td>
                                <td>{author.DateofBirth}</td>
                                <td> <a onClick={
                                    () => { editComponent(author) }
                                }>
                                    <Icon name='edit' />
                                </a>
                                    <a onClick={
                                        () => { deleteComponent(author) }
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
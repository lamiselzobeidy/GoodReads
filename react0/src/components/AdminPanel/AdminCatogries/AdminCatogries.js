import React from 'react';
import { Table, Modal, Button, Form, Col, Row } from 'react-bootstrap'
import './AdminCatogries.css'
import { Icon } from 'semantic-ui-react';

function MyVerticallyCenteredModal(props) {
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
                <Button variant="primary" onClick={props.onHide}>
                    Save Changes
          </Button>
            </Modal.Footer>
        </Modal>
    );
}



function AdminCatogries() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <a className="iconadjustment" onClick={() => setModalShow(true)}>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td><a >
                            <Icon name='edit' />
                        </a>
                            <a>
                                <Icon name='delete' />
                            </a>
                        </td>

                    </tr>

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
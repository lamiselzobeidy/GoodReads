import React from 'react';
import './UserProfilePage.css'
import { Tab, Row, Col, Nav, Table } from 'react-bootstrap'
import { Label ,Rating } from 'semantic-ui-react';

const RatingBar = () => (
    <Rating icon='star' defaultRating={3} maxRating={4} />
  )
  


function TableList() {
    return (
        <Table striped bordered hover  className="Table">
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <RatingBar></RatingBar>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><RatingBar></RatingBar></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><RatingBar></RatingBar></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );

}

function UserProfilePage(props) {
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
                                <TableList></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Label className="my-4 w-25 label">Read</Label>

                                <TableList></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Label className="my-4 w-25 label">Currently Reading</Label>

                                <TableList></TableList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Label className="my-4 w-25 label">Want To Read</Label>
                                <TableList></TableList>


                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>

    );
}

export default UserProfilePage;
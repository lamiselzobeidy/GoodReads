import React from 'react';
import "./categories.css"
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';

const Categories = () => {
    return (
        <div className="categoriesPage h-100">
            <h1>All Categories</h1>
            <div className="row row-cols-1 row-cols-md-4 ml-5 pt-5">
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Arts & Music</Card.Header>
                        <Card.Body>
                                <ul>
                                    <li>Art History</li>
                                    <li>Calligraphy</li>
                                    <li>Drawing</li>
                                    <li>Fashion</li>
                                    <li>Film</li>
                                </ul>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card className="h-100" border="info" style={{ width: '16rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
            </div>
        </div>

    )
}

export default Categories
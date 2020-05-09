import React from 'react';
import './categoryProfile.css';
import { Card } from 'react-bootstrap';
import Book from './images/book.png';
import { Link } from 'react-router-dom';

const categoryProfile = () => {
    return (
        <div className="categoryProfile pl-4 pr-4 pt-4">
            <h2 className="ml-5" >Category Name</h2>
            <div className="row row-cols-1 row-cols-md-4 ml-5 pt-5 w-100">
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
                <div className="col mb-4 px-0">
                    <Card style={{ width: '16rem' }} border="info">
                        <Card.Img variant="top" src={Book} width="30" height="120" className="w-75 mx-auto" />
                        <Card.Body className="mx-auto">
                            <Card.Title><Link>Book Name</Link></Card.Title>
                            <Card.Text style={{ textAlign: 'center' }}><Link>Author Name</Link></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
            </div>
        </div>
    )
}

export default categoryProfile;
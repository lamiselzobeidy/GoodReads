import React from "react";
import "./welcomePage.css";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import Logo from "../../images/logo.png";
import FbSignin from "./images/fb_signin.png";
import TwSignin from "./images/tw_signin.webp";
import GgleSignin from "./images/google_signin.webp";

const welcomePage = () => {
    return (
        <div className="WelcomePage">
            <Navbar id="navbar" variant="dark" className="py-0">
                <Navbar.Collapse className="justify-content-center" id="logo">
                    <Navbar.Text className="navlink" href="#home">
                        <Navbar.Brand href="#home">
                            <img alt="" src={Logo} width="40" height="40" className="mb-3" />{' '}
                            <span className="navbarSpan">good<span className="navbarSpan" style={{ fontWeight: "bolder" }}>reads</span></span>
                        </Navbar.Brand>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mx-0 px-0 row w-100">
                <div className="col-7 h-100 py-5" id="quote">
                    <h1 className="mt-3">Your next book is our mission.</h1>
                </div>
                <div className="col-5 h-100 pt-3" style={{ backgroundColor: 'rgba(23, 23, 24, 0.24)' }}>
                    <Form className="form py-3 px-4 w-75">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div id="btn" className="text-center">
                            <Button variant="primary" type="submit" style={{ backgroundColor: '#247BA0', borderColor: '#247BA0' }}>
                                Login
                        </Button>
                        </div>
                    </Form>
                    <div className="signinIcons px-4 pt-2 mt-2 w-75">
                                <span className="signinSpam">or sign in using</span>
                                <a href=""><img alt="" src={FbSignin} width="27" height="27" className="ml-2" /></a>{'   '}
                                <a href=""><img alt="" src={TwSignin} width="30" height="30" className="ml-2" /></a>{'   '}
                                <a href=""><img alt="" src={GgleSignin} width="27" height="27" className="ml-2" /></a>{'   '}
                    </div>
                </div>
            </div>
            <div className="about row p-4 mx-0 pb-0 mt-2 w-100">
                <div className="col-4 w-100">
                    <h4>Deciding what to read next?</h4>
                    <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>

                </div>
                <div className="col-4 w-100">
                    <h4>What are your friends reading?</h4>
                    <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>

                </div>
                <div className="col-4 w-100">
                    <h4>Are you an Author or a Publisher?</h4>
                    <p>Gain access to a massive audience of more than 90 million book lovers. Goodreads is a great place to promote your books.</p>

                </div>
            </div>
            
        </div>
    );
};

export default welcomePage;

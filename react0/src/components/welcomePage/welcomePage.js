import React, { Component } from "react";
import "./welcomePage.css";
import {Navbar, Form, Button, Tabs, Tab, } from "react-bootstrap";
import Logo from "../../images/logo.png";
import FbSignin from "./images/fb_signin.png";
import TwSignin from "./images/tw_signin.webp";
import GgleSignin from "./images/google_signin.webp";
import axios from "axios";
import RegistrationPage from "../RegistrationPage/registrationPage";

class welcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      mail: "",
      pass: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://34.107.102.252:3000/login", this.state)
      .then((result) => {
        if (result.data.error) {
          console.log("error");
        } else {
          this.setState({ user: result.data });
          sessionStorage.setItem("user",JSON.stringify(this.state.user))
          console.log(sessionStorage.getItem('user'))
          return (window.location = `/homepage`);
        }
      });
  }

  render() {
    return (
      <div className="WelcomePage">
        <Navbar id="navbar" variant="dark" className="py-0">
          <Navbar.Collapse className="justify-content-center" id="logo">
            <Navbar.Text className="navlink" href="#home">
              <Navbar.Brand href="#home">
                <img alt="" src={Logo} width="40" height="40" className="mb-3" />{" "}
                <span className="navbarSpan">good<span className="navbarSpan" style={{ fontWeight: "bold" }}>reads</span></span>
              </Navbar.Brand>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div className="containerr mx-0 px-0 row w-100 mt-0">
          <div className="col-7 h-100 py-5" id="quote">
            <h1 className="mt-3">Your next book is our mission.</h1>
          </div>
          <div className="col-5 h-100 pt-3" style={{ backgroundColor: "rgba(23, 23, 24, 0.24)" }} >
            <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example" style={{ width: "40%", border: "transparent", paddingBottom:"7%",marginLeft:'18%' }} >
              <Tab eventKey="Login" title="Login">
                <Form className="form w-75 rgba-stylish-strong z-depth-4" noValidate onSubmit={this.onSubmit}>
                    <div className="rgba-stylish-strong z-depth-4 py-3 px-4  " >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="FormInput" type="email" placeholder="Enter email" name="mail" value={this.state.mail} onChange={this.onChange} />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="FormInput"
                      type="password"
                      placeholder="Password"
                      name="pass"
                      value={this.state.pass}
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <div id="btn" className="text-center">
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#247BA0",
                        borderColor: "#247BA0",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                  </div>
                </Form>
                <div className="signinIcons px-4 pt-2 mt-2 w-75">
                  <span className="signinSpam">or sign in using</span>
                  <a href="">
                    <img
                      alt=""
                      src={FbSignin}
                      width="27"
                      height="27"
                      className="ml-2"
                    />
                  </a>
                  {"   "}
                  <a href="">
                    <img
                      alt=""
                      src={TwSignin}
                      width="30"
                      height="30"
                      className="ml-2"
                    />
                  </a>
                  {"   "}
                  <a href="">
                    <img
                      alt=""
                      src={GgleSignin}
                      width="27"
                      height="27"
                      className="ml-2"
                    />
                  </a>
                  {"   "}
                  <br />
                </div>
              </Tab>

              <Tab eventKey="SignUp" title="SignUp">
                <RegistrationPage></RegistrationPage>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="about row p-4 mx-0 pb-0 mt-2 w-100">
          <div className="col-4 w-100">
            <h4>Deciding what to read next?</h4>
            <p>
              You’re in the right place. Tell us what titles or genres you’ve
              enjoyed in the past, and we’ll give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div className="col-4 w-100">
            <h4>What are your friends reading?</h4>
            <p>
              Chances are your friends are discussing their favorite (and least
              favorite) books on Goodreads.
            </p>
          </div>
          <div className="col-4 w-100">
            <h4>Are you an Author or a Publisher?</h4>
            <p>
              Gain access to a massive audience of more than 90 million book
              lovers. Goodreads is a great place to promote your books.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default welcomePage;

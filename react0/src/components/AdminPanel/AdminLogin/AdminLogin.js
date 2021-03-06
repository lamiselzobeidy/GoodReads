import React, {useState, useEffect} from "react";
import axios from "axios";
import "./AdminLogin.css";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBInput,
} from "mdbreact";

const sendAdminLoginRequest = (mail, pass) =>
    axios
        .post(`http://34.107.102.252:3000/login/`, {
            mail,
            pass,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            if (res.data.isAdmin) {
                sessionStorage.setItem("user", JSON.stringify(res.data));
                console.log(sessionStorage.getItem('user'));
                return (window.location = `/adminpanel`);
            } else {
                alert("Invalid Credentials");
            }
        });

export default function AdminLoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem("user"))) {
            if (JSON.parse(sessionStorage.getItem("user")).isAdmin) {
                window.location = '/adminpanel'
            }
        }
    }, [])

    return (

        <MDBCard
            className="card-image mx-auto m-5"
            style={{
                backgroundImage:
                    "url(https://previews.123rf.com/images/microone/microone1812/microone181200305/112856531-sketch-vintage-books-seamless-pattern-or-background-sketch-education-seamless-book-for-school-litera.jpg)",
                width: "40rem",
            }}
        >
            <div className="text-white rgba-stylish-strong py-4 px-4 z-depth-4">
                <div className="text-center">
                    <h3 className="white-text mb-2 mt-2 font-weight-bold">
                    <strong className="green-text font-weight-bold">Sign In</strong>

                        <strong> Admin</strong>
                    </h3>
                </div>
                <MDBInput
                    label="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                    group
                    type="email"
                    validate
                    labelClass="white-text"
                    className="m-0 text-success"
                />
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            label="Your password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            group
                            type="password"
                            validate
                            labelClass="white-text"
                            className="md-col-4 m-0 text-success"

                        />
                    </MDBCol>

                </MDBRow>
                <MDBRow className="d-flex align-items-center justify-content-center">
                    <div className="text-center mb-0 col-md-4">
                        <MDBBtn
                            color="success"
                            rounded
                            type="button"
                            className="btn-block z-depth-1 text-dark font-weight-bold"
                            onClick={() => {
                                sendAdminLoginRequest(email, password);
                            }}
                        >
                            Sign In
                        </MDBBtn>
                    </div>
                </MDBRow>
            </div>
        </MDBCard>


    );

}

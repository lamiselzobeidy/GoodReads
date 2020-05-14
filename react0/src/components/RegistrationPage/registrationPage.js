import React, {useState} from "react";
import axios from 'axios'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput} from 'mdbreact';

import "./registrationPage.css";

const sendRegistrationRequest = (userFirstName, userLastName, userEmail, userPassword) =>
    axios.post(`http://34.107.102.252:3000/user/`, {userFirstName, userLastName, userPassword, userEmail})
        .then(res => {
            console.log(res);
            console.log(res.data);
        });

const validateRegistration = (userFirstName, userLastName, userEmail, confirmMail, userPassword, confirmPass) => {

    if (userPassword.length < 8) {
        alert("Please user a password with a length more than 8");
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test((userEmail).val())) {
        alert("Please Enter a valid Email");
    } else if (userEmail !== confirmMail) {
        alert("Emails do not match");
    } else if (userPassword !== confirmPass) {
        alert("Password does not match");
    } else {
        sendRegistrationRequest(userFirstName, userLastName, userEmail, userPassword)
            .then(req => alert("Registration Successful"));
    }

};
export default function RegistrationPage() {

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md='6'>
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                            width: '28rem'
                        }}
                    >
                        <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                            <div className='text-center'>
                                <h3 className='white-text mb-2 mt-2 font-weight-bold'>
                                    <strong>SIGN</strong>
                                    <a href='' className='green-text font-weight-bold'>
                                        <strong> UP</strong>
                                    </a>
                                </h3>
                            </div>
                            <MDBInput
                                label='Your email'
                                value={email}
                                onChangeText={setEmail}
                                group
                                type='email'
                                validate
                                labelClass='white-text'
                            />
                            <MDBInput
                                label='Confirm email'
                                value={confirmEmail}
                                onChangeText={setConfirmEmail}
                                group
                                type='email'
                                validate
                                pattern={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
                                labelClass='white-text'
                            />
                            <MDBInput
                                label='Your password'
                                value={password}
                                onChangeText={setPassword}
                                group
                                type='password'
                                validate
                                labelClass='white-text'
                            />
                            <MDBInput
                                label='Confirm password'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                group
                                type='password'
                                validate
                                labelClass='white-text'
                            />
                            <MDBInput
                                label='Your First Name'
                                value={firstName}
                                onChangeText={setFirstName}
                                group
                                type='text'
                                validate
                                labelClass='white-text'
                            />

                            <MDBInput
                                label='Your Last Name'
                                value={lastName}
                                onChangeText={setLastName}
                                group
                                type='text'
                                validate
                                labelClass='white-text'
                            />

                            <MDBRow className='d-flex align-items-center mb-4'>
                                <div className='text-center mb-3 col-md-12'>
                                    <MDBBtn
                                        color='success'
                                        rounded
                                        type='button'
                                        className='btn-block z-depth-1'
                                        onClick={() => {
                                            validateRegistration(firstName, lastName,
                                                email, confirmEmail, password, confirmPassword)}
                                        }
                                    >
                                        Signup
                                    </MDBBtn>
                                </div>
                            </MDBRow>
                            <MDBCol md='12'>
                                <p className='font-small white-text d-flex justify-content-end'>
                                    Have an account?
                                    <a href='' className='green-text ml-1 font-weight-bold'>
                                        Log in
                                    </a>
                                </p>
                            </MDBCol>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

// import React, { useState, useEffect } from "react";
// import {Form} from 'react-bootstrap';
// import axios from "axios";
// import {
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBBtn,
//     MDBCard,
//     MDBInput,
// } from "mdbreact";

// import "./registrationPage.css";

// const sendRegistrationRequest = (firstName, lastName, email, password) =>
//     axios
//         .post(`http://34.107.102.252:3000/user/`, {
//             firstName,
//             lastName,
//             email,
//             password,
//         })
//         .then((res) => {
//             console.log(res);
//             console.log(res.data);
//         });

// const validateRegistration = (
//     userFirstName,
//     userLastName,
//     userEmail,
//     confirmMail,
//     userPassword,
//     confirmPass
// ) => {
//     console.log(
//         userFirstName,
//         userLastName,
//         userEmail,
//         confirmMail,
//         userPassword,
//         confirmPass
//     );
//     if (userPassword.length < 8) {
//         alert("Please user a password with a length more than 8");
//     }
//     if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail)) {
//         alert("Please Enter a valid Email");
//     }
//     if (userEmail !== confirmMail) {
//         alert("Emails do not match");
//     }
//     if (userPassword !== confirmPass) {
//         alert("Password does not match");
//     } else {
//         sendRegistrationRequest(
//             userFirstName,
//             userLastName,
//             userEmail,
//             userPassword
//         ).then((req) => alert("Registration Successful"));
//     }
// };
// export default function RegistrationPage() {
//     const [email, setEmail] = useState("");
//     const [confirmEmail, setConfirmEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");

//     // useEffect(() => {
//     //     console.log("Ya lahweee" + JSON.stringify(email));
//     // });

//     return (
//           <MDBCard
//             className="card-image signupForm w-75"
//             style={{
//               backgroundImage:
//                 "url(https://previews.123rf.com/images/microone/microone1812/microone181200305/112856531-sketch-vintage-books-seamless-pattern-or-background-sketch-education-seamless-book-for-school-litera.jpg)",
//               width: "40rem",
//               border: "solid grey 2px",

//             }}
//           >
//             <div className="text-white rgba-stylish-strong pb-2 px-2 z-depth-4 h-35 ">
//               <div className="text-center">
//                 <h3 className="white-text mb-2 mt-2 font-weight-bold">
//                   <strong>SIGN</strong>
//                   <a href="" className="green-text font-weight-bold">
//                     <strong> UP</strong>
//                   </a>
//                 </h3>
//               </div>
//               <MDBInput
//                 label="Your email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 group
//                 type="email"
//                 validate
//                 labelClass="white-text"
//               />
//               <MDBInput
//                 label="Confirm email"
//                 onChange={(e) => {
//                   setConfirmEmail(e.target.value);
//                 }}
//                 group
//                 type="email"
//                 validate
//                 pattern={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
//                 labelClass="white-text"
//                 className="m-0"
//               />
//               <MDBRow>
//                   <MDBCol>
//                   <MDBInput
//                 label="Your password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//                 group
//                 type="password"
//                 validate
//                 labelClass="white-text"
//                 className="md-col-4 m-0"
                
//               />
//                   </MDBCol>
//                 <MDBCol>

//                 <MDBInput
//                     label="Confirm email"
//                     onChange={(e) => {
//                         setConfirmEmail(e.target.value);
//                     }}
//                     group
//                     type="email"
//                     validate
//                     pattern={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
//                     labelClass="white-text"
//                     className="m-0"
//                 />
//                 <MDBRow>
//                     <MDBCol>
//                         <MDBInput
//                             label="Your password"
//                             onChange={(e) => {
//                                 setPassword(e.target.value);
//                             }}
//                             group
//                             type="password"
//                             validate
//                             labelClass="white-text"
//                             className="md-col-4 m-0"

//                         />
//                     </MDBCol>
//                     <MDBCol>
//                         <MDBInput
//                             label="Confirm password"
//                             onChange={(e) => {
//                                 setConfirmPassword(e.target.value);
//                             }}
//                             group
//                             type="password"
//                             validate
//                             labelClass="white-text"
//                             className="md-col-4 m-0"
//                         />
//                     </MDBCol>

//                 </MDBRow>

//                 <MDBRow>
//                     <MDBCol>
//                         <MDBInput
//                             label="Your First Name"
//                             onChange={(e) => {
//                                 setFirstName(e.target.value);
//                             }}
//                             group
//                             type="text"
//                             validate
//                             labelClass="white-text"
//                         />
//                     </MDBCol>
//                     <MDBCol>
//                         <MDBInput
//                             label="Your Last Name"
//                             onChange={(e) => {
//                                 setLastName(e.target.value);
//                             }}
//                             group
//                             type="text"
//                             validate
//                             labelClass="white-text"
//                         />
//                     </MDBCol>


//                 </MDBRow>


//                 <MDBRow className="d-flex align-items-center mb-0">
//                     <div className="text-center mb-0 col-md-12">
//                         <MDBBtn
//                             color="success"
//                             rounded
//                             type="button"
//                             className="btn-block z-depth-1"
//                             onClick={() => {
//                                 validateRegistration(
//                                     firstName,
//                                     lastName,
//                                     email,
//                                     confirmEmail,
//                                     password,
//                                     confirmPassword
//                                 );
//                             }}
//                         >
//                             Signup
//                         </MDBBtn>
//                     </div>
//                 </MDBRow>
//             </div>
//         </MDBCard>


//     );
// }

import React, { useState, useEffect } from "react";
import {Form} from 'react-bootstrap';
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "mdbreact";

import "./registrationPage.css";

const sendRegistrationRequest = (firstName, lastName, email, password) =>
  axios
    .post(`http://34.107.102.252:3000/user/`, {
      firstName,
      lastName,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });

const validateRegistration = (
  userFirstName,
  userLastName,
  userEmail,
  confirmMail,
  userPassword,
  confirmPass
) => {
  console.log(
    userFirstName,
    userLastName,
    userEmail,
    confirmMail,
    userPassword,
    confirmPass
  );
  if (userPassword.length < 8) {
    alert("Please user a password with a length more than 8");
  } if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail)) {
    alert("Please Enter a valid Email");
  } if (userEmail !== confirmMail) {
    alert("Emails do not match");
  }
  if (userPassword !== confirmPass) {
    alert("Password does not match");
  } else {
    sendRegistrationRequest(
      userFirstName,
      userLastName,
      userEmail,
      userPassword
    ).then((req) => alert("Registration Successful"));
  }
};
export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // useEffect(() => {
  //     console.log("Ya lahweee" + JSON.stringify(email));
  // });

  return (
      
          <MDBCard
            className="card-image signupForm w-75"
            style={{
              backgroundImage:
                "url(https://previews.123rf.com/images/microone/microone1812/microone181200305/112856531-sketch-vintage-books-seamless-pattern-or-background-sketch-education-seamless-book-for-school-litera.jpg)",
              width: "40rem",
              border: "solid grey 2px",

            }}
          >
            <div className="text-white rgba-stylish-strong pb-2 px-2 z-depth-4 h-35 ">
              <div className="text-center">
                <h3 className="white-text mb-2 mt-2 font-weight-bold">
                  <strong>SIGN</strong>
                  <a href="" className="green-text font-weight-bold">
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                onChange={(e) => setEmail(e.target.value)}
                group
                type="email"
                validate
                labelClass="white-text"
              />
              <MDBInput
                label="Confirm email"
                onChange={(e) => {
                  setConfirmEmail(e.target.value);
                }}
                group
                type="email"
                validate
                pattern={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
                labelClass="white-text"
                className="m-0"
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
                className="md-col-4 m-0"
                
              />
                  </MDBCol>
                <MDBCol>
                <MDBInput
                label="Confirm password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                group
                type="password"
                validate
                labelClass="white-text"
                className="md-col-4 m-0"
              />
                </MDBCol>
            
              </MDBRow>

              <MDBRow>
                  <MDBCol>
                  <MDBInput
                label="Your First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                group
                type="text"
                validate
                labelClass="white-text"
              />
                  </MDBCol>
              <MDBCol>
              <MDBInput
                label="Your Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                group
                type="text"
                validate
                labelClass="white-text"
              />
              </MDBCol>


              </MDBRow>
            
             

              <MDBRow className="d-flex align-items-center mb-0">
                <div className="text-center mb-0 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                    onClick={() => {
                      validateRegistration(
                        firstName,
                        lastName,
                        email,
                        confirmEmail,
                        password,
                        confirmPassword
                      );
                    }}
                  >
                    Signup
                  </MDBBtn>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        

  );
}
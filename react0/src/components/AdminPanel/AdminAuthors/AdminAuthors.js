/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Table, Modal, Button, Form, Col, Row, Image } from "react-bootstrap";
import "../AdminCatogries/AdminCatogries.css";
import { Icon, Input } from "semantic-ui-react";
import axios from "axios";
import MyLoader from "../Loader";

function MyVerticallyCenteredModal(props) {
  const [author, setAuthor] = useState({});
  const [edit, setEdit] = useState(false);

  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (props.edit === true) {
      setEdit(true);
      setAuthor(props.author);
      setfName(props.author.firstName);
      setLName(props.author.lastName);
      setDateofBirth(props.author.DateofBirth);
      setBio(props.author.bio);
    } else {
      setAuthor({});
      setEdit(false);
    }
  }, [props.edit, props.author]);

  const submitValue = (evt) => {
    evt.preventDefault();
    const frmdetails = new FormData();
    frmdetails.append("firstName", fName);
    frmdetails.append("lastName", lName);
    frmdetails.append("DateofBirth", dateofBirth);
    frmdetails.append("authorImage", file);
    frmdetails.append("bio", bio);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        JWT: JSON.parse(sessionStorage.getItem("user")).token,
      },
    };

    if (edit) {
      axios
        .patch(
          `http://34.107.102.252:3000/author/${author._id}`,
          frmdetails,
          config
        )
        .then((res) => {
          props.getAuthorsHandler();
          console.log(res);
          console.log(res.data);
        });
    } else {
      axios
        .post("http://34.107.102.252:3000/author/", frmdetails, config)
        .then((res) => {
          props.getAuthorsHandler();
          console.log(res);
          console.log(res.data);
        });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Author" : "ADD Author"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitValue}>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                size="lg"
                type="text"
                placeholder={edit ? author.firstName : "Enter First Name"}
                onChange={(e) => setfName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                size="lg"
                type="text"
                placeholder={edit ? author.lastName : "Enter Last Name"}
                onChange={(e) => setLName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Date Of Birth
            </Form.Label>
            <Col sm="10">
              <Form.Control
                size="lg"
                type="text"
                placeholder={edit ? author.DateofBirth : "yyyy-mm-dd"}
                onChange={(e) => setDateofBirth(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Bio
            </Form.Label>
            <Col sm="10">
              <Form.Control
                size="lg"
                as="textarea"
                rows="3"
                placeholder={edit ? author.bio : "Author bio"}
                onChange={(e) => setBio(e.target.value)}
              />
            </Col>
          </Form.Group>

          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input
                type="file"
                file="myImage"
                isValid
                onChange={(e) => {
                  console.log({ file: e.target.files[0] });
                  setFile(e.target.files[0]);
                }}
              />
              <Form.File.Label data-browse="Select Image">
                {file ? file.name : "Upload Your Image"}
              </Form.File.Label>
            </Form.File>
          </div>

          <Button onClick={props.onHide}>Close</Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              props.onHide();
            }}
          >
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

function AdminAuthors() {
  const [author, setAuthor] = useState({});
  const [edit, setEdit] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  function getAuthors() {
    setLoader(true);
    axios
      .get("http://34.107.102.252:3000/author")
      .then((res) => {
        setAuthors(res.data);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAuthors();
  }, []);

  function deleteComponent(x) {
    axios
      .delete(`http://34.107.102.252:3000/author/${x._id}`, {
        headers: {
          JWT: JSON.parse(sessionStorage.getItem("user")).token,
        },
      })
      .then((res) => {
        getAuthors();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function editComponent(author) {
    setEdit(true);
    setAuthor(author);
    setModalShow(true);
  }
  return (
    <div>
      <a
        className="iconadjustment"
        onClick={() => {
          setEdit(false);
          setAuthor({});
          setModalShow(true);
        }}
      >
        <Icon name="add circle test" />
      </a>
      {loader ? (
        <MyLoader />
      ) : (
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
            {authors.map((author) => (
              <tr>
                <td className="text-danger" style={{ fontSize: 15 }}>
                  {author._id}
                </td>
                <td>
                  <Image
                    src={`http://34.107.102.252:3000/${author.authorImage}`}
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td style={{ fontSize: 15 }}>{author.firstName}</td>
                <td style={{ fontSize: 15 }}>{author.lastName}</td>
                <td style={{ fontSize: 15 }}>{author.DateofBirth}</td>
                <td>
                  {" "}
                  <a
                    onClick={() => {
                      editComponent(author);
                    }}
                  >
                    <Icon name="edit" />
                  </a>
                  <a
                    onClick={() => {
                      deleteComponent(author);
                    }}
                  >
                    <Icon name="delete" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        author={author}
        edit={edit}
        getAuthorsHandler={getAuthors}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminAuthors;

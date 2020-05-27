/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Form, Col, Row } from "react-bootstrap";
import "./AdminCatogries.css";
import { Icon, Loader } from "semantic-ui-react";
import axios from "axios";
import MyLoader from "../Loader";

function MyVerticallyCenteredModal(props) {
  const [edit, setEdit] = useState(false);

  const [catName, setCatName] = useState("");
  const [catSummary, setCatSummary] = useState("");

  const [catBackup, setCatBackup] = useState("");
  useEffect(() => {
    if (props.cat !== {} && catBackup !== props.cat.categoryName) {
      setCatName(props.cat.categoryName);
      setCatBackup(props.cat.categoryName);
      setCatSummary(props.cat.summary);
      setEdit(true);
    }
  }, [props.cat]);

  const submitValue = (evt) => {
    evt.preventDefault();

    const frmdetails = {
      categoryName: catName,
      summary:catSummary
    };
    console.log(frmdetails);
    const config = {
      headers: {
        JWT:JSON.parse(sessionStorage.getItem("user")).token      },
    };

    if (edit) {
      if (catName === "") {
        alert("Empty value");
      } else if (catName === catBackup) {
        alert("Now change same old name");
      } else {
        axios
          .patch(
            `http://34.107.102.252:3000/category/${props.cat._id}`,
            frmdetails,
            config
          )
          .then((res) => {
            console.log("Patchhhhhhh: ", res.data);
            props.getCategoriesHandler();
          });
      }
    } else {
      axios
        .post("http://34.107.102.252:3000/category/", frmdetails, config)
        .then((res) => {
          props.getCategoriesHandler();
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
          ADD Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitValue}>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Category Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                size="lg"
                type="text"
                placeholder={catName}
                onChange={(e) => {
                  console.log(catName);
                  setCatName(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Category Summary
            </Form.Label>
            <Col sm="10">
              <Form.Control
                size="lg"
                type="text"
                placeholder={catSummary}
                onChange={(e) => {
                  console.log(catName);
                  setCatSummary(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
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

function AdminCatogries() {
  const [modalShow, setModalShow] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [cat, setCat] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
      setLoader(true)
    axios
      .get("http://34.107.102.252:3000/category/")
      .then((res) => {
        setCategories(res.data);
        setTimeout(()=>setLoader(false),1500)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteComponent(x) {
    console.log(x._id);
    axios
      .delete(`http://34.107.102.252:3000/category/${x._id}`, {
        headers: {
          JWT:JSON.parse(sessionStorage.getItem("user")).token},
      })
      .then((res) => {
        getCategories();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function editComponent(x) {}
  return (
    <div>
      <a
        className="iconadjustment"
        onClick={() => {
          setCat({});
          setModalShow(true);
        }}
      >
        <Icon name="add circle test" />
      </a>
      {loader ? (
        <MyLoader />
      ) : (
        <Table responsive="lg" striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr>
                <td>{category._id}</td>
                <td>{category.categoryName}</td>
                <td>
                  {/* <a  onClick={
                                ()=> { editComponent(category)}    
                            }> */}

                  <a
                    onClick={() => {
                      setCat(category);
                      setModalShow(true);
                    }}
                  >
                    <Icon name="edit" />
                  </a>
                  <a
                    onClick={() => {
                      deleteComponent(category);
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
        cat={cat}
        getCategoriesHandler={getCategories}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminCatogries;

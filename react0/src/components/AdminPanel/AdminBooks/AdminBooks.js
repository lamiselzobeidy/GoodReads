/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Form, Col, Row, Image } from "react-bootstrap";
import "../AdminCatogries/AdminCatogries.css";
import { Icon } from "semantic-ui-react";
import axios from "axios";
import { Redirect } from "react-router";

function MyVerticallyCenteredModal(props) {
  const [book, setBook] = useState({});

  const [bookName, setBookName] = useState("");
  const [athName, setAthName] = useState("");
  // const [athFullName, setAthFullName] = useState('');
  const [catName, setCatName] = useState("");
  const [brief, setBrief] = useState("");

  const [file, setFile] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const [edit, setEdit] = useState(false);

  const [listingCategories, setListingCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (props.edit === true) {
      setEdit(true);
      setBook(props.book);
      setBookName(props.book.bookName);
      setAthName(props.book.authorId.authorName);
      setCatName(props.book.catId.categoryName);
      setBrief(props.book.brief);
    } else {
      console.log("fffffffffffffffffffffffffffffffff");
      setBook({});
      setEdit(false);
    }
  }, [props.edit, props.book]);

  useEffect(() => {
    axios
      .get("http://34.107.102.252:3000/category/")
      .then((res) => {
        setListingCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://34.107.102.252:3000/author/")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitValue = (evt) => {
    evt.preventDefault();
    const frmdetails = new FormData();
    //  frmdetails = {
    //     'bookName': bookName,
    //     'authorId': athName,
    //     'catId': catName,
    //     'coverImage': file,
    //     'brief' : "asdasdsa"
    // }

    const newArray = listingCategories.filter(cat => cat.categoryName === catName ? true : false)
    if (newArray.length > 0) {
        frmdetails.append("catId", newArray[0]._id);

    }

    frmdetails.append("bookName", bookName);
    frmdetails.append("authorId", athName);
    frmdetails.append("coverImage", file);
    frmdetails.append("brief", brief);

    console.log(catName);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        JWT:JSON.parse(sessionStorage.getItem("user")).token,
      },
    };

    // Display the key/value pairs
    for (var pair of frmdetails.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    axios.post('http://34.107.102.252:3000/book/', frmdetails, config)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setRedirect(true)

        }).catch(err=>{
            console.error(err);
            
        })
  };

  if (redirect) {
    return <Redirect push to="/"></Redirect>;
  } else {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Edit Book" : "ADD Book"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitValue}>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Book Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={edit ? book.bookName : "Enter Book Name ..."}
                  onChange={(e)=>setBookName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control as="select" onChange={(e)=>setCatName(e.target.value)}>
                  {listingCategories.map((category) => (
                    <option
                      selected={
                        edit &&
                        book.catId.categoryName === category.categoryName
                          ? true
                          : false
                      }
                    >
                      {category.categoryName}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Author
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    var index = e.target.selectedIndex;
                    var optionElement = e.target.childNodes[index];
                    var option = optionElement.getAttribute("data-id");
                    setAthName(option);
                  }}
                >
                  {authors.map((author) => (
                    <option
                      selected={
                        edit && book.authorId.authorName === author.authorName
                          ? true
                          : false
                      }
                      data-id={author._id}
                    >
                      {author.firstName + " " + author.lastName}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword" rows="3">
              <Form.Label column sm="2">
                Brief
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows="3"                  
                  placeholder={edit ? book.brief :"Enter Book Brief ..."}
                  onChange={e=>setBrief(e.target.value)}
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
                  Upload Your Image
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
}

function AdminBooks() {
  const [book, setBook] = useState({});
  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  function getBooks() {
    axios
      .get("http://34.107.102.252:3000/book")
      .then((res) => {
        setBooks(res.data);
        console.log("books:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  function deleteComponent(x) {
    console.log(x._id);
    axios
      .delete(`http://34.107.102.252:3000/book/${x._id}`, {
        headers: {
          JWT:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1OTAwMzY2Nzl9.c9cdu1Ph1pEWNyV14PKroCBs7Cf_6gz9p-UOLleXupc",
        },
      })
      .then((res) => {
        getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function editComponent(book) {
    setEdit(true);
    setBook(book);
    setModalShow(true);
  }

  return (
    <div class="md-12">
      <a
        className="iconadjustment"
        onClick={() => {
          setEdit(false);
          setModalShow(true);
        }}
      >
        <Icon name="add circle test" />
      </a>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>CatogoryId</th>
            <th>AuthorId</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody catName="text-center">
          {books.map((book) => (
            <tr>
              <td className="text-danger text-center" style={{ fontSize: 15 }}>
                {book._id}
              </td>
              <td className="md-col-2">
                <Image 
                  src={`http://34.107.102.252:3000/${book.coverImageName}`}
                  thumbnail
                />{" "}
              </td>
              <td className="text-primary" style={{ fontSize: 15 }}>
                {book.bookName}
              </td>
              <td className="text-danger" style={{ fontSize: 15 }}>
                {book.catId._id}
              </td>
              <td className="text-danger" style={{ fontSize: 15 }}>
                {book.authorId._id}
              </td>
              <td>
                <a
                  onClick={() => {
                    editComponent(book);
                  }}
                >
                  <Icon name="edit" />
                </a>
                <a
                  onClick={() => {
                    deleteComponent(book);
                  }}
                >
                  <Icon name="delete" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        edit={edit}
        book={book}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminBooks;

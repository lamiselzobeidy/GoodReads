/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react';
import { Table, Modal, Button, Form, Col, Row } from 'react-bootstrap'
import './AdminCatogries.css'
import { Icon } from 'semantic-ui-react';
import axios from 'axios'

function MyVerticallyCenteredModal(props) {
    const [edit,setEdit]=useState(false)

    const [catName, setCatName] = useState('');
    const [catBackup, setCatBackup] = useState('');
    useEffect(() => {

        
        if(props.cat !== {}&& catBackup !==props.cat.categoryName)
        {
            console.log("gowa el if",props.cat);
            
            setCatName(props.cat.categoryName)
            setCatBackup(props.cat.categoryName)
            setEdit(true)
        }

    },)


    const submitValue = (evt) => {
        evt.preventDefault();

        const frmdetails = {
            'categoryName' : catName ,
        }
        console.log(frmdetails);
        const config = {
            headers: {
                'JWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1OTAwMzY2Nzl9.c9cdu1Ph1pEWNyV14PKroCBs7Cf_6gz9p-UOLleXupc'
            }
        };

        if (edit) {
            if(catName===""){
                alert("Empty value")
            }else if (catName===catBackup) {
                alert("Now change same old name")
                
            }else{

                axios.patch(`http://34.107.102.252:3000/category/${props.cat._id}`, frmdetails ,config )
                .then(res => {
                  console.log("Patchhhhhhh: ",res.data);
                })
            }
            
        }else{

            axios.post('http://34.107.102.252:3000/category/', frmdetails ,config )
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        }


    }

    

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
                            <Form.Control size="lg" type="text" placeholder={catName } onChange={e => {
                            console.log(catName);
                             setCatName(e.target.value)}}/>
                        </Col>
                    </Form.Group>
                    <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" type="submit" onClick={()=>{props.onHide()}}>
                    Save Changes
          </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}


function AdminCatogries() {
    const [modalShow, setModalShow] = React.useState(false);
    const [cat,setCat]= useState({})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    function getCategories(){
        axios.get("http://34.107.102.252:3000/category/")
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }

   
    function deleteComponent(x) {
        console.log(x._id);
        axios.delete(`http://34.107.102.252:3000/category/${x._id}`,{
            headers: {
              JWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybWFpbCI6InJvb3RAbWFpbC5jb20iLCJpYXQiOjE1ODk0ODk5NjV9.b2vOq5SY79KgxDbHUusM5czvuUD9JsAZe-VKIW6_Z5g"
            }}).then(res=>{
               getCategories()          
            })
            .catch(err=>{
                console.log(err);             
            })
        
    }
    function editComponent (x){

    }
    return (
        <div>
            <a className="iconadjustment" onClick={() => {setCat({}); setModalShow(true) ; }}>
                <Icon name='add circle test' />
            </a>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        categories.map(category=>(
                            <tr>
                            <td>{category._id}</td>
                            <td>{category.categoryName}</td>
                            <td>
                            {/* <a  onClick={
                                ()=> { editComponent(category)}    
                            }> */}

                            <a onClick={() => {
                                
                                setCat(category)
                                setModalShow(true);
                            
                            
                            
                            }}>

                                <Icon name='edit' />
                            </a>
                            <a  onClick={
                                ()=> { deleteComponent(category) }    
                            }>
                                <Icon name='delete' />
                            </a>
                            </td>
    
                        </tr>
                        ))
                 }

                </tbody>
            </Table>
            <MyVerticallyCenteredModal
                show={modalShow}
                cat = {cat}
                onHide={() => setModalShow(false)}
            />

        </div>
    );
}

export default AdminCatogries;
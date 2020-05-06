import React from 'react'
import {Navbar,Button , Nav , Form,FormControl} from 'react-bootstrap';




const MainNavBar = () => {
    return (       
  <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
      <img
        src="https://p7.hiclipart.com/preview/142/76/939/symbol-yellow-orange-logo-ibooks.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Authors</Nav.Link>
      <Nav.Link href="#pricing">Categories</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      {/* <Button variant="outline-info">Search</Button> */}
      {/* <Form.Label variant="outline-info" className="mx-3">User name</Form.Label>
      <img
        src="https://p7.hiclipart.com/preview/142/76/939/symbol-yellow-orange-logo-ibooks.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top ml-2"
        alt="React Bootstrap logo"
      /> */}
    </Form>
  </Navbar>
       

    );

}

export default MainNavBar
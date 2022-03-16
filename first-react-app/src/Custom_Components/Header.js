import React from "react";
import {Container, Nav, Navbar, Form, FormControl, NavDropdown, Button} from "react-bootstrap";


export default function Header(props) {
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className="nav-title">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/" disabled>Link</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
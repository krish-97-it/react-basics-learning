import React from "react";
import {Container, Nav, Navbar, Form, FormControl, NavDropdown, Button} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import Home from './Home.js'; //Custom HomePage Component
import About from "./About.js";
import Contact from "./Contact.js";
import Shop from "./Shop.js";
import Author from "./Blogs/Author.js";
import Posts from "./Blogs/Posts.js";
import Games from "./Blogs/Games.js";

export default function Header(props) {
    return(
        <Router>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/Home"} className="nav-title">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to={"/Home"} active>Home</Nav.Link>
                        <NavDropdown title="Blogs" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={"/Posts"}>Posts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Author"}>Author</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={"/Games"}>Games</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/Shop"}>Shop</Nav.Link>
                        <Nav.Link as={Link} to={"/Contact"}>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
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
        
        <Routes>
            <Route path="" element={<Navigate to="/home" />} />
            <Route exact path='/home' element={< Home />}></Route>
            <Route exact path='/posts' element={< Posts />}></Route>
            <Route exact path='/author' element={< Author />}></Route>
            <Route exact path='/games' element={< Games gname="Playing With Text"/>}></Route>
            <Route exact path='/shop' element={< Shop />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact phno="8888777723" emailid="myreactapp@gmail.com" />}></Route>
        </Routes>
        </Router>
    );
}
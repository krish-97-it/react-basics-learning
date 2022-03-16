import React from "react";
import { Col, Container, Row} from "react-bootstrap";

export default function Footer(){
  return (
        <div className="custom-footer">
            <Container fluid className="text-center text-md-left font-small pt-4 mt-4" color="blue">
                <Row>
                    <Col md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </Col>
                    <Col md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="/">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="/">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="/">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="/">Link 4</a>
                        </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="/"> myReactApp.com </a>
                </Container>
            </div>
      </div>
  );
}
import React from "react";
import "./styled.css";
import { Button, Col, Row, Card, Form, Container, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <>
            <div className="margem_top">
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;
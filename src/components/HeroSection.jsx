import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HeroSection() {
    return (
        <Container className="hero-section-container">
            <Row className="h-100">
                <Col xs="12" md="8" className="d-flex flex-column justify-content-center text-start px-4">
                    <div className="mx-4">
                        <h1>Phorography Portfolio and My projects</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className="btns-wrapper px-4 d-flex align-items-center">
                        <a href="/">Read My Blog</a>
                        <Button variant="light">Learn More</Button>
                    </div>
                </Col>
                <Col xs="12" md="4">
                    <div className="img-wrapper"></div>
                </Col>
            </Row>
        </Container>
    );
};
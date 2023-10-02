import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const AboutSection = () => {
    return (
        <Container className='about-section-wrapper'>
            <Row>
                <Col xs={12} md={6} className='d-flex flex-column justify-centent-center'>
                    <h1>About</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                    <a href="/">Learn More</a>
                </Col>
                <Col xs={12} md={6} className='about-img-wrapper'>
                    <img src='/images/walter-mity.jpg' alt="hand"/>
                </Col>
            </Row>
        </Container>
    )
}

import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { FooterManu } from './FooterManu';
import { ContactForm } from './ContactForm';

export const Footer = () => {
    return (
        <Container className='footer-section'>
            <Row>
                <div className='contact-img'>
                    <img src='/images/camera_hand.png' alt="footer img">
                    </img>
                </div>
            </Row>
            <Row className='my-3'>
                <Col xs={12} md={6}>
                    <ContactForm />
                </Col>
                <Col xs={12} md={6}>
                    <FooterManu />
                </Col>
            </Row>
        </Container>
    )
}

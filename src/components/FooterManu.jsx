import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const FooterManu = () => {
  return (
    <Container className='footer'>
        <Row>
            <Col>
                <h3>Company</h3>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Collection</a></li>
                    <li><a href="/">Our Client Stories</a></li>
                </ul>
            </Col>
            <Col>
                <h3>Support</h3>
                <ul>
                    <li><a href="/">Email</a></li>
                    <li><a href="/">Contact me</a></li>
                    <li><a href="/">Help & Q/A</a></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

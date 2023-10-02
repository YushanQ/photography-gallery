import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from "framer-motion"

export const InformationSection = () => {

    const sectionVariants = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        hidden: { y: 100, opacity: 0 }
    }
    return (
        <Container className='information-section'>
            <Row>
                <Col lg="6" className='fs-7 px-3 foot-wight-bold'>
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible">
                        <p>
                            <span>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </span>
                        </p>
                    </motion.div>
                </Col>
                <Col lg="6" className="px-3">
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        </p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

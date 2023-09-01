import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import BackAnimation from '../Home/BackAnimation';
import SocialLists from './SocialLists';
import { MdWhatsapp } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";



export default function ContactUs() {
    const [expand, updateExpanded] = useState(false);

    function getFormData(e) {
        e.prenentDefault()
    }

    return (
        <section>
            <Container fluid className="news-section" id="news">
                <BackAnimation />
                <h4 className='section-title'>connect with me</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12} className='news-section-contant'>
                        <Row style={{ justifyContent: "center" }}>
                            <Col md={4} className="news-content-title">
                                <div className='news-contact-info'>
                                    <Col className='email'>
                                        <span><MdEmail size={32} /> <a href="mailto:anup88.2010@gmail.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                            anup88.2010@gmail.com
                                        </a></span>
                                    </Col>
                                    <Col className='email'>
                                        <span><MdEmail size={32} /> <a href="mailto:anup88.2010@yahoo.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                            anup88.2010@yahoo.com
                                        </a></span>
                                    </Col>
                                    <Col className='phone'>
                                        <span><MdCall size={32} />
                                            +91-973-246-2897
                                        </span>
                                    </Col>
                                    <Col className='phone'>
                                        <span><MdCall size={32} />
                                            +91-629-744-4060
                                        </span>
                                    </Col>
                                    <Col className='skype'>
                                        <span><MdWhatsapp size={32} /> <a href="#" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                            +91-973-246-2897
                                        </a></span>
                                    </Col>
                                    <Col className='contact-social'>
                                        <Row className="social">
                                            <Col className='social-list'>
                                                <h4>Get In Touch</h4>
                                                <SocialLists />
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </Col>
                            <Col md={4} className="news-content-field">
                                <h4>For Project Inquiries (Demo Form)</h4>
                                <Form onSubmit={getFormData}>
                                    <Form.Group className="mb-3" controlId="contactname">
                                        <Form.Control type="text" placeholder="Your Name*" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactemail">
                                        <Form.Control type="text" placeholder="Work Email* [name@example.com]" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactph">
                                        <Form.Control type="text" placeholder="Mobile Number*" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactcpmpany">
                                        <Form.Control type="text" placeholder="Company Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="contactcpmpany">
                                        <Form.Control className="msg" as="textarea" rows={3} placeholder="Your Message / requirements" />
                                    </Form.Group>
                                    {/* <Button className="glow-on-hover btn btn-default btn-oval btn-xl" variant="info">Send Message</Button> */}
                                    <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="" onClick={() => updateExpanded(false)}>Send Message  <FaArrowRight size={12} color='bisque' /></Link>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Anupam from './assets/anu.png';
import Resume from './assets/AnupamMallick_Resume.pdf';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';




export default function HeroSection() {
    const [expand, updateExpanded] = useState(false);

    return (
        <section>
            <Container fluid className='hero-solution-content' id="hero">
                <Row className="hero-solution justify-content-md-center">
                    <Col md={12} className='hero-solution-main'>
                        <Row>
                            <Col md={12} className='hero-solution hero-solution-shape'>
                                <Row>
                                    <Col md={7} className="hero-text-animation">
                                        <Row className="justify-content-md-center">
                                            <Col className='hero-text justify-content-md-center'>
                                                <div className='hero-text-content'>
                                                    <div className='hero-text-name'>
                                                        <h2 className="text-ani">Hello, I’m Anupam Mallick.</h2>
                                                    </div>
                                                    <div className='hero-text-content-des'>
                                                        <h3 className='hero-text-developer'>Web Developer | FrontEnd Developer | Full Stack Developer</h3>
                                                    </div>
                                                    <div className='hero-text-content-but'>
                                                        <Row>
                                                            <Col md={2} className='hero-social'>
                                                                <div class="line-container">
                                                                    <div class='dot-line'></div>
                                                                    <div className='dot-round-main'>
                                                                        <div class="dot-round glow-on-hover"><a href="https://www.facebook.com/anupam.mallick.148" target="_blank"><FaFacebookF size={25} /></a></div>
                                                                        <div class="dot-round glow-on-hover"><a href="https://www.instagram.com/anupam.chattan/" target="_blank"><FaInstagram size={25} /></a></div>
                                                                        <div class="dot-round glow-on-hover"><a href="https://www.linkedin.com/in/anupam-mallick-83a3b1120/" target="_blank"><FaLinkedinIn size={25} /></a></div>
                                                                        <div class="dot-round glow-on-hover"><a href="https://twitter.com/AnupamMallick2" target="_blank"><FaTwitter size={25} /></a></div>
                                                                        <div class="dot-round glow-on-hover"><a href="https://github.com/anupammallick88" target="_blank"><FaGithub size={25} /></a></div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col md={10} className='hero-contact-button'>
                                                                <Link className='glow-on-hover btn btn-default btn-oval btn-xl' to={Resume} download="Anupam_Mallick_CV" onClick={() => updateExpanded(false)} target='_blank'>Download CV <FaArrowRight size={12} color='bisque'></FaArrowRight></Link>
                                                                <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/contact" onClick={() => updateExpanded(false)}>Hire Me <FaArrowRight size={12} color='bisque'></FaArrowRight></Link>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={5} className="hero-animation">
                                        <div class="circle-container">
                                            <img className="frontimg" src={Anupam} style={{ height: "80vh" }} />
                                            <div class="dot"><a href="https://www.facebook.com/anupam.mallick.148" target="_blank"><FaFacebookF size={25} /></a></div>
                                            <div class="dot"><a href="https://www.instagram.com/anupam.chattan/" target="_blank"><FaInstagram size={25} /></a></div>
                                            <div class="dot"><a href="https://www.linkedin.com/in/anupam-mallick-83a3b1120/" target="_blank"><FaLinkedinIn size={25} /></a></div>
                                            <div class="dot"><a href="https://twitter.com/AnupamMallick2" target="_blank"><FaTwitter size={25} /></a></div>
                                            <div class="dot"><a href="https://github.com/anupammallick88" target="_blank"><FaGithub size={25} /></a></div>
                                            {/* <div class="dot"><a href="https://www.facebook.com/mesdtechnology" target="_blank"><FaYoutube size={20} /></a></div> */}
                                            {/* <div class="dot"><a href="https://www.facebook.com/mesdtechnology" target="_blank"><FaInstagram size={20} /></a></div> */}
                                        </div>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                    <div className='hero-shape hero-bottom-shape'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Row>
            </Container>
        </section>
    );

}
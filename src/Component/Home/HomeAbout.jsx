import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackAnimation from './BackAnimation';
// import Slide from 'react-reveal/Slide';


export default function HomeAbout() {
    const [expand, updateExpanded] = useState(false);
    const [focus, setFocus] = React.useState(false);
    const [isVisible, setVisible] = React.useState(false);
    return (
        <section>
            <Container fluid className="home-about-section" id="home-about">
                <BackAnimation />
                <h4 className='section-title'>Who I am</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={8} className='home-about-content'>
                        <h3>Hello! I’m Anupam Mallick. Web Developer|Frondend Developer|Backend Developer from Kolkata, India.</h3>
                        <Col className='home-about-para'>
                            <p>"Hello and welcome! I'm Anupam, a dedicated Web Developer and Frontend Enthusiast. Over 9 years of IT Exprience and 3 years of Frontend & Backend developer experiences using HTML, CSS, Javascript, Angular, React, Ionic, Laravel, Mysql, and knowledgeable on Node.Js, MongoBD, AWS and basic of AI. With a keen eye for design and a passion for clean code, I specialize in bringing digital ideas to life.<br></br>
                            In my portfolio, you'll find a collection of projects that highlight my journey in crafting seamless user experiences and functional, visually appealing websites. From turning intricate designs into responsive interfaces to optimizing for speed and performance, I thrive on the challenges that each line of code presents.<br></br>
                            Join me in exploring the fusion of creativity and technology, where every click and scroll is a testament to my commitment to excellence. Whether you're here to collaborate, connect, or simply curious, I invite you to witness the art and science of web development.<br></br>
                            Thank you for dropping by, and I hope my portfolio sparks inspiration and showcases the possibilities we can create together in the digital realm."</p>
                        </Col>
                        <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/about" onClick={() => updateExpanded(false)}>About Us <FaArrowRight size={12} color='bisque'></FaArrowRight></Link>
                    </Col>
                    {/* <Col md={2} className='home-about-counter'>
                        <Slide left cascade>
                        <Col className='home-counts1'>
                            <h3 className=''>Languages</h3>
                        </Col>

                        <Col className='home-counts2'>
                            <h3 className=''>Projects Completed</h3>
                        </Col>
                        <Col className='home-counts3'>

                            <h3 className=''>Tasks Completed</h3>
                        </Col>

                        </Slide>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
}
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import BackAnimation from '../Home/BackAnimation';


export default function ChooseMe() {
    const [expand, updateExpanded] = useState(false);

    const webcontant = [
        { id: 1, name: 'Skillful Development', para: 'I bring strong expertise in web development and frontend technologies, ensuring your portfolio is built with precision, reliability, and adherence to industry best practices.', link: '#' },
        { id: 2, name: 'Engaging User Experiences', para: 'With a keen eye for design and user experience, I craft interactive and visually appealing portfolios that captivate your audience, leaving a lasting impression.', link: '#' },
        { id: 3, name: 'Responsive Designs', para: 'Your portfolio will seamlessly adapt to different screen sizes and devices, ensuring accessibility and an optimal experience for every visitor.', link: '#' },
        { id: 4, name: 'Modern Technology Stacks', para: 'I stay up-to-date with the latest tools, libraries, and frameworks, utilizing cutting-edge technologies to create portfolios that showcase your work in a contemporary and dynamic manner.', link: '#' },
        { id: 5, name: 'Collaborative Approach', para: 'I believe collaboration fosters learning, embracing teamwork to create an environment where knowledge is shared and projects flourish.', link: '#' },
        { id: 6, name: 'Performance Optimization', para: 'Slow-loading portfolios can deter visitors. I prioritize performance optimization, ensuring swift load times and smooth interactions to keep your audience engaged.', link: '#' },
        { id: 7, name: 'Attention to Detail', para: 'From pixel-perfect layouts to seamless navigation, I pay meticulous attention to every detail, creating a polished and professional portfolio that reflects your identity.', link: '#' },
        { id: 8, name: 'Passion for Web Development', para: 'My passion for web development shines through in every project. Your portfolio won`t just be a project it`ll be a representation of my dedication to creating exceptional web experiences.', link: '#' },
        { id: 9, name: 'Continuous Learner', para: 'I embody a learning-driven mindset, constantly seeking new technologies and techniques to infuse fresh perspectives into your project.', link: '#' }
    ]

    return (
        <section>
            <Container fluid className="choose-me-container" id='choose-me'>
                <BackAnimation />
                <h4 className='section-title'>Why Choose Me</h4>
                <Row className="justify-content-md-center">
                    <Col md={10} className='choose-me-contant'>
                        <Row style={{ justifyContent: "center" }}>
                            {
                                webcontant.map((item, i) => <Col sm={4} className="choose-me-box" key={i}>
                                    <h5>{item.name}</h5>
                                    <p>{item.para}</p>
                                    <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/contact" onClick={() => updateExpanded(false)}>Learn More  <FaArrowRight size={12} color='bisque' /></Link>
                                </Col>)
                            }
                        </Row>
                        <Col md={12}>
                            <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/contact" onClick={() => updateExpanded(false)}>Let's Discuss  <FaArrowRight size={12} color='bisque' /></Link>
                        </Col>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
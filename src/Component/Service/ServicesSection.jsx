import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackAnimation from '../Home/BackAnimation';
import webdesign from './assets/web-design.svg'
import appdevelopment from './assets/app-development.svg';
import webdevelopment from './assets/web-development.svg';
import angular from './assets/angular.svg';
import laravel from './assets/laravel.svg';
import react from './assets/react-native.svg';
import nodejs from './assets/nodejs.svg';
import ionic from './assets/ionic.svg';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default function ServiceSection() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [expand, updateExpanded] = useState(false);
    const settings = { nextArrow: <SampleNextArrow />, prevArrow: <SamplePrevArrow /> };

    return (
        <section>
            <Container fluid className='business-service-content' id='service'>
                <BackAnimation />
                <h4 className='section-title'>My Services</h4>
                <Row className="justify-content-md-center">
                    <Col className='services-box-main'>
                        <Slider className='service-nav1' asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} {...settings}>
                            <div>
                                <div className='web-app-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Web <span className='d-block'>Develpoment</span></h3> <img className='service-icon' src={webdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque'></FaArrowRight>
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='mobile-app-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Mobile App <span className='d-block'>Develpoment</span></h3> <img className='service-icon' src={appdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque'></FaArrowRight>
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='uiux-desing-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>UI/UX <span className='d-block'>Web Design</span></h3> <img className='service-icon' src={webdesign} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque'></FaArrowRight>
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='dev-ops-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Web <span className='d-block'>Develpoment</span></h3> <img className='service-icon' src={webdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque'></FaArrowRight>
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='crm-web-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>Mobile App <span className='d-block'>Develpoment</span></h3> <img className='service-icon' src={appdevelopment} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque'></FaArrowRight>
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div className='data-science-service'>
                                    <Col className='service-title'>
                                        <Link className='service-link' as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <Col className='services-sub-title'>
                                                <Col className='d-flex align-items-center'>
                                                    <h3>UI/UX <span className='d-block'>Web Design</span></h3> <img className='service-icon' src={webdesign} style={{ height: "15vh" }} />
                                                </Col>
                                                <Col className='d-icon'>
                                                    <FaArrowRight size={18} color='bisque'></FaArrowRight>
                                                </Col>
                                            </Col>
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                        </Slider>

                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>I have expertise in choosing what the best solution is for your mobile app development strategy, using Ionic hybrid app developemnt. And expertise in ecommerce, edtech, booking service, streaming industries, and more.</p>
                                        <ul className='service-con-icon'>
                                            <li className='service-con-list'><img src={ionic} style={{ height: "15vh" }} /><span className='icon-text d-block'>Ionic</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>I'm create modern, interactive, and reliable user interfaces across all business domains. I work with the most modern tools and frameworks like React.js, Angular, Vue.js, and much more for designing and developing engaging, fast loading, and robust, user-friendly interfaces.</p>
                                        <ul className='service-con-icon'>
                                            <li className='service-con-list'><span className='icon-text d-block'></span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                    <p>I use state-of-the-art technologies and development practices to create custom web applications for your business. I conceptualizes and creates each application from scratch, ensuring it meets your unique business.</p>
                                        <ul className='service-con-icon'>
                                            <li className='service-con-list'><img className='web-dev-img' src={angular} style={{ height: "22vh" }} /><span className='icon-text d-block'>Angular Js</span></li>
                                            <li className='service-con-list'><img className='web-dev-img' src={laravel} style={{ height: "22vh" }} /><span className='icon-text d-block'>Laravel</span></li>
                                            <li className='service-con-list'><img className='web-dev-img' src={react} style={{ height: "22vh" }} /><span className='icon-text d-block'>React Js</span></li>
                                            <li className='service-con-list'><img className='web-dev-img' src={nodejs} style={{ height: "22vh" }} /><span className='icon-text d-block'>Node Js</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                    <p>I have expertise in choosing what the best solution is for your mobile app development strategy, using Ionic hybrid app developemnt. And expertise in ecommerce, edtech, booking service, streaming industries, and more.</p>
                                        <ul className='service-con-icon'>
                                        <li className='service-con-list'><img src={ionic} style={{ height: "15vh" }} /><span className='icon-text d-block'>Ionic</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                    <p>I'm create modern, interactive, and reliable user interfaces across all business domains. I work with the most modern tools and frameworks like React.js, Angular, Vue.js, and much more for designing and developing engaging, fast loading, and robust, user-friendly interfaces.</p>
                                        <ul className='service-con-icon'>
                                        <li className='service-con-list'><span className='icon-text d-block'></span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="justify-content-md-center">
                                    <Col md={8} className='service-slide-content'>
                                        <p>I use state-of-the-art technologies and development practices to create custom web applications for your business. I conceptualizes and creates each application from scratch, ensuring it meets your unique business.</p>
                                        <ul className='service-con-icon'>
                                        <li className='service-con-list'><img className='web-dev-img' src={angular} style={{ height: "22vh" }} /><span className='icon-text d-block'>Angular Js</span></li>
                                            <li className='service-con-list'><img className='web-dev-img' src={laravel} style={{ height: "22vh" }} /><span className='icon-text d-block'>Laravel</span></li>
                                            <li className='service-con-list'><img className='web-dev-img' src={react} style={{ height: "22vh" }} /><span className='icon-text d-block'>React Js</span></li>
                                            <li className='service-con-list'><img className='web-dev-img' src={nodejs} style={{ height: "22vh" }} /><span className='icon-text d-block'>Node Js</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>

                        </Slider>
                    </Col>
                    <Col md={10} className='service-btn'>
                        <Link className='glow-on-hover btn btn-default btn-oval btn-xl' as={Link} to="/service" onClick={() => updateExpanded(false)}>All Services <FaArrowRight size={12} color='bisque'></FaArrowRight></Link>
                    </Col>
                </Row>
            </Container>
        </section >
    );

}
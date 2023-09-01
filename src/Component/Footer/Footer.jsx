import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
// import SocialLists from "../SocialLists";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';



function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    const [expand, updateExpanded] = useState(false);

    return (
        <Container fluid className="footer" id="footer">
            
            <Col>
                <Row className="footercopy">
                    <Col md={4} className="footer-copywright">
                        <span className="text-copy">Made with <a href="https://www.instagram.com/anupam.chattan/" style={{ color: "red" }} target="_blank" rel="noopener noreferrer"><FaHeart /></a> at Anupam Mallick</span>
                    </Col>
                    <Col md={4} className="footer-copywright">
                        <span className="text-copy">Copyright © {year} <a href="mailto:anup88.2010@gmail.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Anupam Mallick</a></span>
                    </Col>
                    <Col md={4} className="footer-body">
                    <Link className='footer-link' as={Link} to="https://github.com/anupammallick88" onClick={() => updateExpanded(false)}><FaStar /> Give feedback</Link>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}
export default Footer;
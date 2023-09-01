import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useHref } from "react-router-dom";
import logo from "./public/anupam-logo.png";


export default function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);


    return (

        <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"} >
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                Home
                            </Nav.Link>

                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="About" id="nav-about" alignLeft>                                
                                <NavDropdown.Item as={Link} to="/about" onClick={() => updateExpanded(false)}>About Me</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/skills" onClick={() => updateExpanded(false)}>My Skills</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/experience" onClick={() => updateExpanded(false)}>Education & Experience</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/chooseme" onClick={() => updateExpanded(false)}>Why Choose Me</NavDropdown.Item>                               
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/service"
                                onClick={() => updateExpanded(false)}
                            >
                                Service
                            </Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/portfolio"
                                onClick={() => updateExpanded(false)}
                            >
                                Portfolio
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
                            >
                                Contact
                            </Nav.Link>
                        </Nav.Item>                       

                        <Nav.Item className="infobtn menu-item">
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
                            >
                                Hire Me
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export default function About() {
    const [expand, updateExpanded] = useState(false);
    const [focus, setFocus] = React.useState(false);
    const [isVisible, setVisible] = React.useState(false);

    return (
        <section>
            <Container fluid className="about-section" id="about">
                <div className="about-banner d-flex align-items-center">
                    <div className="container">
                        <div className="about-banner-content">
                            <h3>Hallo! I am Anupam, Interactive Developer based in India.</h3>
                            <div className="banner-service">
                                <div className="section-title-2">
                                    <h4>Service</h4>
                                </div>
                                <h4>UI/UX Interactive, Mobile App & </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );

}
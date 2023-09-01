import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sphere from '../../containers/Sphere';
import '../../vendor/tagcanvas.min';
import 'animate.css';
import BackAnimation from '../Home/BackAnimation';

const skills = [
    "HTML5",
    "CSS3",
    "npm",
    "Angular",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Laravel",
    "Sass",
    "Rest APi",
    "jQuery",
    "ES6",
    "AWS",
    "AJAX",
    "MySql",
    "JSON",
    "Git",
    "Bootstrap",
    "Express.js",
    "Ionic",
    "Node.js",
    "MongoBD"
];

export default function Skills() {
    const [expand, updateExpanded] = useState(false);
    const [focus, setFocus] = React.useState(false);
    const [isVisible, setVisible] = React.useState(false);
    return (
        <section>
            <Container fluid className="skill-section" id="skill">
                <BackAnimation />
                <h4 className="section-title">My Skill</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <div className="skills_content">
                        <div className="skills_main">
                            <div className="left_side">
                                <div className="skill-col">
                                    <h3>I’ve been delivering extraordinary eCommerce, Web, Mobile Development, and inspirational Design robust solutions for over 9 years!.</h3>
                                    <p><span>** Programming / Markup Languages:</span> HTML, CSS, JavaScript, TypeScript, PHP.<br></br><span>** Databases:</span> MySql, MongoBD.<br></br><span>** UI Component Libraries:</span> Bootstrap, Material-UI, Tailwind CSS. <br></br><span>** Libraries / Frameworks / Techs:</span> Angular, React.Js, Ionic, Firebase, Git, Node.js.<br></br><span>** Others:</span> AWS, Jira, VS Code.</p>                                    
                                </div>
                            </div>
                            <div className="right_side">
                                <Sphere id={'mySkills'} width={550} height={500} items={skills} />
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </section>
    );
}



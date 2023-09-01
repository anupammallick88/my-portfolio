import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectList from './ProjectList';
import Filter from '../Portfolio/Filter';
import { projects } from './projects';
import BackAnimation from '../Home/BackAnimation';




const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    };

    const filteredProjects =
        activeFilter === null
            ? projects
            : projects.filter((project) => project.category === activeFilter);



    return (
        <section>
            <Container fluid className='portfolio-filter-content' id="portfolio">
                <BackAnimation />
                <h4 className='section-title'>My Open Source Project</h4>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={10} className='project-filter-content'>
                        <div className="filter-buttons">
                            <Filter
                                label="All"
                                isActive={activeFilter === null}
                                onClick={() => handleFilterClick(null)}
                            />
                            <Filter
                                label="Angular"
                                isActive={activeFilter === "Angular"}
                                onClick={() => handleFilterClick("Angular")}
                            />
                            <Filter
                                label="React"
                                isActive={activeFilter === "React"}
                                onClick={() => handleFilterClick("React")}
                            />
                            <Filter
                                label="Laravel"
                                isActive={activeFilter === "Laravel"}
                                onClick={() => handleFilterClick("Laravel")}
                            />
                            <Filter
                                label="NodeJs"
                                isActive={activeFilter === "NodeJs"}
                                onClick={() => handleFilterClick("NodeJs")}
                            />
                            <Filter
                                label="Ionic"
                                isActive={activeFilter === "Ionic"}
                                onClick={() => handleFilterClick("Ionic")}
                            />
                            <Filter
                                label="Others"
                                isActive={activeFilter === "Others"}
                                onClick={() => handleFilterClick("Others")}
                            />
                            {/* Create more FilterButton components for each category */}
                        </div>
                        <ProjectList projects={filteredProjects} />
                    </Col>
                </Row>
            </Container>
        </section>        
    );
};

export default Portfolio;
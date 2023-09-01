import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Tab, TabContainer, TabContent, TabPane, Nav } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import BackAnimation from '../Home/BackAnimation';




export default function Experience() {
    const [expand, updateExpanded] = useState(false);
    const products = [
        {
            id: 1,
            productcode: 'one',
            productname: '2021-2023',
            productdes: 'Web Developer',
            link: '/2021-2023',
            productfetur: [{
                name: 'Organization Name: The MESD Technology',
                title: 'Roles: Web Developer',
                describe: 'Responsibility: Work with development teams and product managers to ideate application and website. Design client-side and server-side architecture. Build the front-end of applications through appealing visual design. Switch between front-end development and back-end development as required. Write effective APIs. Troubleshoot, debug and upgrade application and website. Test software to ensure responsiveness and efficiency. Build features and applications with a mobile responsive design.'
            }],
            

        },
        {
            id: 2,
            productcode: 'two',
            productname: '2019-2020',
            productdes: 'Web Developer',
            link: '/2019-2020',
            productfetur: [{
                name: 'Organization Name: Ms Web Designer',
                title: 'Roles: Web Developer',
                describe: 'Responsibility: Responsible for the development of the Shopify platform, themes, liquid programming. Develop custom-tailored Shopify themes for Shopify plus clients. Exposure to application development and extending Shopify functionalities using storefront APIs. Design UX based from our brand standard and style guide with customize new Shopify theme. Proficiency in working with various Shopify JS APIs (storefront, AJAX Cart, Sections, etc.). Implement system integrations that are crucial to our success. Implement advanced debugging techniques and usage of browser developer tools.'
            }],
           

        },
        {
            id: 3,
            productcode: 'three',
            productname: '2018-2019',
            productdes: 'Web Developer',
            link: '/2018-2019',
            productfetur: [{
                name: 'Organization Name: Colorgraphicz',
                title: 'Roles: Web Developer',
                describe: 'Responsibility: Conducting analysis of website and application requirements. Writing back-end, front-end code and building efficient PHP modules. Developing back-end portals with an optimized database. Troubleshooting application and code issues. Updating and altering application features to enhance performance. Collaborating with clients to design websites and their functions. Generating and customize WordPress themes and plugins.'
            }],
            

        },
        {
            id: 4,
            productcode: 'fore',
            productname: '2016-2018',
            productdes: 'Web Developer',
            link: '/2016-2018',
            productfetur: [{
                name: 'Organization Name: Frame Visual Production',
                title: 'Roles: Web Developer',
                describe: 'Responsibility: Collaborating with clients to design websites and their functions. Developing the front-end of the website. Planning and creating the website architecture. Managing back-end tasks like database and server integration. Generating WordPress themes and plugins. Testing and troubleshooting the website. Analyzing live website performance. Maintaining website security and compliance.'
            }],
            

        },
        {
            id: 5,
            productcode: 'five',
            productname: '2014-2016',
            productdes: 'Web Developer',
            link: '/2014-2016',
            productfetur: [{
                name: 'Organization Name: A.C.Infotech',
                title: 'Roles: Web Developer',
                describe: 'Responsibility: Write “clean”, well-designed code. Produce detailed specifications. Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality. Contribute in all phases of the development lifecycle. Develop and deploy new features to facilitate related procedures and tools if necessary.'
            }],
            

        },
        {
            id: 6,
            productcode: 'six',
            productname: '2011-2014',
            productdes: 'Trainee Engineer',
            link: '/2011-2014',
            productfetur: [{
                name: 'Organization Name: Chakraborty Consultancy Services PVT.LTD',
                title: 'Roles: Trainee Engineer',
                describe: 'Responsibility: Participate in requirements analysis. Collaborate with internal teams to produce software design and architecture. Write clean, scalable code using .NET programming languages. Test and deploy applications and systems. Revise, update, refactor and debug code. Improve existing software.'
            }],
            
        },
        {
            id: 7,
            productcode: 'seven',
            productname: '2007-2011',
            productdes: 'Graduate',
            link: '/2007-2011',
            productfetur: [{
                name: 'University Name: Netaji Subhas Open University',
                title: 'Degree: Bachelor of Computer Application (BCA)',
                describe: 'Area of Study: Computer Application'
            }],
           

        }

    ]

    return (
        <section>
            <Container fluid className='industry-exprience-content' id='exprience'>
            <BackAnimation />
                <h4 className='section-title'>my education & experience</h4>
                <Row className="justify-content-md-center">
                    <Col md={10} className='industry-exprience'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                            <Row>
                                <Col sm={3} className="tabname">
                                    <Nav variant="pills" className="flex-column">
                                        {
                                            products.map((item) => <Nav.Item>
                                                <Nav.Link className='solnav' eventKey={item.productcode}>{item.productname}</Nav.Link>
                                            </Nav.Item>)
                                        }
                                    </Nav>
                                </Col>
                                <Col sm={9} className="tabcontent">
                                    <Tab.Content>
                                        {
                                            products.map((item, index) => <Tab.Pane eventKey={item.productcode}>
                                                <Col md={12} className="industry-exprience-main" key={index}>
                                                    <Row>
                                                        <Col md={12} className="industry-exprience-col-1">
                                                            <Row>
                                                                <Col md={10} className="industry-exprience-col-content">
                                                                    <h4 className='industry-product-name'>{item.productname}</h4>
                                                                    <h3 className='industry-product-des'>{item.productdes}</h3>                                                                    
                                                                    {
                                                                        item.productfetur.map((subitem) =><ul className="solution-industry-icons"><li className="industry-icons">{subitem.name}</li><li className="industry-icons">{subitem.title}</li><li className="industry-icons">{subitem.describe}</li> </ul>)
                                                                    }                                                                   
                                                                </Col>                                                                
                                                            </Row>
                                                        </Col>                                                        
                                                    </Row>
                                                </Col>

                                            </Tab.Pane>
                                            )
                                        }
                                        
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>                    
                </Row>
            </Container>
        </section>
    );
    
}
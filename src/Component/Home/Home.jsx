import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from './HeroSection';
import HomeAbout from './HomeAbout';
import Skills from '../About/Skills';
import Exprience from '../About/Exprience';
import ServiceSection from '../Service/ServicesSection';
import ContactUs from '../Contact/ContactUs';
import Portfolio from '../Portfolio/Portfolio';
import ChooseMe from '../About/ChooseMe';




function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <HeroSection />
                <HomeAbout />
                <Skills />
                <Exprience />
                <ServiceSection />
                <Portfolio />
                <ChooseMe />
                <ContactUs />                
            </Container>
        </section>
    );
}
export default Home;
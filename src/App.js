import React, { useState, useEffect } from "react";
import './App.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import NavBar from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import About from "./Component/Home/HomeAbout";
import Skills from "./Component/About/Skills";
import Experience from "./Component/About/Exprience";
import ChooseMe from "./Component/About/ChooseMe";
import ServiceSection from "./Component/Service/ServicesSection";
import Portfolio from "./Component/Portfolio/Portfolio";
import ContactUs from "./Component/Contact/ContactUs";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/experience" exact element={<Experience />} />
          <Route path="/chooseme" exact element={<ChooseMe />} />
          <Route path="/service" exact element={<ServiceSection />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  );
}

export default App;

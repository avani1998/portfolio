import React from "react";
import "../styles/Container.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";
import Skills from "./Skills";

function Container({ isDark, setIsDark }) {
  return (
    <div className="container">
      <Router>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <About />
        <Projects />
        <Work />
        <Education />
        <Skills />
        {/* <Routes></Routes> */}
        <Footer />
      </Router>
    </div>
  );
}

export default Container;

import React from "react";
import "../styles/Container.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";
import Skills from "./Skills";

function Container() {
  return (
    <div class="container">
      {/* <Navbar /> */}
      <Router>
        <Navbar />
        <About />
        <Education />
        <Work />
        <Projects />
        <Skills />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Container;

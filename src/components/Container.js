import React from "react";
import "../styles/Container.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";
// import Skills from "./Skills";
import Publication from "./Publication";
import CurrentFocus from "./CurrentFocus";
// import PhotoWallFlex from "./PhotoWall";

function Container({ isDark, setIsDark }) {
  return (
    <div className="container">
      <Router>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <About />
        <CurrentFocus />
        <Work />
        <Projects />
        <Education />
        {/* <Skills /> */}
        <Publication />
        {/* <PhotoWallFlex /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default Container;

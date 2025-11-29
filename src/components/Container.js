import "../styles/Container.css";
import { HashRouter } from "react-router-dom";

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
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default Container;

import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ParticleComponent from "./components/ParticleComponent";

function App() {
  return (
    <div className="App">
      <Container />
      <ParticleComponent />
      {/* <Router> */}
      {/* <Navbar /> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;

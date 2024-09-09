import "./App.css";
import Container from "./components/Container";
import useLocalStorage from "use-local-storage";
// import ParticleComponent from "./components/ParticleComponent";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference); //change preference to false
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="App-container">
        <Container isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
}

export default App;

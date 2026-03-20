import "./App.css";
import Container from "./components/Container";
import useLocalStorage from "use-local-storage";
// import ParticleComponent from "./components/ParticleComponent";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    preference ? "dark" : "light"
  );
  const isDark = theme === "dark";

  return (
    <div className="App" data-theme={theme}>
      <div className="App-container">
        <Container
          isDark={isDark}
          setIsDark={(nextIsDark) => setTheme(nextIsDark ? "dark" : "light")}
        />
      </div>
    </div>
  );
}

export default App;

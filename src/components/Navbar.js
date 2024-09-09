import React from "react";
import "../styles/Navbar.css";
import ToggleButton from "@mui/material/ToggleButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Navbar({ isDark, setIsDark }) {
  const handleOpenLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="container">
      <nav>
        <button
          className="links button"
          id="github"
          onClick={() => handleOpenLink("https://github.com/avani1998")}
        >
          github
        </button>
        <button
          className="links button"
          id="likedin"
          onClick={() =>
            handleOpenLink("https://www.linkedin.com/in/avani-vaishnav/")
          }
        >
          linkedin
        </button>
        <button
          className="links button"
          id="medium"
          onClick={() => handleOpenLink("https://medium.com/@avani.vaishnav14")}
        >
          medium
        </button>
        <button
          className="links button"
          id="email"
          onClick={() => handleOpenLink("mailto:avani.vaishnav14@gmail.com")}
        >
          email
        </button>
        <button
          className="links button"
          id="resume"
          onClick={() =>
            handleOpenLink(
              "https://drive.google.com/file/d/1NojsVrIh-RIeLA3uuMmp-CFSUsgrytU4/view?usp=sharing"
            )
          }
        >
          resume
        </button>
        <ToggleButton
          value="darkmode"
          // selected={selected}
          onChange={() => setIsDark(!isDark)}
          sx={{
            backgroundColor: "var(--font-color)",
            color: "var(--background-color)",
            borderRadius: "25px",
            marginLeft: "20px",
            "&:hover": {
              backgroundColor: "var(--subheading-color)",
            },
          }}
        >
          <DarkModeIcon sx={{}} />
        </ToggleButton>
      </nav>
    </div>
  );
}

export default Navbar;

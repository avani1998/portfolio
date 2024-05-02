import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const handleOpenLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div class="container">
      <nav>
        <button
          class="links button"
          id="github"
          onClick={() => handleOpenLink("https://github.com/avani1998")}
        >
          github
        </button>
        <button
          class="links button"
          id="likedin"
          onClick={() =>
            handleOpenLink("https://www.linkedin.com/in/avani-vaishnav/")
          }
        >
          linkedin
        </button>
        <button
          class="links button"
          id="medium"
          onClick={() => handleOpenLink("https://medium.com/@avani.vaishnav14")}
        >
          medium
        </button>
        <button
          class="links button"
          id="email"
          onClick={() => handleOpenLink("mailto:avani.vaishnav14@gmail.com")}
        >
          email
        </button>
        <button
          class="links button"
          id="resume"
          onClick={() =>
            handleOpenLink(
              "https://drive.google.com/file/d/1utdcErZio1WunCrEi-n1fsOe8pO92moz/view?usp=sharing"
            )
          }
        >
          resume
        </button>
      </nav>
    </div>
  );
}

export default Navbar;

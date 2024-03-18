import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div class="container">
      <nav>
        <button class="links button" id="github">
          github
        </button>
        <button class="links button" id="likedin">
          linkedin
        </button>
        <button class="links button" id="medium">
          medium
        </button>
        <button class="links button" id="email">
          email
        </button>
        <button class="links button" id="resume">
          resume
        </button>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div class="background">
      <h3 class="intro">
        Hi
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width="40px"
          frameBorder="0"
          class="giphy-embed"
        />
        &nbsp;I'm
      </h3>
      <h1 class="name">Avani Vaishnav</h1>
      <blockquote class="quote-intro">
        <p>
          I'm a Computer Engineering graduate student at New York University,
          actively pursuing my Master's degree with an expected graduation in
          May 2024. I'm especially passionate about the weaving of analytical,
          rigorous code together with meaningful real-world narratives.
        </p>
        <p>
          I am excited to embark on a new journey as a Data Analyst Intern at
          Massachusetts General Hospital, where I will leverage my analytical
          skills to assess signals, identify discrepancies, and contribute to
          effective problem-solving. Proficient in programming languages and
          tools such as Python, Java, C, and more, I am eager to contribute my
          skills to innovative projects and connect with like-minded individuals
          in the tech community.
        </p>
      </blockquote>
    </div>
  );
}

export default About;

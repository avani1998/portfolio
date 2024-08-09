import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div class="background">
      <div class="cont">
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
            A passionate Data Scientist with a Master's degree in Computer
            Engineering from New York University. With a proven track record in
            developing data-driven solutions, I thrive in environments that
            challenge my analytical and technical skills.
          </p>
          <p>
            {/* I am excited to embark on a new journey as a Data Analyst Intern at
          Massachusetts General Hospital, where I will leverage my analytical
          skills to assess signals, identify discrepancies, and contribute to
          effective problem-solving. Proficient in programming languages and
          tools such as Python, Java, C, and more, I am eager to contribute my
          skills to innovative projects and connect with like-minded individuals
          in the tech community. */}
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    <section class="education">
      <h3 class="subheading">Education</h3>

      <div class="education-item">
        <div>
          <p class="e-heading1">Master's of Science in Computer Engineering</p>
          <p class="e-heading1-subheading">New York University</p>
        </div>
        <div class="right-allign">
          <div class="date">Exp. May 2024</div>
          <div class="city">New York City</div>
        </div>
      </div>

      <div class="education-item">
        <div>
          <p class="e-heading1">
            Bachelor's of Engineering in Information Science and Engineering
          </p>
          <p class="e-heading1-subheading">Ramaiah Institute of Technology</p>
        </div>
        <div class="right-allign">
          <div class="date">June 2021</div>
          <div class="city">Bangalore</div>
        </div>
      </div>
    </section>
  );
}

export default Education;

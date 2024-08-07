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
          <div class="courses">
            <p class="e-heading1">Courses</p>
            <ul class="courses-list">
              <li>CS-GY 6513: Big Data</li>
              <li>ECE-GY 7123: Deep Learning</li>
              <li>TECH-GB 9383: R Programming For Data</li>
              <li>ECE-GY 6143: Machine Learning </li>
              <li>ECE-GY 9163: Machine Learning for Cybersecurity</li>
              <li>ECE-GY 6123: Image and Video Processing</li>
              <li>ECE-GY 6353: Internet Architecture and Protocols</li>
              <li>ECE-GY 6383: Network Security</li>
            </ul>
          </div>
        </div>
        <div class="right-allign">
          <div class="date">May 2024</div>
          <div class="city">New York City</div>
        </div>
      </div>

      <div class="education-item">
        <div>
          <p class="e-heading1">
            Bachelor's of Engineering in Information Science and Engineering
          </p>
          <p class="e-heading1-subheading">Ramaiah Institute of Technology</p>
          <div class="courses">
            <p class="e-heading1">Courses</p>
            <ul class="courses-list">
              <li>CS-GY 6513: Big Data</li>
              <li>ECE-GY 7123: Deep Learning</li>
              <li>TECH-GB 9383: R Programming For Data</li>
              <li>ECE-GY 6143: Machine Learning </li>
              <li>ECE-GY 9163: Machine Learning for Cybersecurity</li>
              <li>ECE-GY 6123: Image and Video Processing</li>
              <li>ECE-GY 6353: Internet Architecture and Protocols</li>
              <li>ECE-GY 6383: Network Security</li>
            </ul>
          </div>
        </div>
        <div class="right-allign">
          <div class="date">June 2021</div>
          {/* <div class="city">Bangalore</div> */}
        </div>
      </div>
    </section>
  );
}

export default Education;

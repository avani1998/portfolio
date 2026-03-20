import "../styles/Education.css";

function Education() {
  // const bd = ["RDBMS", "Docker", "SQL", "MapReduce", "Hadoop", "Apache Spark"];
  // const r_p = ["R", "Packages", "ggplot"];
  // const dl = ["CNN", "RNN", "YOLO"];
  return (
    <section class="education">
      <h3 class="subheading">Education</h3>

      <div class="education-item">
        <div>
          <img src="/portfolio/nyu.png" alt="New York University" width="115" />
        </div>
        <div>
          <p class="e-heading1">Master's of Science in Computer Engineering</p>
          <p class="e-heading1-subheading">New York University</p>
        </div>
        <div class="right-allign">
          <div class="date">May 2024</div>
          <div class="city">New York City</div>
        </div>
      </div>
      {/* <div class="courses">
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
      </div> */}

      <div class="education-item">
        <div>
          <img
            src="/portfolio/ramaiah.png"
            alt="Ramaiah Institute of Technology"
            width="100"
          />
        </div>
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
      {/* <div class="courses">
        <p class="e-heading1">Courses</p>
        <ul class="courses-list">
          <li>IS54: Database Management Systems</li>
          <li>ISEE1 Data Science</li>
          <li>IS31: Statistics</li>
          <li>ISED2: Cloud Computing</li>
          <li>IS33: Data Structures</li>
          <li>IS71: Data Mining</li>
          <li>IS63: Java and J2EE</li>
        </ul>
      </div> */}
    </section>
  );
}

export default Education;

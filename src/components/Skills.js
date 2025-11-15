import React from "react";
import "../styles/Skills.css";

function Skills() {
  // const languages = [
  //   "Python",
  //   "R",
  //   "Java",
  //   "C",
  //   "JavaScript",
  //   "HTML/CSS",
  //   "Docker",
  //   "Git",
  // ];
  // const ml = [
  //   "Pandas",
  //   "scikit-learn",
  //   "NumPy",
  //   "XGBoost",
  //   "SHAP",
  //   "PyTorch",
  //   "TensorFlow",
  //   "Keras",
  // ];
  // const ds = [
  //   "Seaborn",
  //   "Matplotlib",
  //   "Statsmodels",
  //   "SciPy",
  //   "Plotly",
  //   "Geopandas",
  //   "ggplot2",
  //   "OpenCV",
  // ];
  // const fl = [
  //   "NodeJS",
  //   "ReactJS",
  //   "Plotly",
  //   "Geopandas",
  //   "PyTorch",
  //   "TensorFlow",
  //   "AWS",
  // ];
  // const db = ["SQL", "PostgreSQL", "MongoDB", "PLSQL", "PostgreSQL"];
  // const bi = ["Tableau", "Power BI (DAX)", "Adobe Analytics"];
  // const other = [
  //   "Exploratory Analysis",
  //   "Data Cleaning",
  //   "Data Aggregation",
  //   "Data Visualization",
  //   "Dashboarding",
  //   "Data Wrangling",
  //   "Agil Framework",
  // ];

  return (
    <section>
      <h3 class="subheading">Skills</h3>
      <div>
        <p class="s-heading">Programming Languages and Tools</p>
        <p class="s-subheading">
          Python, R, Java, C, JavaScript, HTML/CSS, Docker, Git
        </p>
        {/* <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "-10px",
          }}
        >
          {languages.map((tags, index) => (
            <Chip
              key={tags}
              label={tags}
              size="small"
              sx={{
                backgroundColor: "rgb(247, 246, 243)",
                borderRadius: "12px",
                marginRight: "10px",
                height: "30px",
                fontSize: "0.9 rem",
                color: " rgb(55, 53, 47)",
              }}
            />
          ))}
        </Box> */}
      </div>

      <div>
        <p class="s-heading">Machine Learning Stack</p>
        <p class="s-subheading">
          Pandas, scikit-learn, NumPy, XGBoost, SHAP, PyTorch, TensorFlow, Keras
        </p>
      </div>

      <div>
        <p class="s-heading">Data Science Stack</p>
        <p class="s-subheading">
          Seaborn, Matplotlib, Statsmodels, SciPy, Plotly, Geopandas, ggplot2,
          OpenCV
        </p>
      </div>

      <div>
        <p class="s-heading">Frameworks and Libraries</p>
        <p class="s-subheading">
          NodeJS, ReactJS, Plotly, Geopandas, PyTorch, TensorFlow, AWS
        </p>
      </div>

      <div>
        <p class="s-heading">Database Engines</p>
        <p class="s-subheading">SQL, PostgreSQL, MongoDB, PLSQL, Snowflake</p>
      </div>

      <div>
        <p class="s-heading">Business Intelligence Tools</p>
        <p class="s-subheading">Tableau, Power BI (DAX), Adobe Analytics</p>
      </div>

      <div>
        <p class="s-heading">Microsoft Excel Skills</p>
        <p class="s-subheading">
          SUM, IF, VLOOKUP, DATE and TEXT functions,PivotTables, Macros, Charts
        </p>
      </div>

      <div>
        <p class="s-heading">Other Skills</p>
        <p class="s-subheading">
          Exploratory Analysis, Data Visualization, Dashboarding, Data
          Wrangling, Agile
        </p>
      </div>
    </section>
  );
}

export default Skills;

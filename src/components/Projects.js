import React from "react";
import "../styles/Headings.css";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/map.png",
    title: "Interrilato: Exploring Data Relationships",
    description:
      "This project analyzes socioeconomic factors like literacy rates, poverty rates, unemployment rates, and crime contributions across Indian states and union territories to uncover patterns and insights, aiding in understanding regional socioeconomic dynamics. ",
    tags: ["Python", "GeoSpatial"],
    link: "https://github.com/avani1998/Interrilato/tree/main",
  },
  {
    image: "/airbnb.png",
    title: "Airbnb Data Analysis",
    description:
      "This project, conducted on Google Colab, analyzes a dataset focusing on Airbnb listings. Key steps include data cleaning, visualization, hypothesis testing, and K-Means clustering of GPS locations.",
    tags: ["Python", "EDA"],
    link: "https://github.com/avani1998/Airbnb-Data-Analysis",
  },
  {
    image: "/website.png",
    title: "Portfolio",
    description: "My perosnal website",
    tags: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    image: "/chess.png",
    title: "Chess Insights: Big Data Analytics and Visualization",
    description:
      "Engineered a big data chess project leveraging Apache Airflow, Spark, AWS, and Docker to integrate data from chess.com APIs and .pgn files. Resulted in a scalable interactive web app featuring real-time visualizations and providing comprehensive insights into player statistics and game progressions.",
    tags: ["Python", "Airflow", "AWS", "Spark", "Docker", "API"],
    link: "",
  },
];
function Projects() {
  return (
    <section>
      <h3 class="subheading">Projects</h3>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <React.Fragment>
            <Grid item xs={12} s={3} md={6} l={3} key={project.id}>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </section>
  );
}

export default Projects;

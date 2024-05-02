import React from "react";
import "../styles/Headings.css";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/map.png",
    title: "Interrilato",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    tags: ["React", "Javascript", "CSS"],
  },
  {
    image: "/airbnb.png",
    title: "Airbnb Data Analysis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. fermentum orci. Donec scelerisque lectus et est dapibus suscipit. Donec volutpat scelerisque ex,",
    tags: ["Python"],
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
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </section>
  );
}

export default Projects;

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
    tags: ["Python", "GeoSpatial Data", "Spatial Analysis"],
    link: "https://github.com/avani1998/Interrilato/tree/main",
  },
  {
    image: "/airbnb.png",
    title: "Airbnb Data Analysis",
    description:
      "This project analyzes Airbnb listings. Key steps include data cleaning, visualization, hypothesis testing, and K-Means clustering of GPS locations.",
    tags: ["Python", "EDA", "Clustering", "Hypothesis Testing"],
    link: "https://github.com/avani1998/Airbnb-Data-Analysis",
  },
  {
    image: "/backdoor.png",
    title: "Backdoor Attacks in Neural Networks: Pruning Defenses Explored",
    description:
      "Explored the impact of backdoor attacks on deep neural networks (DNNs) and implemented a pruning-based defense using Python, TensorFlow, and Keras. The project focuses on identifying and removing inactive neurons triggered by adversarial data, enhancing model security without significantly compromising performance.",
    tags: [
      "Python",
      "Machine Learning",
      "DNN",
      "Neural Networks",
      "TensorFlow",
      "Keras",
    ],
    link: "https://github.com/avani1998/backdoor-attacks",
  },
  {
    image: "/chess.png",
    title: "Chess Insights: Big Data Analytics and Visualization",
    description:
      "Engineered a big data chess project leveraging Apache Airflow, Spark, AWS, and Docker to integrate data from chess.com APIs and .pgn files. Resulted in a scalable interactive web app featuring real-time visualizations and providing comprehensive insights into player statistics and game progressions.",
    tags: ["Python", "Airflow", "AWS", "Apache Spark", "Docker", "API"],
    link: "",
  },
  {
    image: "/ivp.png",
    title: "Image and Video Processing",
    description:
      "Implemented advanced image and video processing techniques, including 2D convolution for noise reduction and edge detection, multi-resolution image representation using pyramid and wavelet transforms, and feature-based image stitching. Developed algorithms for contrast enhancement, geometric transformations, and video motion estimation, utilizing Python for practical applications in image registration and video stabilization.",
    tags: [
      "Python",
      "CNN",
      "Image Processing",
      "Segmentation",
      "Machine Learning",
    ],
    link: "https://github.com/avani1998/image-and-video-processing/tree/main",
  },
  {
    image: "/r_programming.png",
    title: "R Programming: Basic To Advanced",
    description:
      "This repository is a collection of R Markdown files covering key topics in R programming, including data imports, descriptive statistics, and data visualization using ggplot2. It also features examples of condition controls, loops, and custom functions to handle various data analysis tasks.",
    tags: ["R", "Data Cleaning"],
    link: "https://github.com/avani1998/r-programming-basic-to-advanced",
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

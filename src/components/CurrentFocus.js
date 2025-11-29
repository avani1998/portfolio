import React from "react";
import "../styles/Headings.css";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const focus = [
  {
    image: "/portfolio/philips.jpg",
    title: "Cloud Modernization for Cardiology Informatics",
    description:
      "Beyond my core role at Philips, leading a strategic cross-functional initiative to migrate clinical imaging data from on-premise MS SQL Server to a cloud-native AWS RDS solution. Spearheading database analysis, schema transformation, and benchmarking of PostgreSQL vs. Aurora to ensure long-term scalability, reliability, and cost efficiency.",
    tags: [
      "Database Migration",
      "AWS",
      "Database Design",
      "SQL",
      "PostgreSQL",
      "Schema Transformation",
    ],
  },
  {
    image: "/portfolio/dvs.jpg",
    title: "Mentee, Mentorship Program Data Visualization Society",
    description:
      "Selected for a 10-week mentorship program focused on building narrative-driven visualizations. Learning and applying tools such as Flourish, and ArcGIS under expert guidance. Developing a data journalism project that communicates insights through interactive storytelling.",
    tags: [
      "D3.js",
      "ArcGIS",
      "Highcharts",
      "Flourish",
      "Data Storytelling",
      "Data Journalism",
    ],
  },
];
function CurrentFocus() {
  return (
    <section>
      <h3 class="subheading">Current Focus</h3>
      <Grid container spacing={4}>
        {focus.map((focus) => (
          <React.Fragment>
            <Grid item xs={12} s={3} md={6} l={3} key={focus.id}>
              <ProjectCard
                image={focus.image}
                title={focus.title}
                description={focus.description}
                tags={focus.tags}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </section>
  );
}

export default CurrentFocus;

import React from "react";
import "../styles/Headings.css";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const focus = [
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
  {
    image: "/portfolio/philips_blue.png",
    title: "Cloud Engineer 2",
    description:
      "Building a reliable cloud data pipeline and improving how our cloud infrastructure runs behind the scenes. I work on making our infrastructure more efficient and stable that supports our PACS.",
    tags: ["AWS", "CI/CD", "Data Pipeline", "Dashboarding", "FinOps"],
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

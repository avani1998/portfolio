import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TagChips from "../components/TagChip";
import "../styles/Work.css";
import "../styles/Headings.css";

function Work() {
  const cloud_philips = [
    "AWS",
    "Python",
    "CI/CD",
    "Terraform",
    "Data Pipeline",
    "Quicksight",
    "AWS Glue",
    "AWS Athena",
    "FinOps",
  ];
  const cdawf = ["Excel", "Typeform", "Tableau"];
  const mgb = ["Python", "SQL", "AWS", "Healthcare Data Analysis", "Tableau"];
  const nyu = ["Excel", "Python", "Web Scraping"];
  const monumint = [
    "Python",
    "Javascript",
    "ReactJS",
    "NodeJS",
    "CSS",
    "Solana",
    "Blockchain data",
    "API",
    "Postman",
    "HTML",
  ];
  const philips = [
    "Python",
    "Classification",
    "Pipeline",
    "Data QA",
    "Neural Networks",
    "Healthcare Data Analysis",
    "CI/CD",
  ];

  return (
    <section>
      <h3 class="subheading">Work Experience</h3>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        style={{ padding: "6px 0px" }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
            <TimelineConnector
              style={{ backgroundColor: "var(--font-color)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Philips</p>
                <p class="w-heading1-subheading">Cloud Engineer Ⅱ</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">March 2025 - Present</p>
                <p class="w-city">Bangalore</p>
              </div>
            </div>
            <ul className="work-description">
              <p>
                At the Radiology Informatics at Philips, I design and implement
                scalable AWS-based solutions to bring transparency, efficiency,
                and intelligence to our cloud ecosystem.
              </p>
              <p>
                Currently, I’m leading the development of a centralized cost
                intelligence pipeline that aggregates data from 45+ AWS accounts
                across business units. Using S3, Glue, Athena, and QuickSight,
                I’ve built automated ETL and visualization workflows that help
                teams explore spend patterns, identify optimization
                opportunities, and make informed architectural decisions.
              </p>
            </ul>
            <TagChips tags={cloud_philips} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
            <TimelineConnector
              style={{ backgroundColor: "var(--font-color)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">CDAWF</p>
                <p class="w-heading1-subheading">Data Analyst</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Nov 2024 - March 2025</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <p>
                I led the end-to-end data collection and analysis for multiple
                community programs and initiatives, where I transforming survey
                responses and engagement metrics into actionable insights.
              </p>
              <p>
                Using Tableau, I built interactive dashboards to monitor key
                public health and wellbeing indicators, helping the team refine
                outreach strategies and optimize program design.
              </p>
            </ul>
            <TagChips tags={cdawf} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
            <TimelineConnector
              style={{ backgroundColor: "var(--font-color)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">
                  Massachusetts General Hospital - Mass General Brigham
                </p>
                <p class="w-heading1-subheading">Jr. Data Scientist</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Jan 2024 - May 2024</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <p>
                Designed a predictive analytics workflow using logistic
                regression and random forest models to identify the factors
                influencing patient readmissions.
              </p>
              <p>
                With SQL, stored procedures, and Amazon Redshift, I transformed
                and analyzed 7M+ health records, then built Tableau dashboards
                to surface trends and risks. The final solution improved
                cross-team decision-making, strengthened compliance, and
                contributed to a 15% decrease in readmission rates.
              </p>
            </ul>
            <TagChips tags={mgb} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
            <TimelineConnector
              style={{ backgroundColor: "var(--font-color)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">
                  ECE Research Center (New York University)
                </p>
                <p class="w-heading1-subheading">
                  Data Analysis Graduate Assistant
                </p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Sept 2023 - Dec 2023</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Optimized operations by cutting manual effort by 90% by
                automating data collection and processing via web scraping.
              </li>
              <li>
                Organized raw data into Excel for efficient use and accurate
                representation, facilitating effective communication.
              </li>
            </ul>
            <TagChips tags={nyu} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
            <TimelineConnector
              style={{ backgroundColor: "var(--font-color)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Monumint</p>
                <p class="w-heading1-subheading">Data Analyst</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">March 2021 - June 2023</p>
                <p class="w-city"></p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Analysed 10,000 Ethereum NFT sales transactions to extract
                insights on user behavior and transaction patterns.
              </li>
              <li>
                Implemented data parsing techniques to process ERC1155 token
                data, increasing token support on the website by 50%.
              </li>
              <li>
                Collaborated with stakeholders to gather data requirements and
                transform them into actionable insights, enhancing
                decision-making processes.
              </li>
            </ul>
            <TagChips tags={monumint} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Philips Research</p>
                <p class="w-heading1-subheading">Data Science Intern</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Jun 2021 - Aug 2021</p>
                <p class="w-city"></p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Performed data validation, profiling, auditing, and data
                cleansing activities to ensure data quality.
              </li>
              <li>
                Reduced manual annotation by 89% by utilizing YOLO-v3 to detect
                and annotate 60k images in medical dataset.
              </li>
              <li>
                Established hybrid pipeline for detection & classification of
                ultrasound images increasing accuracy from 67% to 72.4%.
              </li>
            </ul>
            <TagChips tags={philips} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default Work;

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
  const cdawf = ["Excel", "Tableau"];
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
    "Neural Network",
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
        {/* <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "var(--font-color)" }} />
            <TimelineConnector
              style={{ backgroundColor: "var(--font-color)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Information is Beautiful Awards (IIB)</p>
                <p class="w-heading1-subheading">Volunteer</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Dec 2024 - Present</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <li></li>
            </ul>
          </TimelineContent>
        </TimelineItem> */}

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
                <p class="w-date">Nov 2024 - Present</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Conducted data collection and analysis to assess program impact,
                social media engagement, and outreach strategies, driving a 25%
                increase in community engagement.
              </li>
              <li>
                Developed dashboards in Tableau to track key mental health
                advocacy metrics, enabling data-driven decision-making.
              </li>
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
              <li>
                Achieved 15% reduction in patient readmission rates through the
                development of predictive models using logistic regression and
                random forest algorithms, enhancing patient care quality for
                over 20,000 customers.
              </li>
              <li>
                Developed interactive Tableau dashboards to visualize patient
                readmission patterns and identify key contributing factors
              </li>
              <li>
                Constructed SQL queries and developed stored procedures to
                extract and transform data for analysis and reporting.
              </li>
              <li>
                Enhanced data-driven decision-making by 29% through the
                efficient analysis of 7 million healthcare records using Amazon
                Redshift, resulting in actionable insights
              </li>
              <li>
                Collaborated with cross-functional teams to develop reports and
                track patient data, ensuring compliance with healthcare
                regulations and improving data accuracy and accessibility.
              </li>
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

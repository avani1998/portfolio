import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import "../styles/Work.css";

function Work() {
  return (
    <section>
      <h3 class="w-subheading">Work Experience</h3>
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
            <TimelineDot style={{ backgroundColor: "rgb(55, 53, 47)" }} />
            <TimelineConnector style={{ backgroundColor: "rgb(55, 53, 47)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Mass General Brigham</p>
                <p class="w-heading1-subheading">Data Analyst</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Jan 2024- Present</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Utilized strong analytical skills to assess signals and identify
                discrepancies, contributing to effective problem-solving and
                decision-making.
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "rgb(55, 53, 47)" }} />
            <TimelineConnector style={{ backgroundColor: "rgb(55, 53, 47)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">
                  ECE Research Center (New York University)
                </p>
                <p class="w-heading1-subheading">Graduate Assistant</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Sept 2023 - Dec 2023</p>
                <p class="w-city">New York City</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Conducted web-scraping on multiple cybersecurity conference
                websites to extract author names, emails, and affiliations
              </li>
              <li>
                Managed HotCRP paper review platform and maintained the CSAW
                website.
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "rgb(55, 53, 47)" }} />
            <TimelineConnector style={{ backgroundColor: "rgb(55, 53, 47)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Monumint</p>
                <p class="w-heading1-subheading">Full-Stack Intern</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Jan 2022 - Jun 2023</p>
                <p class="w-city">Bangalore, India</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Developed and implemented Ethereum-based NFT art sales system,
                generating 10,000 transactions in the first month.
              </li>
              <li>
                Implemented a Merkle Tree-based feature to drive the creation of
                dynamic whitelists for conducting pre-sales.
              </li>
              <li>
                Optimized gas usage with ERC721A, enabling cost-effective NFT
                collection creation for artists.
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "rgb(55, 53, 47)" }} />
            <TimelineConnector style={{ backgroundColor: "rgb(55, 53, 47)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">TechMachinery Labs</p>
                <p class="w-heading1-subheading">Full-Stack Intern</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Mar 2021 - Jul 2021</p>
                <p class="w-city">Bangalore, India</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Developed and implemented a robust feature to display the
                complete trading history of an NFT, utilizing data from Opensea
                and rarible via REST API integration, resulting in a 60%
                increase in user engagement.
              </li>
              <li>
                Implemented necessary changes to support parsing of ERC1155
                tokens,expanding the scope of supported tokens by 50%.
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "rgb(55, 53, 47)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div class="work-item">
              <div>
                <p class="w-heading1">Philips Research</p>
                <p class="w-heading1-subheading">Intern</p>
              </div>
              <div class="w-right-allign">
                <p class="w-date">Jun 2021 - Aug 2021</p>
                <p class="w-city">Bangalore, India</p>
              </div>
            </div>
            <ul className="work-description">
              <li>
                Utilized YOLO-v3 to detect and annotate 60k images in a medical
                dataset, reducing need for manual annotation by 70%.
              </li>
              <li>
                Implemented ResNet-50 neural network to classify annotated and
                cropped images.
              </li>
              <li>
                Set up hybrid pipeline for detection and classification of
                ultrasound images increasing accuracy from 67% to 72.4%.
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default Work;

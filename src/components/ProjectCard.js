import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import tagColors from "../constants/tagColors";

const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        // background: "rgb(247, 246, 243)",
        boxShadow: "none",
        margin: "auto",
        margin: "5px",
        backgroundColor: "var(--background-color)",
        color: "var(--font-color)",
        "&:hover": {
          boxShadow: "0 4px 10px 0 var(--shadow-color)",
          transform: "scale(1.02)",
          background: "var(--description-color)",
          borderRadius: "15px",
        },
      }}
    >
      <CardActionArea href={link} target="_blank">
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Cholopleth Map"
        />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              padding: "-10px",
            }}
          >
            {tags.map((tag, index) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: tagColors[tag],
                  borderRadius: "16px",
                  marginRight: "8px",
                  marginBottom: "5px",
                  height: "21px",
                  fontSize: "0.8rem",
                  color: " rgb(55, 53, 47)", //No change
                  fontWeight: "var(--chip-font-weight)",
                }}
              />
            ))}
          </Box>
          <Typography
            variant="body2"
            color="var(--font-color)"
            marginTop="10px"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;

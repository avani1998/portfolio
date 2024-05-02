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

const ProjectCard = ({ image, title, description, tags, link }) => {
  const tagColors = {
    Python: "#DBEDDC",
    Java: "#EFDFDA",
    Javascript: "#E8DFEE",
    React: "#D4E6EE",
    CSS: "#d7e3fc",
    C: "#e2e2e2",
    Docker: "#fcf4dd",
    Postman: "#fce1e4",
    R: "#CAE7E3",
  };
  //#CCD4BF,#E7CBA9,#EEBAB2,#F5F3E7,#F5E2E4,#F7F6CF,#BEB4C5,#E5DBD9, #CAE7E3
  return (
    <Card
      sx={{
        borderRadius: "10px",
        // background: "rgb(247, 246, 243)",
        boxShadow: "none",
        margin: "auto",
        margin: "5px",
        "&:hover": {
          boxShadow: "0 4px 10px 0 rgba(0,0,0,0.10)",
          transform: "scale(1.02)",
          background: "rgb(247, 246, 243)",
          borderRadius: "0px",
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
                  borderRadius: "0px",
                  marginRight: "7px",
                  height: "15px",
                  fontSize: "0.7rem",
                  color: " rgb(55, 53, 47)",
                }}
              />
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;

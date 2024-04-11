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

const ProjectCard = ({ image, title, description, tags }) => {
  const tagColors = ["#DBEDDC", "#EFDFDA", "#E8DFEE", "#D4E6EE"];
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
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/donut.jpeg"
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
                  backgroundColor: tagColors[index % tagColors.length], // Cycle through tag colors
                  borderRadius: "0px",
                  marginRight: "7px",
                  height: "15px",
                  fontSize: "0.6rem",
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

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
                  borderRadius: "16px",
                  marginRight: "8px",
                  marginBottom: "5px",
                  height: "21px",
                  fontSize: "0.8rem",
                  color: " rgb(55, 53, 47)",
                }}
              />
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary" marginTop="10px">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;

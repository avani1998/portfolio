import React from "react";
import { Box, Chip } from "@mui/material";
import tagColors from "../constants/tagColors";

const TagChips = ({ tags }) => {
  return (
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
            height: "28px",
            fontSize: "14px",
            color: "rgb(55, 53, 47)", // No change font-color
            fontWeight: "var(--chip-font-weight)",
          }}
        />
      ))}
    </Box>
  );
};

export default TagChips;

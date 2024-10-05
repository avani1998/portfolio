import React from "react";
import { Button, Box } from "@mui/material";
import "../styles/Headings.css";
import "../styles/Publication.css";

function Publication() {
  return (
    <section className="publications">
      <h3 class="subheading">Publications</h3>
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "left" }}>
        {/* Button for Paper 1 */}
        <Button
          variant="contained"
          href="https://www.ijcaonline.org/archives/volume183/number26/vaishnav-2021-ijca-921651.pdf"
          target="_blank"
          sx={{
            backgroundColor: "var(--description-color)",
            color: "var(--font-color)",
            fontFamily: "var(--font-family)",
            fontSize: "14px",
            padding: "10px 20px",
            borderRadius: "10px",
            textTransform: "none",
            border: "5px solid transparent",
            "&:hover": {
              // boxShadow: "0 4px 10px 0 var(--shadow-color)",
              backgroundColor: "var(--primary-hover-color)",
              border: "5px solid var(--font-color)",
            },
          }}
        >
          Vaishnav, A., P. A.H., and Sheelvant, A.V. – “Crime Analysis in India
          with Interactive Visualization” , International Journal of Computer
          Applications 183.26 (2021): 31-38
        </Button>
        <Button
          variant="contained"
          href="https://link.springer.com/article/10.1007/s00521-022-07807-z"
          target="_blank"
          sx={{
            backgroundColor: "var(--description-color)",
            color: "var(--font-color)",
            fontFamily: "var(--font-family)",
            fontSize: "14px",
            padding: "10px 20px",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--primary-hover-color)",
              border: "5px solid var(--font-color)",
            },
          }}
        >
          M., P.N, Meherishi, H., Vaishnav, A., R., A.P. and Gupta,A. – “Facial
          Emotion Recognition and Encoding for the Visually Impaired”, Neural
          Computing and Applications
        </Button>
      </Box>
    </section>
  );
}

export default Publication;

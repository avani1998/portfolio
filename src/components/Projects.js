import React from "react";
import "../styles/Headings.css";
import { Link as RouterLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { CardActionArea, Stack } from "@mui/material";

function Projects() {
  return (
    <section>
      <h3 class="subheading">Projects</h3>
      <Grid container spacing={4}>
        <Grid item xs={12} s={3} md={6} l={3}>
          <Card>
            <CardActionArea component={RouterLink} to="/">
              <CardMedia
                component="img"
                height="140"
                image="/donut.jpeg"
                alt="Cholopleth Map"
              />
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                fermentum orci. Donec scelerisque lectus et est dapibus
                suscipit. Donec volutpat scelerisque ex, ut mollis mauris semper
                at. In sed est interdum, dignissim enim id, venenatis est.
                Integer vitae posuere risus, vel convallis leo. In vel justo
                erat.
                {/* <Stack direction="row" spacing={1}>
                  <Chip label="Java" />
                  <Chip label="OOPs" />
                </Stack> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} s={6} md={6} l={3}>
          <Card>
            <CardActionArea component={RouterLink} to="/">
              <CardMedia
                component="img"
                height="140"
                image="/pancake.jpeg"
                alt="Cholopleth Map"
              />
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                fermentum orci. Donec scelerisque lectus et est dapibus
                suscipit. Donec volutpat scelerisque ex, ut mollis mauris semper
                at. In sed est interdum, dignissim enim id, venenatis est.
                Integer vitae posuere risus, vel convallis leo. In vel justo
                erat.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} s={6} md={6} l={3}>
          <Card>
            <CardActionArea component={RouterLink} to="/">
              <CardMedia
                component="img"
                height="140"
                image="/chocolate.jpg"
                alt="Cholopleth Map"
              />
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                fermentum orci. Donec scelerisque lectus et est dapibus
                suscipit. Donec volutpat scelerisque ex, ut mollis mauris semper
                at. In sed est interdum, dignissim enim id, venenatis est.
                Integer vitae posuere risus, vel convallis leo. In vel justo
                erat.
                <Stack direction="row" spacing={1}>
                  <Chip label="Java" />
                  <Chip label="OOPs" />
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} s={6} md={6} l={3}>
          <Card>
            <CardActionArea component={RouterLink} to="/">
              <CardMedia
                component="img"
                height="140"
                image="/pie.jpeg"
                alt="Cholopleth Map"
              />
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                fermentum orci. Donec scelerisque lectus et est dapibus
                suscipit. Donec volutpat scelerisque ex, ut mollis mauris semper
                at. In sed est interdum, dignissim enim id, venenatis est.
                Integer vitae posuere risus, vel convallis leo. In vel justo
                erat.
                <Stack direction="row" spacing={1}>
                  <Chip label="Java" />
                  <Chip label="OOPs" />
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}

export default Projects;

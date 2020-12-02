import React from "react";
import { Card, CardActionArea, Grid, Typography } from "@material-ui/core";

const SingleGrid = ({ item }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Card>
        <Typography>{item.label}</Typography>
        <Typography>{item.URL}</Typography>
      </Card>
    </Grid>
  );
};

export default SingleGrid;

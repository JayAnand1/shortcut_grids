import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SingleGrid from "./SingleGrid";
import { TodayOutlined } from "@material-ui/icons";

const Body = ({ inputURLList }) => {
  return (
    <Grid container spacing={2} direction="row" alignItems="stretch">
      {inputURLList.map((item, index) => (
        <SingleGrid item={item} />
      ))}
    </Grid>
  );
};

export default Body;

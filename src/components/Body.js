import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SingleGrid from "./SingleGrid";
import FavouriteCard from "./FavouriteCard";
import { Favorite, TodayOutlined } from "@material-ui/icons";

const Body = (props) => {

  return (
    <Grid container spacing={2} direction="row" alignItems="stretch">
      {props.favouriteCards.map((item) => (

        <FavouriteCard item={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default Body;

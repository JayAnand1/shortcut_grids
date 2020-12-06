import React from "react";
import { Grid } from "@material-ui/core";
import FavouriteCard from "./FavouriteCard";

const Body = (props) => {

  return (
    <Grid container spacing={1} direction="row" alignItems="stretch">
      {props.favouriteCards.map((item) => (

        <FavouriteCard item={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default Body;

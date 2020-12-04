import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const SingleGrid = ({ item }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <CardActionArea href={item.URL}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar>{item.label[0].toUpperCase()}</Avatar>
              </Grid>
              <Grid item>
                <Typography>{item.label}</Typography>
                <Typography variant="caption">{item.URL}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleGrid;

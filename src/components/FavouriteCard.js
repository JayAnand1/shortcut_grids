import React, { useState, Component } from "react";
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
import Favicon from "react-favicon";

class FavouriteCard extends Component {


    state = {
        label: this.props.item.label,
        url: this.props.item.url,
        // icon: '',
        // colour: '',
    }

    // style={{ width: 32, height: 32 }} src={this.state.url + "/favicon.ico"}
    render() {
        return (
            <Grid item xs={12} sm={4} md={3}>
                <Card>
                    <CardActionArea href={this.state.url}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar >{this.state.label[0].toUpperCase()}</Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography>{this.state.label}</Typography>
                                    <Typography variant="caption">{this.state.url}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Grid >);
    }
}

export default FavouriteCard;
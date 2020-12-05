import React, { useState, Component } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    IconButton
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Favicon from "react-favicon";
import { HighlightOff } from "@material-ui/icons";


class FavouriteCard extends Component {


    state = {
        id: this.props.item.id,
        label: this.props.item.label,
        url: this.props.item.url,
        // icon: '',
        colour: this.props.item.colour,
    }

    // style={{ width: 32, height: 32 }} src={this.state.url + "/favicon.ico"}
    render() {
        return (
            <Grid item xs={12} sm={4} md={3}>
                <Card style={{ backgroundColor: this.state.colour }}>
                    <CardHeader action={<IconButton style={{ color: "white" }} onClick={() => this.props.onDelete(this.state.id)}><HighlightOff /></IconButton>}></CardHeader>
                    <CardActionArea href={this.state.url}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar >{this.state.label[0].toUpperCase()}</Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ color: "white" }}>{this.state.label}</Typography>
                                    <Typography style={{ color: "white" }} variant="caption">{this.state.url.toLowerCase()}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Grid >);
    }
}

export default FavouriteCard;
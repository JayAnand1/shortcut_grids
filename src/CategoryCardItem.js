
import React, { Component } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";


class CategoryCardItem extends Component {

    render() {
        return (
            <Card style={{ backgroundColor: this.props.backgroundColor }} >
                <CardActionArea href={this.props.item.url}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Avatar style={{ width: 16, height: 16 }} src={this.props.item.url + "/favicon.ico"}
                                ></Avatar>
                            </Grid>
                            <Grid item>
                                <Typography style={{ color: "white" }}>{this.props.item.label}</Typography>
                                <Typography style={{ color: "white" }} variant="caption">{this.props.item.url.toLowerCase()}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>);
    }
}

export default CategoryCardItem;
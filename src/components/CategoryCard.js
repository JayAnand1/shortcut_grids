
import React, { Component } from "react";
import {
    Card,
    CardActions,
    CardHeader,
    Grid,
    IconButton,
    Button, Paper
} from "@material-ui/core";
import { MoreVert, Add } from "@material-ui/icons";
import CategoryCardItem from "../CategoryCardItem";

class CategoryCard extends Component {

    render() {
        return (
            <Grid item xs={12} sm={4} md={3}>
                <Paper square style={{ backgroundColor: this.props.item.colour }}>
                    <CardHeader title={this.props.item.category} action={<IconButton style={{ color: "white" }} onClick={() => this.props.onDelete(this.props.item.id)}><MoreVert /></IconButton>}></CardHeader>
                    {this.props.item.bookmarks.map((bookmark) => <CategoryCardItem item={bookmark} backgroundColor={this.props.item.colour} key={bookmark.id} />)}
                    <CardActions>
                        <Button onClick={() => this.props.onAddNewBookmarkDialog(this.props.item.id, { type: 'addBookmark', active: true })} variant="contained" size="small" color="primary" startIcon={<Add />}>Add Bookmark</Button>
                    </CardActions>
                </Paper>

            </Grid >);
    }
}

export default CategoryCard;






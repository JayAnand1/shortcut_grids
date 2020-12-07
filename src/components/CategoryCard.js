import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
  Button,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { MoreVert, Add } from "@material-ui/icons";
import CategoryCardItem from "./CategoryCardItem";

class CategoryCard extends Component {
  render() {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <List style={{ backgroundColor: this.props.item.colour }}>
          <Typography variant="h6" style={{ color: "white" }}>
            <Box lineHeight="normal" m={1}>
              {this.props.item.category}
            </Box>
          </Typography>
          <Typography variant="caption" style={{ color: "white" }}>
            <Box lineHeight="normal" m={1}>
              Nor ma sd asd sa dsa dsa d sa ds da sd asd dsa sad asd asd asd ad
              sadl height.
            </Box>
          </Typography>
          {this.props.item.bookmarks.map((bookmark) => (
            <CategoryCardItem
              item={bookmark}
              backgroundColor={this.props.item.colour}
              key={bookmark.id}
              onChangeDialogStatus={this.props.onChangeDialogStatus}
            />
          ))}
          <CardActions>
            <Grid container direction="row" justify="space-between">
              <Button
                onClick={() =>
                  this.props.onAddNewBookmarkDialog(this.props.item.id, {
                    type: "addBookmark",
                    active: true,
                  })
                }
                variant="text"
                size="small"
                style={{ color: "white" }}
                startIcon={<Add />}
              >
                Add Bookmark
              </Button>
              <IconButton
                style={{ color: "white" }}
                onClick={() => this.props.onDelete(this.props.item.id)}
              >
                <MoreVert />
              </IconButton>
            </Grid>
          </CardActions>
        </List>
      </Grid>
    );
  }
}

export default CategoryCard;

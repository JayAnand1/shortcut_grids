import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
  ListItemIcon,
  Button,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
import { MoreVert, Add } from "@material-ui/icons";
import CategoryCardItem from "./CategoryCardItem";

class CategoryCard extends Component {
  render() {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <div
          style={{
            backgroundColor: this.props.item.colour,
            borderRadius: "2px 10px 2px 10px",
            maxWidth: "fit-content",
            padding: "5px 5px 2px 5px",
            margin: "0px 0px 2px 0px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            zIndex: "999",
          }}
        >
          <Typography variant="body2" style={{ color: "white" }}>
            {this.props.item.category}
          </Typography>
        </div>

        <Card
          raised
          style={{
            backgroundColor: this.props.item.colour,
            padding: "0px 2px 0px 2px",
          }}
        >
          <List
            style={{ padding: "0px 0px 0px 0px", margin: "0px 2px 0px 2px" }}
          >
            <Typography variant="subtitle2" style={{ color: "white" }}>
              <Box lineHeight="normal" m={1}>
                {this.props.item.categoryDescription}
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

            <ListItem
              alignItems="center"
              dense
              button
              onClick={() =>
                this.props.onAddNewBookmarkDialog(this.props.item.id, {
                  type: "addBookmark",
                  active: true,
                })
              }
              style={{ color: "white" }}
            >
              <ListItemIcon
                style={{ margin: "0px 0px 0px 5px", color: "white" }}
              >
                <Add fontSize="small" color="action" />
              </ListItemIcon>
              <ListItemText style={{ textAlign: "left" }} color="action">
                Add Bookmark
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  style={{ color: "white" }}
                  onClick={() => this.props.onDelete(this.props.item.id)}
                >
                  <MoreVert fontSize="small" color="action" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Card>
      </Grid>
    );
  }
}

export default CategoryCard;

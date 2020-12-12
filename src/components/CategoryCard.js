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
  MenuItem,
  Menu,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { MoreVert, Add } from "@material-ui/icons";
import CategoryCardItem from "./CategoryCardItem";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

class CategoryCard extends Component {
  state = {
    openMoreVertMenu: false,
    menuAnchor: "",
    confirmDialog: false,
  };

  handleConfirmDialogClick = () => {
    this.setState({ confirmDialog: true });
  };

  handleConfirmDialogClose = () => {
    this.setState({ confirmDialog: false });
  };

  handleClick = (event) => {
    console.log(event.currentTarget);
    this.setState({ openMoreVertMenu: true });
    this.setState({ menuAnchor: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ openMoreVertMenu: false });
    this.setState({ menuAnchor: null });
  };

  render() {
    return (
      <Grid item xs={6} sm={4} md={3}>
        {/* <div
          style={{
            backgroundColor: this.props.item.colour,
            borderRadius: "2px 10px 2px 10px",
            maxWidth: "fit-content",
            padding: "5px 5px 5px 5px",
            margin: "2px 0px 2px 0px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            zIndex: "999",
          }}
        >
          <Typography variant="body2" style={{ color: "white" }}>
            {this.props.item.category}
          </Typography>
        </div> */}

        <Card
          raised
          variant="outlined"
          style={{
            backgroundColor: "transparent",
            borderRadius: "10px",
            borderColor: "white",
            //backgroundColor: this.props.item.colour,
            padding: "0px 2px 0px 2px",
          }}
        >
          <Typography
            variant="body2"
            style={{ color: "white", padding: "5px" }}
          >
            {this.props.item.category}
          </Typography>
          <List
            style={{
              padding: "0px 0px 0px 0px",
              margin: "0px 2px 0px 2px",
            }}
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
              <ListItemText
                style={{ textAlign: "left", color: "#374036" }}
                color="action"
              >
                Add Bookmark
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  style={{ color: "white" }}
                  onClick={this.handleClick}
                >
                  <MoreVert fontSize="small" color="action" />
                </IconButton>
                <Menu
                  open={this.state.openMoreVertMenu}
                  onClose={this.handleClose}
                  anchorEl={this.state.menuAnchor}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Grid container>
                      <EditIcon
                        style={{ marginRight: "15px", fontSize: "20" }}
                      />
                      <Typography variant="caption">Edit Category</Typography>
                    </Grid>
                  </MenuItem>
                  <MenuItem onClick={this.handleConfirmDialogClick}>
                    <Grid container>
                      <DeleteIcon
                        style={{
                          marginRight: "15px",
                          color: "red",
                          fontSize: "20",
                        }}
                      />
                      <Typography variant="caption" style={{ color: "red" }}>
                        Delete Category
                      </Typography>
                    </Grid>
                  </MenuItem>
                </Menu>
                <Dialog
                  open={this.state.confirmDialog}
                  onClose={this.handleConfirmDialogClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Confirm Delete
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Are you sure you want to delete category "
                      {this.props.item.category}"? This action cannot be undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => this.props.onDelete(this.props.item.id)}
                      color="secondary"
                    >
                      Confirm Delete
                    </Button>
                    <Button
                      onClick={this.handleConfirmDialogClose}
                      color="primary"
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Card>
      </Grid>
    );
  }
}

export default CategoryCard;

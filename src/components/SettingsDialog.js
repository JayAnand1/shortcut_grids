import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Radio,
  Grid,
  Typography,
} from "@material-ui/core";
import uuid from "react-uuid";

class SettingsDialog extends Component {
  state = {
    id: uuid(),
    category: "",
    colour: "",
    showError: false,
  };

  inputColourHandler = (event) => {
    this.setState({ colour: event.target.value });
  };

  inputCategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.category.trim() === "") {
      this.setState({ showError: true });
    } else {
      const category = {
        id: this.state.id,
        category: this.state.category,
        colour: this.state.colour,
        bookmarks: [],
      };
      this.props.onAddNewCategory(category, {
        type: "Settings",
        active: false,
      });
    }
  };

  render() {
    return (
      <Dialog
        fullWidth
        open={() =>
          this.props.onChangeDialogStatus({ type: "settings", active: true })
        }
        onClose={() =>
          this.props.onChangeDialogStatus({ type: "Add", active: false })
        }
      >
        <DialogTitle id="alert-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Typography variant="body1">Background Colour</Typography>
            <Radio
              style={{ color: "#61BD4F" }}
              checked={this.state.colour === "#61BD4F"}
              onChange={this.inputColourHandler}
              value="#61BD4F"
            />
            <Radio
              style={{ color: "#F2D600" }}
              checked={this.state.colour === "#F2D600"}
              onChange={this.inputColourHandler}
              value="#F2D600"
            />
            <Radio
              style={{ color: "#FF9F1A" }}
              checked={this.state.colour === "#FF9F1A"}
              onChange={this.inputColourHandler}
              value="#FF9F1A"
            />
            <Radio
              style={{ color: "#EB5A46" }}
              checked={this.state.colour === "#EB5A46"}
              onChange={this.inputColourHandler}
              value="#EB5A46"
              color="default"
            />
            <Radio
              style={{ color: "#C377E0" }}
              checked={this.state.colour === "#C377E0"}
              onChange={this.inputColourHandler}
              value="#C377E0"
              color="default"
            />
            <Radio
              style={{ color: "#0079BF" }}
              checked={this.state.colour === "#0079BF"}
              onChange={this.inputColourHandler}
              value="#0079BF"
              color="default"
            />
          </Grid>
        </DialogContent>
        <DialogContent>
          <center>
            <Typography variant="body2">
              Copyright © 2020, All Rights Reserved
            </Typography>
          </center>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleSubmit}
            color="primary"
            autoFocus
            size="small"
          >
            Save
          </Button>
          <Button
            onClick={() =>
              this.props.onChangeDialogStatus({ type: "Add", active: false })
            }
            color="primary"
            size="small"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SettingsDialog;

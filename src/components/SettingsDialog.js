import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Radio,
  Grid,
  Card,
  Typography,
  ButtonGroup,
  Box,
  NativeSelect,
  Select,
  TableContainer,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import uuid from "react-uuid";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

class SettingsDialog extends Component {
  state = {
    id: uuid(),
    category: "",
    masterBackgroundColour: "",
    showError: false,
  };

  inputBackgroundColourHandler = (event) => {
    this.setState({ masterBackgroundColour: event.target.value });

    console.log(event.target.value);
    // this.props.masterBackgroundColor(event.target.value);
  };

  handleSave = () => {
    //props.masterBackgroundColour(this.state.masterBackgroundColour);
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
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#61BD4F" }}
              checked={this.state.masterBackgroundColour === "backgroundColor1"}
              onChange={this.inputBackgroundColourHandler}
              value="backgroundColor1"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#F2D600" }}
              checked={this.state.masterBackgroundColour === "backgroundColor2"}
              onChange={this.inputBackgroundColourHandler}
              value="backgroundColor2"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#FF9F1A" }}
              checked={this.state.colour === "#FF9F1A"}
              onChange={this.masterBackgroundColour}
              value="#FF9F1A"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#EB5A46" }}
              checked={this.state.colour === "#EB5A46"}
              onChange={this.masterBackgroundColour}
              value="#EB5A46"
              color="default"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#C377E0" }}
              checked={this.state.colour === "#C377E0"}
              onChange={this.masterBackgroundColour}
              value="#C377E0"
              color="default"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#0079BF" }}
              checked={this.state.masterBackgroundColour === "#0079BF"}
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
            onClick={this.handleSave}
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

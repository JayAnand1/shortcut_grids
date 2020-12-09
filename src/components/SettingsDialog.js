import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Radio,
  Grid,
  TextField,
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
  };

  handleSave = () => {
    this.props.onChange;
    this.setState({
      masterBackgroundColour: this.state.masterBackgroundColour,
    });
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
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography>User Name</Typography>
            </Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
            <TextField size="small"></TextField>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography>Weather/Time Zone Location</Typography>
            </Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
            <TextField size="small"></TextField>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="body1">Background Colour</Typography>
            </Grid>
            <Grid item>
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#61BD4F", margin: "0px", padding: "0px" }}
                // checked={
                //   this.state.masterBackgroundColour === "#backgroundColour4"
                // }
                // onChange={this.props.onChangeBackgroundColour("backgroundColour1")}
                // value="backgroundColor1"
              />
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#F2D600", marginLeft: "10px", padding: "0px" }}
                //checked={this.props.onChangeBackgroundColour("backgroundColour2")}
                onChange={this.props.onChangeBackgroundColour(
                  "backgroundColour2"
                )}
                value="backgroundColor2"
              />
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#FF9F1A", marginLeft: "10px", padding: "0px" }}
                //checked={this.state.masterBackgroundColour === "backgroundColour3"}
                onChange={this.inputBackgroundColourHandler}
                value="backgroundColor3"
              />
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#EB5A46", marginLeft: "10px", padding: "0px" }}
                //checked={this.state.masterBackgroundColour === "backgroundColour4"}
                onChange={this.inputBackgroundColourHandler}
                value="backgroundColor4"
              />
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#C377E0", marginLeft: "10px", padding: "0px" }}
                //={this.state.masterBackgroundColour === "backgroundColour5"}
                onChange={this.inputBackgroundColourHandler}
                value="backgroundColor5"
              />
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#0079BF", marginLeft: "10px", padding: "0px" }}
                //checked={this.state.masterBackgroundColour === "backgroundColour6"}
                onChange={this.inputBackgroundColourHandler}
                value="backgroundColor6"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent>
          <center>
            <Typography variant="body2">
              Copyright © 2020. All Rights Reserved
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

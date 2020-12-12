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
  Tooltip,
} from "@material-ui/core";
import uuid from "react-uuid";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

class SettingsDialog extends Component {
  state = {
    id: uuid(),
    category: "",
    masterBackgroundColour: this.props.masterBackgroundColour,
    showError: false,
  };

  inputBackgroundColourHandler = (event) => {
    this.setState({ masterBackgroundColour: event.target.value });
    this.props.onChangeBackgroundColour(event.target.value);
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
              <Typography variant="body1">Background Colour</Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Slightly Black">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#22272C",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour3"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour3"
                />
              </Tooltip>
              <Tooltip title="Not So Blue">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#1e3c72",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour1"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour1"
                />
              </Tooltip>
              <Tooltip title="Mighty Green">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#00564d",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour2"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour2"
                />
              </Tooltip>

              <Tooltip title="Tangy Orange">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#DA5A38",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour4"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour4"
                />
              </Tooltip>
              <Tooltip title="Passionate Pink">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#C594C5",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour5"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour5"
                />
              </Tooltip>
              <Tooltip title="Somewhat Brown">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#958A56",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour6"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour6"
                />
              </Tooltip>
              <Tooltip title="Just Grey">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#ABB2BF",
                    marginLeft: "10px",
                    padding: "0px",
                  }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour7"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour7"
                />
              </Tooltip>
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

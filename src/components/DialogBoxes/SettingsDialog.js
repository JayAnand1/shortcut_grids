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
              <Tooltip title="Burning Orange">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{ color: "#61BD4F", margin: "0px", padding: "0px" }}
                  checked={
                    this.state.masterBackgroundColour === "backgroundColour1"
                  }
                  onChange={this.inputBackgroundColourHandler}
                  value="backgroundColour1"
                />
              </Tooltip>
              <Tooltip title="Turquois Flow">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#F2D600",
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
              <Tooltip title="Facebook Messenger">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#FF9F1A",
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
              <Tooltip title="Ash">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#EB5A46",
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
              <Tooltip title="Namn">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#C377E0",
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
              <Tooltip title="Midnight City">
                <Radio
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  style={{
                    color: "#0079BF",
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

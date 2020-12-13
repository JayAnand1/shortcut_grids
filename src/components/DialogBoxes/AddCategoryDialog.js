import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Radio,
  Grid,
  Typography,
  Tooltip,
} from "@material-ui/core";
import uuid from "react-uuid";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

class AddCategoryDialog extends Component {
  state = {
    id: uuid(),
    category: "",
    categoryDescription: "",
    colour: "",
    showError: false,
  };

  inputColourHandler = (event) => {
    this.setState({ colour: event.target.value });
  };

  inputCategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };

  inputCategoryDescriptionHandler = (event) => {
    this.setState({ categoryDescription: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.category.trim() === "") {
      this.setState({ showError: true });
    } else {
      const category = {
        id: this.state.id,
        category: this.state.category,
        categoryDescription: this.state.categoryDescription,
        colour: this.state.colour,
        bookmarks: [],
      };
      this.props.onAddNewCategory(category, {
        type: "addCategory",
        active: false,
      });
    }
  };

  render() {
    return (
      <Dialog
        fullWidth
        open={() =>
          this.props.onChangeDialogStatus({ type: "addCategory", active: true })
        }
        onClose={() =>
          this.props.onChangeDialogStatus({ type: "Add", active: false })
        }
      >
        <DialogTitle>Add Bookmark Group</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            id="inputBookmarkLabelField"
            label="Group Name"
            variant="outlined"
            onChange={this.inputCategoryHandler}
            //value={this.inputCategoryHandler}
            helperText={
              this.state.showError ? "Empty Field: Please enter Group Name" : ""
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            id="inputDescriptionField"
            label="Description (Optional)"
            variant="outlined"
            onChange={this.inputCategoryDescriptionHandler}
          />
        </DialogContent>
        <DialogContent>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Typography variant="body1">Group Colour</Typography>
            <Tooltip title="Red">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#E65E7E" }}
                checked={this.state.colour === "#E65E7E"}
                onChange={this.inputColourHandler}
                value="#E65E7E"
              />
            </Tooltip>
            <Tooltip title="Orange">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#E68767" }}
                checked={this.state.colour === "#E68767"}
                onChange={this.inputColourHandler}
                value="#E68767"
              />
            </Tooltip>
            <Tooltip title="Yellow">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#FDBC7A" }}
                checked={this.state.colour === "#FDBC7A"}
                onChange={this.inputColourHandler}
                value="#FDBC7A"
              />
            </Tooltip>
            <Tooltip title="Blue">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#067BCF" }}
                checked={this.state.colour === "#067BCF"}
                onChange={this.inputColourHandler}
                value="#067BCF"
              />
            </Tooltip>

            <Tooltip title="Grey">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#838383" }}
                checked={this.state.colour === "#838383"}
                onChange={this.inputColourHandler}
                value="#838383"
              />
            </Tooltip>
            <Tooltip title="Turquoise">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#27BBCF" }}
                checked={this.state.colour === "#27BBCF"}
                onChange={this.inputColourHandler}
                value="#27BBCF"
              />
            </Tooltip>
            <Tooltip title="Green">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#44CF9A" }}
                checked={this.state.colour === "#44CF9A"}
                onChange={this.inputColourHandler}
                value="#44CF9A"
              />
            </Tooltip>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary" size="small">
            Add
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

export default AddCategoryDialog;

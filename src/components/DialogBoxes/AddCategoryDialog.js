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
              this.state.showError ? "Empty Field: Please enter Category" : ""
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
            <Typography variant="body1">Card Colour</Typography>
            <Tooltip title="Red">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#57D7BE" }}
                checked={this.state.colour === "#57D7BE"}
                onChange={this.inputColourHandler}
                value="#57D7BE"
              />
            </Tooltip>
            <Tooltip title="Orange">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#30664C" }}
                checked={this.state.colour === "#30664C"}
                onChange={this.inputColourHandler}
                value="#30664C"
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
                style={{ color: "#428CD4" }}
                checked={this.state.colour === "#428CD4"}
                onChange={this.inputColourHandler}
                value="#428CD4"
              />
            </Tooltip>

            <Tooltip title="Grey">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#D6DDE0" }}
                checked={this.state.colour === "#D6DDE0"}
                onChange={this.inputColourHandler}
                value="#D6DDE0"
              />
            </Tooltip>
            <Tooltip title="Teal">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#0F9EAB" }}
                checked={this.state.colour === "#0F9EAB"}
                onChange={this.inputColourHandler}
                value="#0F9EAB"
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

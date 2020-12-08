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
} from "@material-ui/core";
import { MoreVert, Add } from "@material-ui/icons";
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
            id="inputLabelField"
            label="Group Name"
            variant="outlined"
            onChange={this.inputCategoryHandler}
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
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#61BD4F" }}
              checked={this.state.colour === "#61BD4F"}
              onChange={this.inputColourHandler}
              value="#61BD4F"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#F2D600" }}
              checked={this.state.colour === "#F2D600"}
              onChange={this.inputColourHandler}
              value="#F2D600"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#FF9F1A" }}
              checked={this.state.colour === "#FF9F1A"}
              onChange={this.inputColourHandler}
              value="#FF9F1A"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#EB5A46" }}
              checked={this.state.colour === "#EB5A46"}
              onChange={this.inputColourHandler}
              value="#EB5A46"
              color="default"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#C377E0" }}
              checked={this.state.colour === "#C377E0"}
              onChange={this.inputColourHandler}
              value="#C377E0"
              color="default"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#0079BF" }}
              checked={this.state.colour === "#0079BF"}
              onChange={this.inputColourHandler}
              value="#0079BF"
              color="default"
            />
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

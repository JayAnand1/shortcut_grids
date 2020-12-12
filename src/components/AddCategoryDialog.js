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
            <Tooltip title="Green">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#F993A1" }}
                checked={this.state.colour === "#F993A1"}
                onChange={this.inputColourHandler}
                value="#F993A1"
              />
            </Tooltip>

            <Tooltip title="Blue">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#31BCCF" }}
                checked={this.state.colour === "#31BCCF"}
                onChange={this.inputColourHandler}
                value="#31BCCF"
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

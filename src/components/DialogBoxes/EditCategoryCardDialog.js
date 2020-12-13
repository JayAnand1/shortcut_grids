import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Radio,
  Tooltip,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

class EditCardCategoryDialog extends Component {
  state = {
    category: this.props.category,
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

  inputCategoryHandler = (event) => {
    const { category } = this.state;
    category.label = event.target.value;
    this.setState({ category });
  };

  inputCategoryDescriptionHandler = (event) => {
    const { category } = this.state;
    category.categoryDescription = event.target.value;
    this.setState({ category });
  };

  inputColourHandler = (event) => {
    const { category } = this.state;
    category.colour = event.target.value;
    this.setState({ category });
  };

  handleSubmit = () => {
    this.props.onChangeCategoryDetails(this.state.category, {
      type: "",
      active: false,
    });
    this.props.handleSnackBar("Category Edited Successfully", "Success");
  };

  render() {
    console.log(this.state.category);
    return (
      <Dialog
        fullWidth
        open={() =>
          this.props.onChangeDialogStatus({
            type: "editCardCategory",
            active: true,
          })
        }
        onClose={() =>
          this.props.onChangeDialogStatus({ type: "", active: false })
        }
      >
        <DialogTitle>Edit Bookmark Group</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            id="inputBookmarkLabelField"
            label="Group Name"
            variant="outlined"
            onChange={this.inputCategoryHandler}
            defaultValue={this.state.category.category}
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
            defaultValue={this.state.category.categoryDescription}
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
                style={{ color: "#D61A3C" }}
                checked={this.state.category.colour === "#D61A3C"}
                onChange={this.inputColourHandler}
                value="#D61A3C"
              />
            </Tooltip>
            <Tooltip title="Orange">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#F47B3D" }}
                checked={this.state.category.colour === "#F47B3D"}
                onChange={this.inputColourHandler}
                value="#F47B3D"
              />
            </Tooltip>
            <Tooltip title="Yellow">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#FDBC7A" }}
                checked={this.state.category.colour === "#FDBC7A"}
                onChange={this.inputColourHandler}
                value="#FDBC7A"
              />
            </Tooltip>
            <Tooltip title="Blue">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#428CD4" }}
                checked={this.state.category.colour === "#428CD4"}
                onChange={this.inputColourHandler}
                value="#428CD4"
              />
            </Tooltip>

            <Tooltip title="Grey">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#D6DDE0" }}
                checked={this.state.category.colour === "#D6DDE0"}
                onChange={this.inputColourHandler}
                value="#D6DDE0"
              />
            </Tooltip>
            <Tooltip title="Teal">
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                style={{ color: "#0F9EAB" }}
                checked={this.state.category.colour === "#0F9EAB"}
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
              this.props.onChangeDialogStatus({ type: "", active: false })
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

export default EditCardCategoryDialog;

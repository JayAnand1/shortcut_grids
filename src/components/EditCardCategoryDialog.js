import React, { Component, state } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
  ListItemIcon,
  Button,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  MenuItem,
  Menu,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Radio,

} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";


class EditCardCategoryDialog extends Component {
  state = {
    category: this.props.category
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
  }

  inputCategoryDescriptionHandler = (event) => {
    const { category } = this.state;
    category.categoryDescription = event.target.value;
    this.setState({ category });
  }

  inputColourHandler = (event) => {
    const { category } = this.state;
    category.colour = event.target.value;
    this.setState({ category });
  }

  handleSubmit = () => {
    this.props.onChangeCategoryDetails(this.state.category, { type: "", active: false });

  }

  render() {
    console.log(this.state.category);
    return (
      <Dialog
        fullWidth
        open={() =>
          this.props.onChangeDialogStatus({ type: "editCardCategory", active: true })
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
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#61BD4F" }}
              checked={this.state.category.colour === "#61BD4F"}
              onChange={this.inputColourHandler}
              value="#61BD4F"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#ffffff00" }}
              checked={this.state.category.colour === "#ffffff00"}
              onChange={this.inputColourHandler}
              value="#ffffff00"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#F2D600" }}
              checked={this.state.category.colour === "#F2D600"}
              onChange={this.inputColourHandler}
              value="#F2D600"
            />

            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#FF9F1A" }}
              checked={this.state.category.colour === "#FF9F1A"}
              onChange={this.inputColourHandler}
              value="#FF9F1A"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#EB5A46" }}
              checked={this.state.category.colour === "#EB5A46"}
              onChange={this.inputColourHandler}
              value="#EB5A46"
              color="default"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#C377E0" }}
              checked={this.state.category.colour === "#C377E0"}
              onChange={this.inputColourHandler}
              value="#C377E0"
              color="default"
            />
            <Radio
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
              style={{ color: "#0079BF" }}
              checked={this.state.category.colour === "#0079BF"}
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

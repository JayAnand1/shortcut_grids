import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import uuid from "react-uuid";

class EditCardItemDialog extends Component {
  state = {
    id: uuid(),
    label: "",
    url: "",
    showLabelError: false,
    showUrlError: false,
  };

  inputURLHandler = (event) => {
    this.setState({ url: event.target.value });
  };

  inputLabelHandler = (event) => {
    this.setState({ label: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.label.trim() === "") {
      this.setState({ showLabelError: true });
    } else if (this.state.url.trim() === "") {
      this.setState({ showUrlError: true });
    } else {
      const bookmark = {
        id: this.state.id,
        label: this.state.label,
        url: this.state.url,
      };
      this.props.onAddNewBookmark(bookmark, this.props.categoryId, {
        type: "addBookmark",
        active: false,
      });
    }
  };

  render() {
    return (
      <Dialog
        fullWidth
        open={() =>
          this.props.onChangeDialogStatus({
            type: "editCardItem",
            active: true,
          })
        }
        onClose={() =>
          this.props.onChangeDialogStatus({ type: "Add", active: false })
        }
      >
        <DialogTitle>Edit Bookmark</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            id="inputLabelField"
            label="Label"
            variant="outlined"
            onChange={this.inputLabelHandler}
            helperText={
              this.state.showLabelError ? "Empty Field: Please enter label" : ""
            }
          />
          &nbsp;
          <TextField
            required
            size="small"
            fullWidth
            id="inputURLField"
            label="URL"
            variant="outlined"
            onChange={this.inputURLHandler}
            defaultValue="https://"
            helperText={
              this.state.showUrlError ? "Empty Field: Please enter url" : ""
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Save
          </Button>
          <Button
            onClick={() =>
              this.props.onChangeDialogStatus({ type: "Add", active: false })
            }
            color="primary"
          >
            Close
          </Button>
          <Button color="secondary">Delete Bookmark</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditCardItemDialog;

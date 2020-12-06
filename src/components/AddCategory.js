import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import uuid from 'react-uuid';

class AddCategory extends Component {


    state = {
        id: uuid(),
        category: '',
        colour: '',
        showError: false,
    }

    inputColourHandler = (event) => {
        this.setState({ colour: event.target.value });
    }

    inputCategoryHandler = (event) => {
        this.setState({ category: event.target.value });
    };

    handleSubmit = () => {
        if (this.state.category.trim() === "") {
            this.setState({ showError: true });
        } else {
            const category = {
                id: this.state.id,
                category: this.state.category,
                colour: this.state.colour,
                bookmarks: []
            };
            this.props.onAddNewCategory(category, { type: 'addCategory', active: false });
        }
    }

    render() {
        return (<Dialog open={() => this.props.onChangeDialogStatus({ type: 'addCategory', active: true })} onClose={() => this.props.onChangeDialogStatus({ type: 'Add', active: false })}>
            <DialogTitle id="alert-dialog-title">Add Shortcut Card</DialogTitle>
            <DialogContent>
                <TextField
                    required
                    fullWidth
                    size="small"
                    id="inputLabelField"
                    label="Category"
                    variant="outlined"
                    onChange={this.inputCategoryHandler}
                    helperText={this.state.showError ? 'Empty Field: Please enter Category' : ''}
                />

            &nbsp;
                <center>
                    <div>
                        <Radio
                            style={{ color: "#4db6ac" }}
                            checked={this.state.colour === "#4db6ac"}
                            onChange={this.inputColourHandler}
                            value="#4db6ac"
                            size="small"
                        />
                        <Radio
                            style={{ color: "#e57373" }}
                            checked={this.state.colour === "#e57373"}
                            onChange={this.inputColourHandler}
                            value="#e57373"
                            size="small"
                        />
                        <Radio
                            style={{ color: "#4fc3f7" }}
                            checked={this.state.colour === "#4fc3f7"}
                            onChange={this.inputColourHandler}
                            value="#4fc3f7"
                            size="small"
                        />
                        <Radio
                            style={{ color: "#ffb74d" }}
                            checked={this.state.colour === "#ffb74d"}
                            onChange={this.inputColourHandler}
                            value="#ffb74d"
                            color="default"
                            size="small"
                        />
                        <Radio
                            style={{ color: "#7986cb" }}
                            checked={this.state.colour === "#7986cb"}
                            onChange={this.inputColourHandler}
                            value="#7986cb"
                            color="default"
                            size="small"
                        />
                    </div>
                </center>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleSubmit} color="primary" autoFocus>
                    Add
          </Button>
            </DialogActions>
        </Dialog>);
    }
}

export default AddCategory;
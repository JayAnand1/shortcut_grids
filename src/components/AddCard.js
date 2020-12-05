import React, { useState, Component, state } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import SettingsIcon from "@material-ui/icons/Settings";
import uuid from 'react-uuid';

class AddCard extends Component {


    state = {
        id: uuid(),
        label: '',
        url: '',
        // icon: '',
        colour: '',
    }

    inputColourHandler = (event) => {
        console.log(event.target.value);
        this.setState({ colour: event.target.value });

    }

    inputURLHandler = (event) => {
        this.setState({ url: event.target.value });
    };

    inputLabelHandler = (event) => {
        console.log(uuid());
        this.setState({ label: event.target.value });
    };

    render() {
        return (<Dialog open={() => this.props.onChangeDialogStatus({ type: 'Add', active: true })} onClose={() => this.props.onChangeDialogStatus({ type: 'Add', active: false })}>
            <DialogTitle id="alert-dialog-title">Add Shortcut Card</DialogTitle>
            <DialogContent>
                <TextField
                    required
                    fullWidth
                    size="small"
                    id="inputLabelField"
                    label="Label"
                    variant="outlined"
                    onChange={this.inputLabelHandler}
                />
          &nbsp;
          <TextField
                    required
                    size="small"
                    fullWidth
                    id="inputURLField"
                    label="Url"
                    variant="outlined"
                    onChange={this.inputURLHandler}
                    defaultValue="https://"

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
                <Button onClick={() => this.props.onAddNewCard(this.state, { type: 'Add', active: false })} color="primary" autoFocus>
                    Add
          </Button>
            </DialogActions>
        </Dialog>);
    }
}

export default AddCard;
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
        // colour: '',
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
            </DialogContent>

            <DialogActions>
                <Button onClick={() => this.props.onAddNewCard({ label: this.state.label, url: this.state.url }, { type: 'Add', active: false })} color="primary" autoFocus>
                    Add
          </Button>
            </DialogActions>
        </Dialog>);
    }
}

export default AddCard;
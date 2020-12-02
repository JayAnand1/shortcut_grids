import React from "react";
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

const TopBar = ({
  inputURL,
  setInputURL,
  inputLabel,
  setInputLabel,
  inputURLList,
  setInputURLList,
}) => {
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const inputURLHandler = (e) => {
    console.log(e.target.value);
    setInputURL(e.target.value);
  };

  const inputLabelHandler = (e) => {
    console.log(e.target.value);
    setInputLabel(e.target.value);
  };

  const submitDataHandler = (e) => {
    e.preventDefault();
    setInputURLList([
      ...inputURLList,
      {
        label: inputLabel,
        URL: inputURL,
        color: true,
        id: Math.random() * 1000,
      },
    ]);
    console.log(inputURLList);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box flexGrow={1}></Box>
        <IconButton edge="start" onClick={handleClickOpenAdd}>
          <AddOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleClickOpenInfo}>
          <InfoOutlinedIcon />
        </IconButton>
        <Dialog open={openInfo} onClose={handleCloseInfo}>
          <DialogTitle id="alert-dialog-title">
            About Shortcut Grids
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseInfo} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openAdd} onClose={handleCloseAdd}>
          <DialogTitle id="alert-dialog-title">Add Shortcut Card</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              size="small"
              id="inputLabelField"
              label="Label"
              variant="outlined"
              onChange={inputLabelHandler}
            />
            <TextField
              size="small"
              fullWidth
              id="inputURLField"
              label="Url"
              variant="outlined"
              onChange={inputURLHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={submitDataHandler} color="primary" autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

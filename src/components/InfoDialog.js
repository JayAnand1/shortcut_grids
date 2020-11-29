import React, { useState } from "react";
import {
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogContentText,
  DialogActions,
  CardActionArea,
  Grid,
} from "@material-ui/core";

const InfoDialog = (open, setOpen) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">About Shortcut Grids</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let sssoogle help apps determine location. This means sending
          anonymous location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;

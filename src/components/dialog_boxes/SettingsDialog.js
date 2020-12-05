import React from "react";

const SettingsDialog = () => {
  return (
    <Dialog open={openSettings} onClose={handleCloseSettings}>
      <DialogTitle id="alert-dialog-title">About Shortcut Grids</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseSettings} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Body;

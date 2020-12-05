import React, { useState } from "react";
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


const TopBar = (props) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box flexGrow={1}></Box>
        <IconButton onClick={() => props.onChangeDialogStatus({ type: 'Add', active: true })}>
          <AddOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => props.onChangeDialogStatus({ type: 'Info', active: true })}>
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => props.onChangeDialogStatus({ type: 'Settings', active: true })}>
          <SettingsIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

// const TopBar = ({
//   inputURL,
//   setInputURL,
//   inputLabel,
//   setInputLabel,
//   inputURLList,
//   setInputURLList,
//   setOpenSnackBar,

// }) => {
//   const [openInfo, setOpenInfo] = useState(false);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [openSettings, setOpenSettings] = useState(false);
//   const [addDialogActive, setAddDialogActive] = useState(false);
//   const [infoDialogActive, setInfoDialogActive] = useState(false);
//   const [settingsDialogActive, setSettingsDialogActive] = useState(false);


//   const handleClickOpenInfo = () => {
//     setOpenInfo(true);
//   };

//   const handleCloseInfo = () => {
//     setOpenInfo(false);
//   };

//   const handleClickOpenAdd = () => {
//     setOpenAdd(true);
//   };

//   const handleCloseAdd = () => {
//     setOpenAdd(false);
//   };

//   const handleClickOpenSettings = () => {
//     setOpenSettings(true);
//   };

//   const handleCloseSettings = () => {
//     setOpenSettings(false);
//   };

//   const inputURLHandler = (e) => {
//     console.log(e.target.value);
//     setInputURL(e.target.value);
//   };

//   const inputLabelHandler = (e) => {
//     console.log(e.target.value);

//     setInputLabel(e.target.value);
//   };

//   const isValidUrl = (string) => {
//     try {
//       new URL(string);
//     } catch (_) {
//       return false;
//     }
//     return true;
//   }

//   const submitDataHandler = (e) => {
//     e.preventDefault();
//     if (!isValidUrl(inputURL)) {
//       console.log("Not valid url");
//       return;
//     }
//     setInputURLList([
//       ...inputURLList,
//       {
//         label: inputLabel,
//         URL: inputURL,
//         color: true,
//         id: Math.random() * 1000,
//       },
//     ]);
//     // setInputLabel("");
//     setOpenAdd(false);
//     setOpenSnackBar(true);
//     console.log(inputURLList);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar>
//         <Box flexGrow={1}></Box>
//         <IconButton edge="start" onClick={handleClickOpenAdd}>
//           <AddOutlinedIcon />
//         </IconButton>
//         <IconButton onClick={handleClickOpenInfo}>
//           <InfoOutlinedIcon />
//         </IconButton>
//         <IconButton onClick={handleClickOpenSettings}>
//           <SettingsIcon />
//         </IconButton>
//         <Dialog open={openInfo} onClose={handleCloseInfo}>
//           <DialogTitle id="alert-dialog-title">
//             About Shortcut Grids
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Let Google help apps determine location. This means sending
//               anonymous location data to Google, even when no apps are running.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseInfo} color="primary" autoFocus>
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>


//         <Dialog open={openAdd} onClose={handleCloseAdd}>
//           <DialogTitle id="alert-dialog-title">Add Shortcut Card</DialogTitle>
//           <DialogContent>
//             <TextField
//               required
//               fullWidth
//               size="small"
//               id="inputLabelField"
//               label="Label"
//               variant="outlined"
//               onChange={inputLabelHandler}
//             />
//             &nbsp;
//             <TextField
//               required
//               size="small"
//               fullWidth
//               id="inputURLField"
//               label="Url"
//               variant="outlined"
//               onChange={inputURLHandler}
//             />
//           </DialogContent>

//           <DialogActions>
//             <Button onClick={submitDataHandler} color="primary" autoFocus>
//               Add
//             </Button>
//           </DialogActions>
//         </Dialog>

//         <Dialog open={openSettings} onClose={handleCloseSettings}>
//           <DialogTitle id="alert-dialog-title">Settings </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Change background color from here
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseSettings} color="primary" autoFocus>
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default TopBar;

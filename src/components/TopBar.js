import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

const TopBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItem = () => {
    handleAddClose();
    props.onChangeDialogStatus({ type: "addCategory", active: true });
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box flexGrow={1} />
        <Tooltip title="Add Elements">
          <IconButton onClick={handleAddClick}>
            <AddCircleOutlineOutlinedIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleAddClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuItem dense onClick={handleMenuItem}>
            <BookmarksOutlinedIcon
              style={{ fontsize: "20", paddingRight: "10px" }}
            />
            Add Bookmark Group
          </MenuItem>
          <MenuItem dense onClick={handleAddClose}>
            <NoteAddOutlinedIcon
              style={{ fontsize: "20", paddingRight: "10px" }}
            />
            Add Sticky Note
          </MenuItem>
          <MenuItem dense onClick={handleAddClose}>
            <ListAltOutlinedIcon
              style={{ fontsize: "20", paddingRight: "10px" }}
            />
            Add Todo List
          </MenuItem>
          <MenuItem dense onClick={handleAddClose}>
            <AccountTreeOutlinedIcon
              style={{ fontsize: "20", paddingRight: "10px" }}
            />
            Add Mind Map
          </MenuItem>
        </Menu>

        <Tooltip title="Settings">
          <IconButton
            onClick={() =>
              props.onChangeDialogStatus({ type: "settings", active: true })
            }
          >
            <TuneRoundedIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

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

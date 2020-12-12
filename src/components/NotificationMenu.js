import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  Badge,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import SearchIcon from "@material-ui/icons/Search";
import GreetingMessage from "./GreetingMessage";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";

class NotificationMenu extends Component {
  state = {};
  render() {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleAddClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem
          dense
          onClick={() =>
            props.onChangeDialogStatus({ type: "addCategory", active: true })
          }
        >
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
    );
  }
}

export default NotificationMenu;

import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import {
  BookmarksOutlinedIcon,
  NoteAddOutlinedIcon,
  ListAltOutlinedIcon,
  AccountTreeOutlinedIcon,
} from "@material-ui/icons";

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

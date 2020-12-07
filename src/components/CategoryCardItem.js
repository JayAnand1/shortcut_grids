import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  IconButton,
  Typography,
  ListItem,
  CardHeader,
  ListItemAvatar,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditCardItemDialog from "./EditCardItemDialog";

class CategoryCardItem extends Component {
  state = {
    isMouseInside: false,
  };

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  render() {
    return (
      <ListItem
        dense
        button
        divider
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        variant="outlined"
        style={{ margin: 5 }}
        href={this.props.item.url}
      >
        <ListItemIcon>
          <Avatar>{this.props.item.label[0].toUpperCase()}</Avatar>
        </ListItemIcon>
        <ListItemText
          primary={this.props.item.label}
          //   secondary={this.props.item.url.toLowerCase()}
        />

        {this.state.isMouseInside ? (
          <ListItemSecondaryAction>
            <IconButton
              onClick={() =>
                this.props.onChangeDialogStatus({
                  type: "editCardItem",
                  active: true,
                })
              }
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </ListItemSecondaryAction>
        ) : null}
      </ListItem>
    );
  }
}

export default CategoryCardItem;

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
  CardActions,
  ListItemAvatar,
  Paper,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditCardItemDialog from "./EditCardItemDialog";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import Label from "@material-ui/icons/Label";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

class CategoryCardItem extends Component {
  state = {
    isMouseInside: false,
  };

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
    console.log(this.state.isMouseInside);
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
    console.log(this.state.isMouseInside);
  };

  render() {
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <ListItem
          alignItems="center"
          selected
          button
          disableGutters
          dense
          divider
          style={{
            padding: "5px 5px 5px 5px",
            margin: "3px 0px 3px 0px",
            borderRadius: "0px",
            border: "1px solid rgba(255, 255, 255, .4)",
            backgroundColor: "transparent",
            // boxShadow:
            //   "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
          }}
          onClick={() => window.open(this.props.item.url, "_self")}
        >
          <ListItemIcon style={{ margin: "0px 0px 0px 5px" }}>
            <Avatar
              //src="https://www.facebook.com/favicon.ico"
              sizes="small"
              style={{ width: "20px", height: "20px" }}
            >
              <Typography variant="caption">
                {this.props.item.label[0].toUpperCase()}
              </Typography>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            style={{
              padding: "0px 0px 0px 0px",
              margin: "2px 0px 2px 0px",
              color: "white",
            }}
            primary={this.props.item.label}
          />

          {this.state.isMouseInside ? (
            <ListItemSecondaryAction>
              <IconButton
                onClick={() =>
                  this.props.onChangeDialogStatus({
                    selectedId: this.props.item.id,
                    type: "editCardItem",
                    active: true,
                  })
                }
              >
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          ) : null}

          {/* <CardActionArea href={this.props.item.url}>
          <CardHeader
            avatar={
              <Avatar sizes="small">
                {this.props.item.label[0].toUpperCase()}
              </Avatar>
            }
            title={this.props.item.label}
            subheader={
              <Typography
                no
                wrap
                variant="caption"
                inputProps={{ maxLength: 12 }}
              >
                {this.props.item.url.toLowerCase()}
              </Typography>
            }
            action={
              this.state.isMouseInside ? (
                <IconButton
                  style={{ zIndex: "9999" }}
                  onClick={() =>
                    this.props.onChangeDialogStatus({
                      type: "editCardItem",
                      active: true,
                    })
                  }
                >
                  <EditOutlinedIcon fontSize="small" />
                </IconButton>
              ) : null
            }
          ></CardHeader>
        </CardActionArea> */}
        </ListItem>
      </div>
    );
  }
}

export default CategoryCardItem;

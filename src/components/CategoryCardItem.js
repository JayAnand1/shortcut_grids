import React, { Component } from "react";
import {
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  IconButton,
  Typography,
  ListItem,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

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
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <ListItem
          button
          disableGutters
          dense
          divider
          style={{
            padding: "5px 5px 5px 5px",
            margin: "3px 0px 3px 0px",
            borderRadius: "0px",
            border: "1px solid rgba(0, 0, 0, .1)",
            backgroundColor: "transparent",
          }}
          onClick={() => window.open(this.props.item.url, "_self")}
        >
          <div>
            <ListItemIcon style={{ margin: "0px 0px 0px 5px" }}>
              <Avatar
                src={this.props.item.url + "/favicon.ico"}
                sizes="small"
                style={{ width: "20px", height: "20px" }}
              >
                <Typography variant="caption">
                  {this.props.item.label[0].toUpperCase()}
                </Typography>
              </Avatar>
            </ListItemIcon>
          </div>

          <ListItemText
            style={{
              padding: "0px 0px 0px 0px",
              margin: "2px 0px 2px 0px",
              color: "black",
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

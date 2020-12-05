import "./App.css";
import React, { useState, Component } from "react";
import { Container } from "@material-ui/core";
import TopBar from "./components/TopBar";
import Body from "./components/Body";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AddCard from "./components/AddCard";
import { Grid, Typography } from "@material-ui/core";
import FavouriteCard from "./components/FavouriteCard";
import { Favorite, TodayOutlined } from "@material-ui/icons";



class App extends Component {

  state = {
    favouriteCards: [], // {label, url, color, icon}
    dialogStatus: { type: '', active: false }, // {type, active}
    showSnackBar: false,
    snackBarMessage: "",
    snackBarSeverity: ""
  }

  updateList = (newList) => {
    localStorage.setItem('favourites', JSON.stringify(newList));
  }

  handleSnackBar = (message, severity) => {
    this.setState({ showSnackBar: true });
    this.setState({ snackBarMessage: message, snackBarSeverity: severity });
  }

  handleDelete = (id) => {
    console.log(id);
    let newList = this.state.favouriteCards.filter((item) => item.id !== id);
    console.log(newList);
    this.setState({ favouriteCards: newList });
    this.updateList(newList);
    this.handleSnackBar("Deleted Successfully", "info");
  }

  handleNewCard = (favouriteCard, dialog) => {
    console.log(favouriteCard);
    const newFavouriteCards = this.state.favouriteCards.concat(favouriteCard);
    this.setState({ favouriteCards: newFavouriteCards });
    localStorage.setItem('favourites', JSON.stringify(newFavouriteCards));
    this.handleSnackBar("Added Successfully", "success");
    this.handleDialogStatus(dialog);
  }

  handleDialogStatus = (dialog) => {
    this.setState({ dialogStatus: dialog });
  }

  componentDidMount() {
    var favourites = localStorage.getItem('favourites');
    var favouriteCards = JSON.parse(favourites) ?? [];
    this.setState({ favouriteCards });
  }



  render() {
    const { dialogStatus } = this.state.dialogStatus;
    return (
      <Container maxWidth="lg">
        <TopBar
          onChangeDialogStatus={this.handleDialogStatus}
        />
        {this.state.dialogStatus.type === 'Add' && this.state.dialogStatus.active && (
          <AddCard
            onAddNewCard={this.handleNewCard}
            onChangeDialogStatus={this.handleDialogStatus}
          />
        )}
        <Grid container spacing={2} direction="row" alignItems="stretch">
          {this.state.favouriteCards.map((item) => (
            <FavouriteCard item={item} key={item.id} onDelete={this.handleDelete} />
          ))}
        </Grid>
        {/* <Body favouriteCards={this.state.favouriteCards}  /> */}

        <Snackbar
          open={this.state.showSnackBar}
          autoHideDuration={3000}
          onClose={() => this.setState({ showSnackBar: !this.state.showSnackBar })}
        >
          <MuiAlert onClose={() => !this.state.showSnackBar} elevation={6} variant="filled" severity={this.state.snackBarSeverity}>{this.state.snackBarMessage}</MuiAlert>

        </Snackbar>

      </Container>
    );
  }
}

export default App;

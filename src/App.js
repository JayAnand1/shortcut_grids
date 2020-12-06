import "./App.css";
import React, { Component } from "react";
import { Container } from "@material-ui/core";
import TopBar from "./components/TopBar";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AddCategory from "./components/AddCategory";
import { Grid } from "@material-ui/core";
import CategoryCard from "./components/CategoryCard";
import AddBookmark from "./components/AddBookmark";


class App extends Component {

  state = {
    categories: [], // {label, url, color, icon} {categoryLabel : "", bookmarks : [{ label, }], id: }
    dialogStatus: { type: '', active: false }, // {type, active}
    showSnackBar: false,
    snackBarMessage: "",
    snackBarSeverity: "",
    selectedCategoryId: null,
  }

  updateList = (newList) => {
    localStorage.setItem('categories', JSON.stringify(newList));
  }

  handleNewBookmark = (bookmark, id, dialog) => {
    var category = this.state.categories.filter((category) => category.id === id)[0];
    category['bookmarks'] = category['bookmarks'].concat(bookmark)
    var newCategories = this.state.categories;
    for (var i = 0; i < newCategories.length; i++) {
      if (newCategories[i].id === category.id) {
        newCategories[i] = category;
      }
    }
    this.setState({ categories: newCategories });
    console.log(newCategories);
    this.updateList(newCategories);
    this.handleSnackBar(`Add Bookmark to ${category.category}`, "info");
    this.handleDialogStatus(dialog);
  }

  handleSnackBar = (message, severity) => {
    this.setState({ showSnackBar: true });
    this.setState({ snackBarMessage: message, snackBarSeverity: severity });
  }

  handleDelete = (id) => {
    let newList = this.state.categories.filter((item) => item.id !== id);
    this.setState({ categories: newList });
    this.updateList(newList);
    this.handleSnackBar("Deleted Successfully", "info");
  }

  handleNewCategory = (category, dialog) => {
    const newCategories = this.state.categories.concat(category);
    this.setState({ categories: newCategories });
    this.updateList(newCategories);
    this.handleSnackBar("Added Successfully", "success");
    this.handleDialogStatus(dialog);
  }

  handleNewBookmarkDialog = (categoryId, dialog) => {
    this.handleSelectedCategoryId(categoryId);
    this.handleDialogStatus(dialog);
  }

  handleDialogStatus = (dialog) => {
    this.setState({ dialogStatus: dialog });
  }

  handleSelectedCategoryId = (id) => {
    this.setState({ selectedCategoryId: id });
  }

  componentDidMount() {
    var categories = localStorage.getItem('categories');
    var categories = JSON.parse(categories) ?? [];
    this.setState({ categories });
  }



  render() {
    return (
      <Container maxWidth="lg">
        <TopBar
          onChangeDialogStatus={this.handleDialogStatus}
        />
        {this.state.dialogStatus.type === 'addCategory' && this.state.dialogStatus.active && (
          <AddCategory
            onAddNewCategory={this.handleNewCategory}
            onChangeDialogStatus={this.handleDialogStatus}
          />
        )}
        {this.state.dialogStatus.type === 'addBookmark' && this.state.dialogStatus.active && (
          <AddBookmark
            onAddNewBookmark={this.handleNewBookmark}
            onChangeDialogStatus={this.handleDialogStatus}
            categoryId={this.state.selectedCategoryId}
          />
        )}
        <Grid container spacing={2} direction="row" alignItems="stretch">
          {this.state.categories.map((item) => (
            <CategoryCard item={item} key={item.id} onDelete={this.handleDelete} onAddNewBookmarkDialog={this.handleNewBookmarkDialog}
            />
          ))}
        </Grid>

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

import "./App.css";
import React, { Component, state } from "react";
import { Container, Snackbar, Grid } from "@material-ui/core";
import TopBar from "./components/TopBar";
import MuiAlert from "@material-ui/lab/Alert";
import AddCategoryDialog from "./components/AddCategoryDialog";
import CategoryCard from "./components/CategoryCard";
import AddBookmarkDialog from "./components/AddBookmarkDialog";
import SettingsDialog from "./components/SettingsDialog";
import EditCardItemDialog from "./components/EditCardItemDialog";
import CategoryCardItem from "./components/CategoryCardItem";
import { ColorizeRounded } from "@material-ui/icons";
import EditCardCategoryDialog from "./components/EditCardCategoryDialog";

class App extends Component {
  state = {
    categories: [], // {label, url, color, icon} {categoryLabel : "", categoryDescription : "",  bookmarks : [{ label, }], id: }
    dialogStatus: { type: "", active: false, selectedId: null }, // {type, active}
    showSnackBar: false,
    snackBarMessage: "",
    snackBarSeverity: "",
    selectedCategoryId: null,
    masterBackgroundColour: null,
    settings: {},
    selectedBookmark: null,
    selectedCategory: null
  };

  updateList = (newList) => {
    localStorage.setItem("categories", JSON.stringify(newList));
  };

  handleNewBookmark = (bookmark, id, dialog) => {
    var category = this.state.categories.filter(
      (category) => category.id === id
    )[0];
    category["bookmarks"] = category["bookmarks"].concat(bookmark);
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
  };

  handleSnackBar = (message, severity) => {
    this.setState({ showSnackBar: true });
    this.setState({ snackBarMessage: message, snackBarSeverity: severity });
  };

  handleDelete = (id) => {
    let newList = this.state.categories.filter((item) => item.id !== id);
    this.setState({ categories: newList });
    this.updateList(newList);
    this.handleSnackBar("Deleted Successfully", "info");
  };

  handleNewCategory = (category, dialog) => {
    const newCategories = this.state.categories.concat(category);
    this.setState({ categories: newCategories });
    this.updateList(newCategories);
    this.handleSnackBar("Added Successfully", "success");
    this.handleDialogStatus(dialog);
  };

  handleNewBookmarkDialog = (categoryId, dialog) => {
    this.handleSelectedCategoryId(categoryId);
    this.handleDialogStatus(dialog);
  };

  handleSettings = (categoryId, dialog) => {
    this.handleSelectedCategoryId(categoryId);
    this.handleDialogStatus(dialog);
    this.handleBackgroundColor();
  };

  handleBackgroundColour = (colour) => {
    const { settings } = this.state;
    settings.colour = colour;
    this.setState({ settings });
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  handleEditBookmark = (id) => {
    console.log(id);
    const { categories } = this.state;
    for (var i = 0; i < categories.length; i++) {
      for (var j = 0; j < categories[i].bookmarks.length; j++) {
        if (categories[i].bookmarks[j].id === id) {
          this.setState({ selectedBookmark: categories[i].bookmarks[j] });
          break;
        }
      }
    }
  };

  handleUpdateBookmark = (bookmark, dialog) => {
    const { categories } = this.state;
    for (var i = 0; i < categories.length; i++) {
      for (var j = 0; j < categories[i].bookmarks.length; j++) {
        if (categories[i].bookmarks[j].id === bookmark.id) {
          categories[i].bookmarks[j] = bookmark;
          this.setState({ categories });
          this.updateList(categories);
          break;
        }
      }
    }
    this.handleDialogStatus(dialog);
  };

  setCategory = (id) => {
    const { categories } = this.state;
    const category = categories.find(category => category.id === id);
    console.log(categories.find(category => category.id === id));
    console.log(category);
    this.setState({ selectedCategory: category });
  }

  handleCategoryDetails = (category, dialog) => {
    const { categories } = this.state;

    for (var i = 0; i < categories.length; i++) {
      if (categories[i].id === category.id) {
        categories[i] = category;
        break;
      }
    }
    this.setState({ categories });
    this.updateList(categories);
    this.handleDialogStatus(dialog);
  }

  handleDialogStatus = (dialog) => {
    this.setState({ dialogStatus: dialog });
    if (dialog.type === "editCardItem") {
      this.handleEditBookmark(dialog.selectedId);
    }
    if (dialog.type === "editCardCategory") {
      this.setCategory(dialog.selectedId);
    }
    console.log(dialog);
  };

  handleSelectedCategoryId = (id) => {
    this.setState({ selectedCategoryId: id });
  };

  handleDeleteBookMark = (id, dialog) => {
    const { categories } = this.state;
    for (var i = 0; i < categories.length; i++) {
      for (var j = 0; j < categories[i].bookmarks.length; j++) {
        if (categories[i].bookmarks[j].id === id) {
          categories[i].bookmarks = categories[i].bookmarks.filter(
            (bookmark) => bookmark.id !== id
          );
          this.setState({ categories });
          this.updateList(categories);
          break;
        }
      }
    }
    this.handleDialogStatus(dialog);
  };

  componentDidMount() {
    var categories = localStorage.getItem("categories");
    var categories = JSON.parse(categories) ?? [];
    var settings = JSON.parse(localStorage.getItem("settings")) ?? {
      colour: "backgroundColour1",
    };
    this.setState({ categories });
    this.setState({ settings });
  }

  render() {
    console.log(this.state.selectedCategory)
    return (
      <div className={this.state.settings.colour} style={{ paddingBottom: "20px" }}>
        <Container maxWidth="lg">
          <TopBar
            dialogComplete={this.state.dialogStatus.active}
            onChangeDialogStatus={this.handleDialogStatus}
          />
          {this.state.dialogStatus.type === "addCategory" &&
            this.state.dialogStatus.active && (
              <AddCategoryDialog
                onAddNewCategory={this.handleNewCategory}
                onChangeDialogStatus={this.handleDialogStatus}
              />
            )}
          {this.state.dialogStatus.type === "addBookmark" &&
            this.state.dialogStatus.active && (
              <AddBookmarkDialog
                onAddNewBookmark={this.handleNewBookmark}
                onChangeDialogStatus={this.handleDialogStatus}
                categoryId={this.state.selectedCategoryId}
              />
            )}
          {this.state.dialogStatus.type === "settings" &&
            this.state.dialogStatus.active && (
              <SettingsDialog
                onAddNewBookmark={this.handleSettings}
                onChangeDialogStatus={this.handleDialogStatus}
                onChangeBackgroundColour={this.handleBackgroundColour}
                masterBackgroundColour={this.state.settings.colour}
              />
            )}
          {this.state.dialogStatus.type === "editCardItem" &&
            this.state.dialogStatus.active && (
              <EditCardItemDialog
                onAddNewBookmark={this.handleNewBookmark}
                onChangeDialogStatus={this.handleDialogStatus}
                bookmark={this.state.selectedBookmark}
                onUpdateBookmark={this.handleUpdateBookmark}
                onDeleteBookmark={this.handleDeleteBookMark}
              />
            )}
          {this.state.dialogStatus.type === "editCardCategory" &&
            this.state.dialogStatus.active && (
              <EditCardCategoryDialog
                category={this.state.selectedCategory}
                onChangeCategoryDetails={this.handleCategoryDetails}
                onChangeDialogStatus={this.handleDialogStatus}
              />
            )}
          <Grid container spacing={1} direction="row" alignItems="stretch">
            {this.state.categories.map((item) => (
              <CategoryCard
                item={item}
                key={item.id}
                onDelete={this.handleDelete}
                onAddNewBookmarkDialog={this.handleNewBookmarkDialog}
                onChangeDialogStatus={this.handleDialogStatus}

              />
            ))}
          </Grid>
          <Snackbar
            open={this.state.showSnackBar}
            autoHideDuration={3000}
            onClose={() =>
              this.setState({ showSnackBar: !this.state.showSnackBar })
            }
          >
            <MuiAlert
              onClose={() => !this.state.showSnackBar}
              elevation={6}
              variant="filled"
              severity={this.state.snackBarSeverity}
            >
              {this.state.snackBarMessage}
            </MuiAlert>
          </Snackbar>
        </Container>
      </div>
    );
  }
}

export default App;

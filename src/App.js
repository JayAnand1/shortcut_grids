import "./App.css";
import React, { useState, Component } from "react";
import { Container } from "@material-ui/core";
import TopBar from "./components/TopBar";
import Body from "./components/Body";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AddCard from "./components/AddCard";

class App extends Component {

  state = {
    favouriteCards: [], // {label, url, color, icon}
    dialogStatus: { type: '', active: false }, // {type, active}
  }

  handleNewCard = (favouriteCard, dialog) => {
    console.log(favouriteCard);
    const newFavouriteCards = this.state.favouriteCards.concat(favouriteCard);
    this.setState({ favouriteCards: newFavouriteCards });
    localStorage.setItem('favourites', JSON.stringify(newFavouriteCards));
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
        <Body favouriteCards={this.state.favouriteCards} />
        {/* <Snackbar
          open={openSnackBar}
          autoHideDuration={3000}
          onClose={handleSnackBarClose}
        >
          <Alert onClose={handleSnackBarClose} severity="success">
            Shortcut Card Added Sucessfully!
        </Alert>
        </Snackbar> */}

      </Container>
    );
  }
}

export default App;

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// function App() {
//   const [inputURL, setInputURL] = useState("");
//   const [inputLabel, setInputLabel] = useState("");
//   const [inputURLList, setInputURLList] = useState([]);
//   const [openSnackBar, setOpenSnackBar] = useState(false);
//   const [snackbarSeverity, setSnackBarSeverity] = useState('');
//   const [snackBarMessage, setSnackBarMessage] = useState('');


//   const handleSnackBarClose = () => {
//     setOpenSnackBar(false);
//   };



//   return (
//     <Container maxWidth="lg">
//       <TopBar
//         inputURL={inputURL}
//         setInputURL={setInputURL}
//         inputLabel={inputLabel}
//         setInputLabel={setInputLabel}
//         inputURLList={inputURLList}
//         setInputURLList={setInputURLList}
//         setOpenSnackBar={setOpenSnackBar}

//       />
//       <Body inputURLList={inputURLList} />
//       <Snackbar
//         open={openSnackBar}
//         autoHideDuration={3000}
//         onClose={handleSnackBarClose}
//       >
//         <Alert onClose={handleSnackBarClose} severity="success">
//           Shortcut Card Added Sucessfully!
//         </Alert>
//       </Snackbar>

//     </Container>
//   );
// }

// export default App;

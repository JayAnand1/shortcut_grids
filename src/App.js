import "./App.css";
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import TopBar from "./components/TopBar";
import Body from "./components/Body";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [inputURL, setInputURL] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [inputURLList, setInputURLList] = useState([]);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleSnackBarClose = () => {
    setOpenSnackBar(false);
  };

  return (
    <Container maxWidth="lg">
      <TopBar
        inputURL={inputURL}
        setInputURL={setInputURL}
        inputLabel={inputLabel}
        setInputLabel={setInputLabel}
        inputURLList={inputURLList}
        setInputURLList={setInputURLList}
        setOpenSnackBar={setOpenSnackBar}
      />
      <Body inputURLList={inputURLList} />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          Shortcut Card Added Sucessfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;

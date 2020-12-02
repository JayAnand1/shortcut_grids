import "./App.css";
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import TopBar from "./components/TopBar";
import Body from "./components/Body";

function App() {
  const [inputURL, setInputURL] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [inputURLList, setInputURLList] = useState([]);

  return (
    <Container maxWidth="lg">
      <TopBar
        inputURL={inputURL}
        setInputURL={setInputURL}
        inputLabel={inputLabel}
        setInputLabel={setInputLabel}
        inputURLList={inputURLList}
        setInputURLList={setInputURLList}
      />
      <Body inputURLList={inputURLList} />
    </Container>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import SingleGrid from "./components/SingleGrid.js";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import TopBar from "./components/TopBar";
import Body from "./components/Body";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <TopBar />
        <SingleGrid />

        <Body />
      </div>
    </Container>
  );
}

export default App;

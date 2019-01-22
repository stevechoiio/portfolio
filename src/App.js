import React, { Component } from "react";

import "./App.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ScrollIntoView from "react-scroll-into-view";

const containerStyle = {
  borderWidth: "3",
  minHeight: "400px",
  borderStyle: "solid"
};

const Container = () => <div style={containerStyle}>image</div>;

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "92vh"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 style={centerStyle}>Steve Choi</h1>

          <i className="fas fa-arrow-down" />
        </div>
        <Container className="Container" />
        <h1>asdfasdf</h1>
        <Button>
          <i class="fas fa-at" />
        </Button>
        <Button>
          <i class="fab fa-github" />
        </Button>
        <Button>
          <i class="fas fa-file" />
        </Button>
        <h1>Copyright Steve</h1>
      </div>
    );
  }
}

export default App;

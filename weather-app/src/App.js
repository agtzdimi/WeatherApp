import React, { Component } from "react";
import "./App.css";
import "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>
            {
              "body { background-image: url(//t1.fmet1.com/images/bg/1/v2/bgImage_1.jpg?v=2); }"
            }
          </style>
        </Helmet>
        <NavigationBar />
        <h1>PAOK</h1>
      </div>
    );
  }
}

export default App;

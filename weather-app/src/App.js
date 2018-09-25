import React, { Component } from "react";
import "./App.css";
import "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";
import { Helmet } from "react-helmet";
import Weather from "./components/Weather";

var data = [
  { id: "1:00", value: "4", condition: "cloudy" },
  { id: "2:00", value: "0", condition: "snowy" },
  { id: "3:00", value: "-2", condition: "heavy snowy" }
];

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
        <Weather data={data} />
      </div>
    );
  }
}

export default App;

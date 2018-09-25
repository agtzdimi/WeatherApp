import React, { Component } from "react";
import "./App.css";
import "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";
import { Helmet } from "react-helmet";
import Weather from "./components/Weather";

var hours = [
  { id: "00:00", value: 1, condition: "Rainy" },
  { id: "01:00", value: 1, condition: "Cloudy" },
  { id: "02:00", value: 1, condition: "Snowy" },
  { id: "03:00", value: 1, condition: "Heavy snow" },
  { id: "04:00", value: 1, condition: "Rainy" },
  { id: "05:00", value: 1, condition: "Rainy" },
  { id: "06:00", value: 1, condition: "Rainy" },
  { id: "07:00", value: 1, condition: "Rainy" },
  { id: "08:00", value: 1, condition: "Rainy" },
  { id: "09:00", value: 1, condition: "Rainy" },
  { id: "10:00", value: 1, condition: "Rainy" },
  { id: "11:00", value: 1, condition: "Rainy" },
  { id: "12:00", value: 1, condition: "Rainy" },
  { id: "13:00", value: 1, condition: "Rainy" },
  { id: "14:00", value: 1, condition: "Rainy" },
  { id: "15:00", value: 1, condition: "Rainy" },
  { id: "16:00", value: 1, condition: "Rainy" },
  { id: "17:00", value: 1, condition: "Rainy" },
  { id: "18:00", value: 1, condition: "Rainy" },
  { id: "19:00", value: 1, condition: "Rainy" },
  { id: "20:00", value: 1, condition: "Rainy" },
  { id: "21:00", value: 1, condition: "Rainy" },
  { id: "22:00", value: 1, condition: "Rainy" },
  { id: "23:00", value: 1, condition: "Rainy" }
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
        <Weather data={hours} />
      </div>
    );
  }
}

export default App;

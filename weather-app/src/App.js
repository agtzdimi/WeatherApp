import React, { Component } from "react";
import "./App.css";
import "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";
import { Helmet } from "react-helmet";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    visibleHours: [
      { id: "08:00", value: 1, condition: "Rainy" },
      { id: "14:00", value: 1, condition: "Rainy" },
      { id: "20:00", value: 1, condition: "Rainy" },
      { id: "02:00", value: 1, condition: "Snowy" }
    ],

    midnightHours: [
      { id: "03:00", value: 1, condition: "Heavy snow" },
      { id: "04:00", value: 1, condition: "Rainy" },
      { id: "05:00", value: 1, condition: "Rainy" },
      { id: "06:00", value: 1, condition: "Rainy" },
      { id: "07:00", value: 1, condition: "Rainy" }
    ],

    morningHours: [
      { id: "09:00", value: 1, condition: "Rainy" },
      { id: "10:00", value: 1, condition: "Rainy" },
      { id: "11:00", value: 1, condition: "Rainy" },
      { id: "12:00", value: 1, condition: "Rainy" },
      { id: "13:00", value: 1, condition: "Rainy" }
    ],

    nounHours: [
      { id: "15:00", value: 1, condition: "Rainy" },
      { id: "16:00", value: 1, condition: "Rainy" },
      { id: "17:00", value: 1, condition: "Rainy" },
      { id: "18:00", value: 1, condition: "Rainy" },
      { id: "19:00", value: 1, condition: "Rainy" }
    ],

    afternoonHours: [
      { id: "21:00", value: 1, condition: "Rainy" },
      { id: "22:00", value: 1, condition: "Rainy" },
      { id: "23:00", value: 1, condition: "Rainy" },
      { id: "00:00", value: 1, condition: "Rainy" },
      { id: "01:00", value: 1, condition: "Cloudy" }
    ]
  };

  handleExpand = timeId => {
    let visibleHours = this.state.visibleHours;
    switch (timeId) {
      case "02:00":
        visibleHours = this.state.visibleHours.splice(
          4,
          0,
          ...this.state.midnightHours
        );
        this.setState({ visibleHours: this.state.visibleHours });
        break;
      case "08:00":
        visibleHours = this.state.visibleHours.splice(
          1,
          0,
          ...this.state.morningHours
        );
        this.setState({ visibleHours: this.state.visibleHours });
        break;
      case "14:00":
        visibleHours = this.state.visibleHours.splice(
          2,
          0,
          ...this.state.nounHours
        );
        this.setState({ visibleHours: this.state.visibleHours });
        break;
      case "20:00":
        visibleHours = this.state.visibleHours.splice(
          3,
          0,
          ...this.state.afternoonHours
        );
        this.setState({ visibleHours: this.state.visibleHours });
        break;
      default:
        break;
    }
  };

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
        <Weather onExpand={this.handleExpand} data={this.state.visibleHours} />
      </div>
    );
  }
}

export default App;

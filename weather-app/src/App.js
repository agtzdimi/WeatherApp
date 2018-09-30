import React, { Component } from "react";
import "./App.css";
import "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";
import { Helmet } from "react-helmet";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    isExpanded: [],

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

  initialHours = [...this.state.visibleHours];

  handleExpand = timeId => {
    let initialHours = [...this.initialHours];
    if (initialHours.filter(time => time.id !== timeId).length === 4) {
      return null;
    }
    let visibleHours = [...this.state.visibleHours];
    const index = visibleHours.findIndex(ind => ind.id === timeId);
    if (this.state.isExpanded.includes(timeId)) {
      const isExpandedIndex = this.state.isExpanded.findIndex(
        ind => ind === timeId
      );
      for (let i = 0; i < 5; i++) {
        visibleHours.splice(index + 1, 1);
      }
      this.setState({ visibleHours });
      this.state.isExpanded.splice(isExpandedIndex, 1);
      return null;
    }
    this.state.isExpanded.push(timeId);
    switch (timeId) {
      case "02:00":
        visibleHours.splice(index + 1, 0, ...this.state.midnightHours);
        this.setState({ visibleHours });
        break;
      case "08:00":
        visibleHours.splice(index + 1, 0, ...this.state.morningHours);
        this.setState({ visibleHours });
        break;
      case "14:00":
        visibleHours.splice(index + 1, 0, ...this.state.nounHours);
        this.setState({ visibleHours });
        break;
      case "20:00":
        visibleHours.splice(index + 1, 0, ...this.state.afternoonHours);
        this.setState({ visibleHours });
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

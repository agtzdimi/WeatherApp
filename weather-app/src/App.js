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
      {
        img: "./img/static/expand.svg",
        id: "08:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "./img/static/expand.svg",
        id: "14:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "./img/static/expand.svg",
        id: "20:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "./img/static/expand.svg",
        id: "02:00",
        value: 1,
        condition: "Snowy"
      }
    ],

    midnightHours: [
      {
        img: "",
        id: "03:00",
        value: 1,
        condition: "Heavy snow"
      },
      {
        img: "",
        id: "04:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "05:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "06:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "07:00",
        value: 1,
        condition: "Rainy"
      }
    ],

    morningHours: [
      {
        img: "",
        id: "09:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "10:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "11:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "12:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "13:00",
        value: 1,
        condition: "Rainy"
      }
    ],

    nounHours: [
      {
        img: "",
        id: "15:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "16:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "17:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "18:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "19:00",
        value: 1,
        condition: "Rainy"
      }
    ],

    afternoonHours: [
      {
        img: "",
        id: "21:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "22:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "23:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "00:00",
        value: 1,
        condition: "Rainy"
      },
      {
        img: "",
        id: "01:00",
        value: 1,
        condition: "Cloudy"
      }
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

  getSystemDate = daysAfterToday => {
    let today = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      { id: 1, name: "January", days: 31 },
      { id: 2, name: "February", days: 28 },
      { id: 3, name: "March", days: 31 },
      { id: 4, name: "April", days: 30 },
      { id: 5, name: "May", days: 31 },
      { id: 6, name: "June", days: 30 },
      { id: 7, name: "July", days: 31 },
      { id: 8, name: "August", days: 31 },
      { id: 9, name: "September", days: 30 },
      { id: 10, name: "October", days: 31 },
      { id: 11, name: "November", days: 30 },
      { id: 12, name: "December", days: 31 }
    ];
    let changeMonth = 1;
    if (today.getFullYear() % 4 === 0) {
      const febIndex = months.findIndex(obj => obj.id === 2);
      months[febIndex].days = 29;
    }
    const dayName = days[(today.getDate() + daysAfterToday) % 7];
    const dateNumber = this.getDateWithSuffix(
      today.getDate() + daysAfterToday,
      months,
      today
    );
    if (dateNumber[1] === "true") {
      changeMonth = 2;
    }
    const currentMonth = months
      .map(mon => {
        if (mon.id === today.getMonth() + changeMonth) {
          return mon.name;
        }
      })
      .filter(val => {
        if (val !== undefined) {
          return val;
        }
      });

    return `${dayName} ${dateNumber[0]} of ${currentMonth}`;
  };

  getDateWithSuffix = (number, months, today) => {
    let flag = "false";
    const monthTotalDays = months
      .map(mon => {
        if (mon.id === today.getMonth() + 1) {
          return mon.days;
        }
      })
      .filter(val => {
        if (val !== undefined) {
          return val;
        }
      });
    if (number > monthTotalDays) {
      flag = "true";
      number = number - monthTotalDays;
    }
    let monthSuffixNumber = number % 10;
    switch (monthSuffixNumber) {
      case 1:
        return [`${number}st`, flag];
      case 2:
        return [`${number}nd`, flag];
      case 3:
        return [`${number}rd`, flag];
      default:
        return [`${number}th`, flag];
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
        <Weather
          onExpand={this.handleExpand}
          data={this.state.visibleHours}
          date={this.getSystemDate(0)}
        />
        <Weather
          onExpand={this.handleExpand}
          data={this.state.visibleHours}
          date={this.getSystemDate(1)}
        />
        <Weather
          onExpand={this.handleExpand}
          data={this.state.visibleHours}
          date={this.getSystemDate(2)}
        />
        <Weather
          onExpand={this.handleExpand}
          data={this.state.visibleHours}
          date={this.getSystemDate(3)}
        />
        <Weather
          onExpand={this.handleExpand}
          data={this.state.visibleHours}
          date={this.getSystemDate(4)}
        />
        <Weather
          onExpand={this.handleExpand}
          data={this.state.visibleHours}
          date={this.getSystemDate(5)}
        />
      </div>
    );
  }
}

export default App;

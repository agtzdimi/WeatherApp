import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class Weather extends Component {
  conditionFormat = (cell, row) => {
    const conditionFormat = "./img/animated/";
    switch (cell) {
      case "Snowy":
        return '<img src="' + conditionFormat + 'snowy-4.svg">' + cell;
      case "Rainy":
        return '<img src="' + conditionFormat + 'rainy-4.svg">' + cell;
      case "Cloudy":
        return '<img src="' + conditionFormat + 'cloudy.svg">' + cell;
      case "Heavy snow":
        return '<img src="' + conditionFormat + 'snowy-6.svg">' + cell;
      default:
        return '<img src="' + conditionFormat + 'day.svg">' + cell;
    }
  };

  clockFormat = (cell, row) => {
    const clockPath = "./img/clock/";
    const clockFormat = "width=64 height=64>";

    switch (cell) {
      case "00:00":
        return (
          cell + '<img src="' + clockPath + "0 o'clock.png\"" + clockFormat
        );
      case "01:00":
        return (
          cell + '<img src="' + clockPath + "1 o'clock.png\"" + clockFormat
        );
      case "02:00":
        return (
          cell + '<img src="' + clockPath + "2 o'clock.png\"" + clockFormat
        );
      case "03:00":
        return (
          cell + '<img src="' + clockPath + "3 o'clock.png\"" + clockFormat
        );
      case "04:00":
        return (
          cell + '<img src="' + clockPath + "4 o'clock.png\"" + clockFormat
        );
      case "05:00":
        return (
          cell + '<img src="' + clockPath + "5 o'clock.png\"" + clockFormat
        );
      case "06:00":
        return (
          cell + '<img src="' + clockPath + "6 o'clock.png\"" + clockFormat
        );
      case "07:00":
        return (
          cell + '<img src="' + clockPath + "7 o'clock.png\"" + clockFormat
        );
      case "08:00":
        return (
          cell + '<img src="' + clockPath + "8 o'clock.png\"" + clockFormat
        );
      case "09:00":
        return (
          cell + '<img src="' + clockPath + "9 o'clock.png\"" + clockFormat
        );
      case "10:00":
        return (
          cell + '<img src="' + clockPath + "10 o'clock.png\"" + clockFormat
        );
      case "11:00":
        return (
          cell + '<img src="' + clockPath + "11 o'clock.png\"" + clockFormat
        );
      case "12:00":
        return (
          cell + '<img src="' + clockPath + "12 o'clock.png\"" + clockFormat
        );
      case "13:00":
        return (
          cell + '<img src="' + clockPath + "13 o'clock.png\"" + clockFormat
        );
      case "14:00":
        return (
          cell + '<img src="' + clockPath + "14 o'clock.png\"" + clockFormat
        );
      case "15:00":
        return (
          cell + '<img src="' + clockPath + "15 o'clock.png\"" + clockFormat
        );
      case "16:00":
        return (
          cell + '<img src="' + clockPath + "16 o'clock.png\"" + clockFormat
        );
      case "17:00":
        return (
          cell + '<img src="' + clockPath + "17 o'clock.png\"" + clockFormat
        );
      case "18:00":
        return (
          cell + '<img src="' + clockPath + "18 o'clock.png\"" + clockFormat
        );
      case "19:00":
        return (
          cell + '<img src="' + clockPath + "19 o'clock.png\"" + clockFormat
        );
      case "20:00":
        return (
          cell + '<img src="' + clockPath + "20 o'clock.png\"" + clockFormat
        );
      case "21:00":
        return (
          cell + '<img src="' + clockPath + "21 o'clock.png\"" + clockFormat
        );
      case "22:00":
        return (
          cell + '<img src="' + clockPath + "22 o'clock.png\"" + clockFormat
        );
      case "23:00":
        return (
          cell + '<img src="' + clockPath + "23 o'clock.png\"" + clockFormat
        );
      default:
        return cell;
    }
  };

  expandFormat = cell => {
    return <img src={cell} width="10" height="10" />;
  };

  getDateWithSuffix = number => {
    let monthSuffixNumber = number % 10;
    switch (monthSuffixNumber) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
      default:
        return number + "th";
    }
  };

  getSystemDate = () => {
    let today = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      days[today.getDay()] +
      " " +
      this.getDateWithSuffix(today.getDate()) +
      " of " +
      months[today.getMonth()]
    );
  };

  render() {
    const options = {
      onRowClick: row => this.props.onExpand(row["id"])
    };
    return (
      <div
        style={{
          width: "50%",
          borderRadius: "5px",
          margin: "0px auto",
          float: "none"
        }}
      >
        <BootstrapTable
          bordered="false"
          height="800px"
          data={this.props.data}
          options={options}
          ref="table"
        >
          <TableHeaderColumn
            dataField="img"
            dataFormat={this.expandFormat}
            width="5%"
          />
          <TableHeaderColumn isKey dataField="id" dataFormat={this.clockFormat}>
            {this.getSystemDate()}
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="value"
            dataFormat={(cell, row) => cell + "°C"}
          />
          <TableHeaderColumn
            dataField="condition"
            dataFormat={this.conditionFormat}
          >
            Dawn: 07:22 - Rise 19:12
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Weather;

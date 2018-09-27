import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const weatherMap = {
  "01:00": "PAOK",
  "03:00": "PAOKARA"
};

function format(cell, row) {
  switch (cell) {
    case "Snowy":
      return '<img src="./img/animated/snowy-4.svg">' + cell;
    case "Rainy":
      return '<img src="./img/animated/rainy-4.svg">' + cell;
    case "Cloudy":
      return '<img src="./img/animated/cloudy.svg">' + cell;
    case "Heavy snow":
      return '<img src="./img/animated/snowy-6.svg">' + cell;
    default:
      return '<img src="./img/animated/day.svg">' + cell;
  }
}

function clockFormat(cell, row) {
  switch (cell) {
    case "00:00":
      return cell + '<img src="./img/clock/0 o\'clock.png" width=64 height=64>';
    case "01:00":
      return cell + '<img src="./img/clock/1 o\'clock.png" width=64 height=64>';
    case "02:00":
      return cell + '<img src="./img/clock/2 o\'clock.png" width=64 height=64>';
    case "03:00":
      return cell + '<img src="./img/clock/3 o\'clock.png" width=64 height=64>';
    case "04:00":
      return cell + '<img src="./img/clock/4 o\'clock.png" width=64 height=64>';
    case "05:00":
      return cell + '<img src="./img/clock/5 o\'clock.png" width=64 height=64>';
    case "06:00":
      return cell + '<img src="./img/clock/6 o\'clock.png" width=64 height=64>';
    case "07:00":
      return cell + '<img src="./img/clock/7 o\'clock.png" width=64 height=64>';
    case "08:00":
      return cell + '<img src="./img/clock/8 o\'clock.png" width=64 height=64>';
    case "09:00":
      return cell + '<img src="./img/clock/9 o\'clock.png" width=64 height=64>';
    case "10:00":
      return (
        cell + '<img src="./img/clock/10 o\'clock.png" width=64 height=64>'
      );
    case "11:00":
      return (
        cell + '<img src="./img/clock/11 o\'clock.png" width=64 height=64>'
      );
    case "12:00":
      return (
        cell + '<img src="./img/clock/12 o\'clock.png" width=64 height=64>'
      );
    case "13:00":
      return (
        cell + '<img src="./img/clock/13 o\'clock.png" width=64 height=64>'
      );
    case "14:00":
      return (
        cell + '<img src="./img/clock/14 o\'clock.png" width=64 height=64>'
      );
    case "15:00":
      return (
        cell + '<img src="./img/clock/15 o\'clock.png" width=64 height=64>'
      );
    case "16:00":
      return (
        cell + '<img src="./img/clock/16 o\'clock.png" width=64 height=64>'
      );
    case "17:00":
      return (
        cell + '<img src="./img/clock/17 o\'clock.png" width=64 height=64>'
      );
    case "18:00":
      return (
        cell + '<img src="./img/clock/18 o\'clock.png" width=64 height=64>'
      );
    case "19:00":
      return (
        cell + '<img src="./img/clock/19 o\'clock.png" width=64 height=64>'
      );
    case "20:00":
      return (
        cell + '<img src="./img/clock/20 o\'clock.png" width=64 height=64>'
      );
    case "21:00":
      return (
        cell + '<img src="./img/clock/21 o\'clock.png" width=64 height=64>'
      );
    case "22:00":
      return (
        cell + '<img src="./img/clock/22 o\'clock.png" width=64 height=64>'
      );
    case "23:00":
      return (
        cell + '<img src="./img/clock/23 o\'clock.png" width=64 height=64>'
      );
    default:
      return cell;
  }
}

function celciusFormat(cell, row) {
  return cell + "°C";
}

function isExpandableRow(row) {
  return row["id"] in weatherMap;
}

function expandRow(row) {
  return (
    <p>
      {row["id"]} {weatherMap[row["id"]]}.
    </p>
  );
}

class Weather extends Component {
  render() {
    const options = {
      expandRowBgColor: "red",
      expanding: [1] // initially expanded
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
          height="228px"
          data={this.props.data}
          expandableRow={isExpandableRow}
          expandComponent={expandRow}
          options={options}
        >
          <TableHeaderColumn isKey dataField="id" dataFormat={clockFormat}>
            Thursday 27 of September
          </TableHeaderColumn>
          <TableHeaderColumn dataField="value" dataFormat={celciusFormat} />
          <TableHeaderColumn dataField="condition" dataFormat={format}>
            Dawn: 07:22 - Rise 19:12
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Weather;

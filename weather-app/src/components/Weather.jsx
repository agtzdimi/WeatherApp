import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

function conditionFormat(cell, row) {
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
}

function clockFormat(cell, row) {
  const clockPath = "./img/clock/";
  const clockFormat = "width=64 height=64>";

  switch (cell) {
    case "00:00":
      return cell + '<img src="' + clockPath + "0 o'clock.png\"" + clockFormat;
    case "01:00":
      return cell + '<img src="' + clockPath + "1 o'clock.png\"" + clockFormat;
    case "02:00":
      return cell + '<img src="' + clockPath + "2 o'clock.png\"" + clockFormat;
    case "03:00":
      return cell + '<img src="' + clockPath + "3 o'clock.png\"" + clockFormat;
    case "04:00":
      return cell + '<img src="' + clockPath + "4 o'clock.png\"" + clockFormat;
    case "05:00":
      return cell + '<img src="' + clockPath + "5 o'clock.png\"" + clockFormat;
    case "06:00":
      return cell + '<img src="' + clockPath + "6 o'clock.png\"" + clockFormat;
    case "07:00":
      return cell + '<img src="' + clockPath + "7 o'clock.png\"" + clockFormat;
    case "08:00":
      return cell + '<img src="' + clockPath + "8 o'clock.png\"" + clockFormat;
    case "09:00":
      return cell + '<img src="' + clockPath + "9 o'clock.png\"" + clockFormat;
    case "10:00":
      return cell + '<img src="' + clockPath + "10 o'clock.png\"" + clockFormat;
    case "11:00":
      return cell + '<img src="' + clockPath + "11 o'clock.png\"" + clockFormat;
    case "12:00":
      return cell + '<img src="' + clockPath + "12 o'clock.png\"" + clockFormat;
    case "13:00":
      return cell + '<img src="' + clockPath + "13 o'clock.png\"" + clockFormat;
    case "14:00":
      return cell + '<img src="' + clockPath + "14 o'clock.png\"" + clockFormat;
    case "15:00":
      return cell + '<img src="' + clockPath + "15 o'clock.png\"" + clockFormat;
    case "16:00":
      return cell + '<img src="' + clockPath + "16 o'clock.png\"" + clockFormat;
    case "17:00":
      return cell + '<img src="' + clockPath + "17 o'clock.png\"" + clockFormat;
    case "18:00":
      return cell + '<img src="' + clockPath + "18 o'clock.png\"" + clockFormat;
    case "19:00":
      return cell + '<img src="' + clockPath + "19 o'clock.png\"" + clockFormat;
    case "20:00":
      return cell + '<img src="' + clockPath + "20 o'clock.png\"" + clockFormat;
    case "21:00":
      return cell + '<img src="' + clockPath + "21 o'clock.png\"" + clockFormat;
    case "22:00":
      return cell + '<img src="' + clockPath + "22 o'clock.png\"" + clockFormat;
    case "23:00":
      return cell + '<img src="' + clockPath + "23 o'clock.png\"" + clockFormat;
    default:
      return cell;
  }
}

class Weather extends Component {
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
          height="228px"
          data={this.props.data}
          options={options}
          ref="table"
        >
          <TableHeaderColumn isKey dataField="id" dataFormat={clockFormat}>
            Thursday 27 of September
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="value"
            dataFormat={(cell, row) => cell + "°C"}
          />
          <TableHeaderColumn dataField="condition" dataFormat={conditionFormat}>
            Dawn: 07:22 - Rise 19:12
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Weather;

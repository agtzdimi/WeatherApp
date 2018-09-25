import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const weatherMap = {
  "1:00": "Temp 1",
  "3:00": "Temp 2"
};

const imgPath = "./img/animated/";

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
      <div>
        <BootstrapTable
          data={this.props.data}
          expandableRow={isExpandableRow}
          expandComponent={expandRow}
          expandColumnOptions={{ expandColumnVisible: true }}
          options={options}
        >
          <TableHeaderColumn isKey dataField="id">
            Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField="value">Temperature</TableHeaderColumn>
          <TableHeaderColumn dataField="condition" dataFormat={format}>
            State
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Weather;

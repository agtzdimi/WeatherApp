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
    return (
      cell +
      '<img src="' +
      clockPath +
      cell.substr(0, 2) +
      " o'clock.png\"" +
      clockFormat
    );
  };

  expandFormat = cell => {
    return <img src={cell} width="10" height="10" />;
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
          height="10%"
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
            {this.props.date}
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="value"
            dataFormat={(cell, row) => cell + "°C"}
            width="15%"
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

import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const weatherMap = {
  "1:00": "Temp 1",
  "3:00": "Temp 2"
};

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
  state = {
    hours: [
      { id: "00:00", value: 1, condition: "rainy" },
      { id: "01:00", value: 1, condition: "rainy" },
      { id: "02:00", value: 1, condition: "rainy" },
      { id: "03:00", value: 1, condition: "rainy" },
      { id: "04:00", value: 1, condition: "rainy" },
      { id: "05:00", value: 1, condition: "rainy" },
      { id: "06:00", value: 1, condition: "rainy" },
      { id: "07:00", value: 1, condition: "rainy" },
      { id: "08:00", value: 1, condition: "rainy" },
      { id: "09:00", value: 1, condition: "rainy" },
      { id: "10:00", value: 1, condition: "rainy" },
      { id: "11:00", value: 1, condition: "rainy" },
      { id: "12:00", value: 1, condition: "rainy" },
      { id: "13:00", value: 1, condition: "rainy" },
      { id: "14:00", value: 1, condition: "rainy" },
      { id: "15:00", value: 1, condition: "rainy" },
      { id: "16:00", value: 1, condition: "rainy" },
      { id: "17:00", value: 1, condition: "rainy" },
      { id: "18:00", value: 1, condition: "rainy" },
      { id: "19:00", value: 1, condition: "rainy" },
      { id: "20:00", value: 1, condition: "rainy" },
      { id: "21:00", value: 1, condition: "rainy" },
      { id: "22:00", value: 1, condition: "rainy" },
      { id: "23:00", value: 1, condition: "rainy" }
    ]
  };

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
          <TableHeaderColumn dataField="condition">State</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Weather;

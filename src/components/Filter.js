import React, { Component } from "react";
import FilterList from "./FilterList";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <p>Filter</p>
        <div>
          <FilterList style={{ width: "50%" }} />
        </div>
      </div>
    );
  }
}

export default Filter;

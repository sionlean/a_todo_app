import React, { Component } from "react";
import FilterList from "./FilterList";

class Filter extends Component {
  state = {};

  render() {
    const { filter, currentFilter } = this.props;
    return (
      <div className="filter">
        <p>Filter</p>
        <div>
          <FilterList
            style={{ width: "50%" }}
            filter={filter}
            currentFilter={currentFilter}
          />
        </div>
      </div>
    );
  }
}

export default Filter;

import React, { Component } from "react";
import FilterList from "./FilterList";

class Filter extends Component {
  state = {};

  render() {
    const { colors, filter } = this.props;
    return (
      <div className="filter">
        <p>Filter</p>
        <div>
          <FilterList
            style={{ width: "50%" }}
            colors={colors}
            curCat={filter}
          />
        </div>
      </div>
    );
  }
}

export default Filter;

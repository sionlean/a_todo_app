import React, { Component } from "react";
import Category from "./Category";

class Filter extends Component {
  state = {};

  render() {
    const { colors, filter, filterOff } = this.props;
    return (
      <div className="filter">
        <p>Filter</p>
        <div className="flex">
          <Category style={{ width: "50%" }} colors={colors} curCat={filter} />
          <button onClick={filterOff} className="btn btn-danger">
            Off Filter
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;

import React, { Component } from "react";
import Category from "./Category";

class Filter extends Component {
  state = {};

  render() {
    return (
      <div className="filter">
        <p>Filter</p>
        <div className="flex">
          <Category
            style={{ width: "50%" }}
            colors={this.props.colors}
            curCat={this.props.filter}
          />
          <button onClick={this.props.filterOff} className="btn btn-danger">
            Off Filter
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;

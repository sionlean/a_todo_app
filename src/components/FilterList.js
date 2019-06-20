import React, { Component } from "react";
import { CATEGORIES, CATEGORY_INDEX, CATEGORY_ALL } from "../Constants";

class FilterList extends Component {
  state = {
    currentCategory: CATEGORY_ALL
  };

  select = color => {
    return color.name === "Others" ? "selected" : "";
  };

  handleChange = e => {
    const { filter } = this.props; //Filter : the chosen filter item will be bubbled up to App.js using filter function
    const categoryIndex = e.target.value;
    filter(categoryIndex); // Value brought up
    this.setState({ currentCategory: e.target.value });
  };

  render() {
    const { currentFilter } = this.props; // currentFilter : From App.js state propagate down
    return (
      <select
        className="selector selectpicker p-1 form-control"
        value={currentFilter}
        onChange={this.handleChange}
      >
        {Object.values(CATEGORY_INDEX).map(index => (
          <option
            key={index}
            value={index}
            style={{ background: CATEGORIES[index].color }}
          >
            {CATEGORIES[index].name}
          </option>
        ))}
        <option value={CATEGORY_ALL} style={{ background: "#999" }}>
          All
        </option>
      </select>
    );
  }
}

export default FilterList;

import React, { Component } from "react";
import { CATEGORIES, CATEGORY_INDEX } from "../Constants";

class Category extends Component {
  select = color => {
    return color.name === "Others" ? "selected" : "";
  };

  onChange = e => {
    const value = e.target.value;
    this.props.updateCategory(value);
  };

  render() {
    const { categoryIndex } = this.props;
    return (
      <select
        className="selector selectpicker p-1 form-control"
        value={categoryIndex}
        onChange={this.onChange}
      >
        {Object.values(CATEGORY_INDEX).map(index => (
          <option
            key={index}
            value={index} //Different from the name of the dropdown box
            style={{ background: CATEGORIES[index].color }}
          >
            {CATEGORIES[index].name}
          </option>
        ))}
      </select>
    );
  }
}

export default Category;

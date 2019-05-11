import React, { Component } from "react";

class Category extends Component {
  state = {
    curCat: "Others"
  };

  select = color => {
    return color.name === "Others" ? "selected" : "";
  };

  handleChange = e => {
    const cat = e.target.value;
    this.props.curCat(cat);
    this.setState({ curCat: e.target.value });
  };

  render() {
    return (
      <select
        className="selector selectpicker p-1 form-control"
        value={this.state.curCat}
        onChange={this.handleChange}
      >
        {this.props.colors.map(color => (
          <option
            key={color.name}
            value={color.name}
            style={{ background: color.color }}
          >
            {color.name}
          </option>
        ))}
      </select>
    );
  }
}

export default Category;

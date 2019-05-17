import React, { Component } from "react";

class FilterList extends Component {
  state = {
    curCat: "All"
  };

  select = color => {
    return color.name === "Others" ? "selected" : "";
  };

  handleChange = e => {
    const { curCat } = this.props;
    const cat = e.target.value;
    curCat(cat);
    this.setState({ curCat: e.target.value });
  };

  render() {
    const { colors } = this.props;
    return (
      <select
        className="selector selectpicker p-1 form-control"
        value={this.state.curCat}
        onChange={this.handleChange}
      >
        {colors.map(color => (
          <option
            key={color.name}
            value={color.name}
            style={{ background: color.color }}
          >
            {color.name}
          </option>
        ))}
        <option value="All" style={{ background: "#999" }}>
          All{" "}
        </option>
      </select>
    );
  }
}

export default FilterList;

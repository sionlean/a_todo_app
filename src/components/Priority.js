import React, { Component } from "react";
import { PRIORITY_INDEX, PRIORITY_LEVEL } from "../Constants";

class Priority extends Component {
  onChange = e => {
    const value = e.target.value;
    this.props.updatePriority(value);
  };

  render() {
    const { priorityIndex } = this.props;
    return (
      <select
        className="selector selectpicker p-1 form-control"
        onChange={this.onChange}
        value={priorityIndex}
      >
        {Object.values(PRIORITY_INDEX).map(index => (
          <option
            key={index}
            value={index}
            style={{
              color: "black",
              backgroundColor: PRIORITY_LEVEL[index].color
            }}
          >
            {PRIORITY_LEVEL[index].name}
          </option>
        ))}
      </select>
    );
  }
}

export default Priority;

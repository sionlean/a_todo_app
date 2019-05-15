import React, { Component } from "react";

class Priority extends Component {
  state = {
    priority: "Low Priority"
  };

  handleChange = e => {
    this.setState({ priority: e.target.value });
    this.props.handlePriority(e.target.value);
  };

  render() {
    const { priority } = this.props;
    return (
      <select
        className="selector selectpicker p-1 form-control"
        onChange={this.handleChange}
        value={this.state.priority}
      >
        {priority.map(pri => (
          <option
            key={pri.name}
            value={pri.name}
            style={{ color: "black", backgroundColor: pri.color }}
          >
            {pri.name}
          </option>
        ))}
      </select>
    );
  }
}

export default Priority;

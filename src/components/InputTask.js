import React, { Component } from "react";

class InputTask extends Component {
  onChange = e => {
    const value = e.target.value;
    this.props.updateTitle(value);
  };

  render() {
    return (
      <input
        className="rounded form-control"
        type="text"
        name="title"
        placeholder=" Type Something..."
        onChange={this.onChange}
        value={this.props.title}
        maxLength="135"
        required
      />
    );
  }
}

export default InputTask;

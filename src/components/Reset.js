import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    const { onReset } = this.props;
    return (
      <button
        onClick={onReset}
        style={{ border: "none", color: "white" }}
        className="btn navbar-btn reset"
      >
        Reset
      </button>
    );
  }
}

export default Reset;

import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          style={{ border: "none", color: "white" }}
          className="btn navbar-btn reset"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;

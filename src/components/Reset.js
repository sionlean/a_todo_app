import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-danger navbar-btn"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;

import React, { Component } from "react";

class ClearCompleted extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={this.props.clearCompleted}
        className="btn btn-danger btn-md"
      >
        Clear Completed
      </button>
    );
  }
}

export default ClearCompleted;

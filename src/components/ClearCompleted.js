import React, { Component } from "react";

class ClearCompleted extends Component {
  state = {};
  render() {
    const { clearCompleted } = this.props;
    return (
      <button onClick={clearCompleted} className="btn btn-danger btn-md">
        Clear Completed
      </button>
    );
  }
}

export default ClearCompleted;

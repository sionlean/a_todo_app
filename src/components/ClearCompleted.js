import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCompleted } from "../actions";

class ClearCompleted extends Component {
  render() {
    const { deleteCompleted } = this.props;
    return (
      <button onClick={deleteCompleted} className="btn btn-danger btn-md">
        Clear Completed
      </button>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  deleteCompleted: () => dispatch(deleteCompleted())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCompleted);

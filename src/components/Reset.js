import React, { Component } from "react";
import { connect } from "react-redux";
import { resetItem } from "../actions";

class Reset extends Component {
  render() {
    const { resetItem } = this.props;
    return (
      <button
        onClick={resetItem}
        style={{ border: "none", color: "white" }}
        className="btn navbar-btn reset"
      >
        Reset
      </button>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  resetItem: () => dispatch(resetItem())
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);

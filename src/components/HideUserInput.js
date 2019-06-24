import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInputHiddenState } from "../actions";

class HideUserInput extends Component {
  render() {
    const { userInputHiddenState, updateUserInputHiddenState } = this.props;
    let className = "fa showInputBtn fa-";
    userInputHiddenState ? (className += "minus") : (className += "plus");
    return (
      <button
        onClick={updateUserInputHiddenState}
        className="btn btn-dark btn-md showInput"
      >
        <span className={className} />
      </button>
    );
  }
}

const mapStateToProps = state => ({
  userInputHiddenState: state.updateUserInputHiddenState
});

const mapDispatchToProps = dispatch => ({
  updateUserInputHiddenState: () => dispatch(updateUserInputHiddenState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HideUserInput);

import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, updateTitle } from "../actions";
import Category from "./Category";
import Priority from "./Priority";
import InputTask from "./InputTask";

class UserInput extends Component {
  onSubmit = e => {
    e.preventDefault();
    const {
      categoryIndex,
      priorityIndex,
      title,
      updateTitle,
      addItem
    } = this.props;
    addItem(title, categoryIndex, priorityIndex);
    updateTitle("");
  };

  render() {
    const { userInputHiddenState } = this.props;
    let className = "form";
    if (!userInputHiddenState) className += " hide";
    return (
      <form
        className={className}
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "10px" }}
      >
        <InputTask />
        <Category />
        <Priority />
        <input style={{ flex: 1 }} className="btn submit" type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  title: state.updateTitle,
  categoryIndex: state.updateCategoryIndex,
  priorityIndex: state.updatePriorityIndex,
  userInputHiddenState: state.updateUserInputHiddenState
});

const mapDispatchToProps = dispatch => ({
  addItem: (title, categoryIndex, priorityIndex) =>
    dispatch(addItem(title, categoryIndex, priorityIndex)),
  updateTitle: title => dispatch(updateTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput);

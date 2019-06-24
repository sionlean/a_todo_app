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
    return (
      <form
        className="form"
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
  priorityIndex: state.updatePriorityIndex
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

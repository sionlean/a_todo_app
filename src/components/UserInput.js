import React, { Component } from "react";
import Category from "./Category";
import Priority from "./Priority";
import InputTask from "./InputTask";

class UserInput extends Component {
  state = {
    title: "",
    categoryIndex: "3",
    priorityIndex: "0"
  };

  onSubmit = e => {
    e.preventDefault();
    const { categoryIndex, priorityIndex, title } = this.state;
    this.props.addList(title, categoryIndex, priorityIndex);
    this.setState({ title: "" });
  };

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "10px" }}
      >
        <InputTask
          title={this.state.title}
          updateTitle={this.updateState.bind(this, "title")}
        />
        <Category
          categoryIndex={this.state.categoryIndex}
          updateCategory={this.updateState.bind(this, "categoryIndex")} // Understand Binding
        />
        <Priority
          priorityIndex={this.state.priorityIndex}
          updatePriority={this.updateState.bind(this, "priorityIndex")}
        />
        <input style={{ flex: 1 }} className="btn submit" type="submit" />
      </form>
    );
  }
}

export default UserInput;

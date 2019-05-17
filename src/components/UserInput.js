import React, { Component } from "react";
import Category from "./Category";
import Priority from "./Priority";

class UserInput extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addList(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    const { colors, curCat, priority, handlePriority } = this.props;
    return (
      <form
        className="form"
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "10px" }}
      >
        <input
          className="rounded form-control"
          type="text"
          name="title"
          placeholder=" Type Something..."
          onChange={this.onChange}
          value={this.state.title}
          maxLength="135"
          required
        />
        <Category colors={colors} curCat={curCat} />
        <Priority priority={priority} handlePriority={handlePriority} />
        <input style={{ flex: 1 }} className="btn submit" type="submit" />
      </form>
    );
  }
}

export default UserInput;

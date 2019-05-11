import React, { Component } from "react";
import Category from "./Category";

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
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "10px" }}
      >
        <input
          className="rounded form-control"
          style={{ flex: 5, padding: 10, height: "50px" }}
          type="text"
          name="title"
          placeholder=" Type Something..."
          onChange={this.onChange}
          value={this.state.title}
          maxLength="135"
          required
        />
        <Category colors={this.props.colors} curCat={this.props.curCat} />
        <input style={{ flex: 1 }} className="btn btn-primary" type="submit" />
      </form>
    );
  }
}

export default UserInput;

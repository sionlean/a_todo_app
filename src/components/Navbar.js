import React, { Component } from "react";
import UserInput from "./UserInput";
import Reset from "./Reset";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header" style={{ margin: "auto" }}>
              <p className="navbar-brand">To-Do List</p>
            </div>

            <Reset onReset={this.props.onReset} />
          </div>
        </nav>
        <UserInput
          addList={this.props.addList}
          colors={this.props.colors}
          curCat={this.props.curCat}
        />
      </div>
    );
  }
}

export default Navbar;

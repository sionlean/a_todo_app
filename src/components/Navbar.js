import React, { Component } from "react";
import UserInput from "./UserInput";
import Reset from "./Reset";

class Navbar extends Component {
  state = {};

  render() {
    const {
      addList,
      colors,
      curCat,
      priority,
      handlePriority,
      onReset
    } = this.props;
    return (
      <div className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header" style={{ margin: "auto" }}>
              <p className="navbar-brand">To-Do List</p>
            </div>

            <Reset onReset={onReset} />
          </div>
        </nav>
        <UserInput
          addList={addList}
          colors={colors}
          curCat={curCat}
          priority={priority}
          handlePriority={handlePriority}
        />
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import UserInput from "./UserInput";
import HideSideNav from "./HideSideNav";
import HideUserInput from "./HideUserInput";
import Reset from "./Reset";
import logo from "../logo.svg";

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
            <HideSideNav />
            <div className="navbar-header" style={{ margin: "auto" }}>
              <div className="cover">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p className="navbar-brand">
                To-Do List <HideUserInput />
              </p>
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

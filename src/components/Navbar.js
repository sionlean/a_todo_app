import React, { Component } from "react";
import UserInput from "./UserInput";
import HideSideNav from "./HideSideNav";
import HideUserInput from "./HideUserInput";
import Reset from "./Reset";
import logo from "../logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="cover" />
            <div className="navbar-header">
              <div className="navItem">
                <HideSideNav className="navItem" />
              </div>

              <div className="filler" />

              <p className="title navItem">To-Do List</p>
              <div className="navItem">
                <HideUserInput className="navItem" />
              </div>
              <div className="navItem">
                <Reset />
              </div>

              <div className="filler" />

              <img src={logo} className="App-logo navItem" alt="logo" />
            </div>
          </div>
        </nav>
        <UserInput />
      </div>
    );
  }
}

export default Navbar;

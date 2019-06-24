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
            <HideSideNav />
            <div className="cover">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="navbar-header">
              <p className="navbar-brand">
                To-Do List <HideUserInput />
              </p>
              <Reset />
            </div>
          </div>
        </nav>
        <UserInput />
      </div>
    );
  }
}

export default Navbar;

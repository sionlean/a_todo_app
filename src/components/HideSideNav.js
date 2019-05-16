import React, { Component } from "react";

class HideSideNav extends Component {
  state = {};

  addShow = () => {
    const sideNav = document.getElementsByClassName("sidenav");
    const btn = document.getElementsByClassName("sideBtn");
    sideNav[0].classList.toggle("remove");
    btn[0].classList.toggle("btn-danger");
  };

  styleBtn = {
    borderRadius: "10px"
  };

  render() {
    return (
      <button
        onClick={this.addShow}
        style={this.styleBtn}
        className="btn btn-success btn-danger sideBtn"
      >
        Side Navigation
      </button>
    );
  }
}

export default HideSideNav;

import React, { Component } from "react";

class HideUserInput extends Component {
  toggleInput = () => {
    const form = document.getElementsByClassName("form");
    const btn = document.getElementsByClassName("showInputBtn");
    const flex = document.getElementsByClassName("flex");
    const btnState = btn[0].classList.contains("fa-plus");
    form[0].classList.toggle("hide");
    flex[0].classList.toggle("hide");
    if (btnState) {
      btn[0].classList.replace("fa-plus", "fa-minus");
    } else {
      btn[0].classList.replace("fa-minus", "fa-plus");
    }
  };

  render() {
    return (
      <button
        onClick={this.toggleInput}
        className="btn btn-dark btn-md showInput"
      >
        <span className="fa showInputBtn fa-minus" />
      </button>
    );
  }
}

export default HideUserInput;

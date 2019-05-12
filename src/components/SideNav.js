import React, { Component } from "react";
import CounterList from "./CounterList";
import Filter from "./Filter";
import Timer from "./Timer";

class SideNav extends Component {
  state = {};

  // darkTheme = () => {
  //   let body = document.getElementsByTagName("body")[0];
  //   body.classList.add("dark");
  // };
  // lightTheme = () => {
  //   let body = document.getElementsByTagName("body")[0];
  //   body.classList.remove("dark");
  // };

  // blockView = () => {
  //   let list = document.getElementsByClassName("list");
  //   let listitem = document.getElementsByClassName("listitem");

  //   list[0].classList.add("listgrid");
  //   for (let i = 0; i < listitem.length; i++) {
  //     listitem[i].classList.add("listitemgrid");
  //   }
  // };

  // listView = () => {
  //   let list = document.getElementsByClassName("list");
  //   let listitem = document.getElementsByClassName("listitem");

  //   list[0].classList.remove("listgrid");
  //   for (let i = 0; i < listitem.length; i++) {
  //     listitem[i].classList.remove("listitemgrid");
  //   }
  // };

  render() {
    return (
      <div className="sidenav">
        <div className="toggleView">
          <p>Toggle View</p>
          <span onClick={this.props.lightTheme} className="fa fa-sun-o" />
          <span onClick={this.props.darkTheme} className="fa fa-moon-o" />
          <p
            style={{
              display: "inline",
              fontSize: "2.7rem",
              color: "grey",
              cursor: "default"
            }}
          >
            {" "}
            |{" "}
          </p>
          <span onClick={this.props.blockView} className="fa fa-th" />
          <span onClick={this.props.listView} className="fa fa-list" />
        </div>
        <CounterList
          items={this.props.items}
          colors={this.props.colors}
          clearCompleted={this.props.clearCompleted}
        />
        <Filter
          colors={this.props.colors}
          curCat={this.props.curCat}
          items={this.props.items}
          filter={this.props.filter}
          filterOff={this.props.filterOff}
        />
        <Timer timer={this.props.timer} />
      </div>
    );
  }
}

export default SideNav;

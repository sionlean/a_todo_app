import React, { Component } from "react";
import CounterList from "./CounterList";
import Filter from "./Filter";
import Timer from "./Timer";

class SideNav extends Component {
  state = {};

  render() {
    const {
      toggleView,
      toggleTheme,
      clearCompleted,
      items,
      filter,
      timer,
      currentFilter
    } = this.props;
    return (
      <div className="sidenav">
        <div className="toggleView">
          <p>Toggle View</p>
          <span onClick={toggleTheme} className="fa fa-sun-o" />
          <p className="sep"> | </p>
          <span onClick={toggleView} className="fa fa-list" />
        </div>
        <CounterList items={items} clearCompleted={clearCompleted} />
        <Filter items={items} filter={filter} currentFilter={currentFilter} />
        <Timer timer={timer} />
      </div>
    );
  }
}

export default SideNav;

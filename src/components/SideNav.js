import React, { Component } from "react";
import CounterList from "./CounterList";
import Filter from "./Filter";

class SideNav extends Component {
  state = {};

  render() {
    return (
      <div className="sidenav">
        <div className="toggleView">
          <p>Toggle View</p>
          <span class="fa fa-th" />
          <span class="fa fa-list" />
        </div>
        <CounterList
          items={this.props.items}
          colors={this.props.colors}
          clearCompleted={this.props.clearCompleted}
        />
        <br />
        <Filter
          colors={this.props.colors}
          curCat={this.props.curCat}
          items={this.props.items}
          filter={this.props.filter}
          filterOff={this.props.filterOff}
        />
      </div>
    );
  }
}

export default SideNav;

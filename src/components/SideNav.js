import React, { Component } from "react";
import CounterList from "./CounterList";
import Filter from "./Filter";
import Timer from "./Timer";

class SideNav extends Component {
  state = {};

  render() {
    const {
      lightTheme,
      darkTheme,
      blockView,
      listView,
      clearCompleted,
      colors,
      items,
      curCat,
      filterOff,
      filter,
      timer
    } = this.props;
    return (
      <div className="sidenav">
        <div className="toggleView">
          <p>Toggle View</p>
          <span onClick={lightTheme} className="fa fa-sun-o" />
          <span onClick={darkTheme} className="fa fa-moon-o" />
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
          <span onClick={blockView} className="fa fa-th" />
          <span onClick={listView} className="fa fa-list" />
        </div>
        <CounterList
          items={items}
          colors={colors}
          clearCompleted={clearCompleted}
        />
        <Filter
          colors={colors}
          curCat={curCat}
          items={items}
          filter={filter}
          filterOff={filterOff}
        />
        <Timer timer={timer} />
      </div>
    );
  }
}

export default SideNav;

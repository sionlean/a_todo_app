import React, { Component } from "react";
import { connect } from "react-redux";
import CounterList from "./CounterList";
import Filter from "./Filter";
import Timer from "./Timer";
import { updateView, updateTheme } from "../actions";

class SideNav extends Component {
  render() {
    const { updateTheme, updateView } = this.props;
    return (
      <div className="sidenav">
        <div className="toggleView">
          <p>Toggle View</p>
          <span onClick={updateTheme} className="fa fa-sun-o" />
          <p className="sep"> | </p>
          <span onClick={updateView} className="fa fa-list" />
        </div>
        <CounterList />
        <Filter />
        <Timer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateView: () => dispatch(updateView()),
  updateTheme: () => dispatch(updateTheme())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

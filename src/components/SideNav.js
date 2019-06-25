import React, { Component } from "react";
import { connect } from "react-redux";
import CounterList from "./CounterList";
import Filter from "./Filter";
import Timer from "./Timer";
import { updateView, updateTheme } from "../actions";
import { THEME, VIEW } from "../Constants";

class SideNav extends Component {
  render() {
    const {
      updateTheme,
      updateView,
      theme,
      view,
      sideNavHidden,
      userInputHidden
    } = this.props;
    let themeClassName = "fa fa-";
    theme === THEME.LIGHT
      ? (themeClassName += "sun-o")
      : (themeClassName += "moon-o");
    let viewClassName = "fa fa-";
    view === VIEW.LIST
      ? (viewClassName += "list-alt")
      : (viewClassName += "clone");
    let className = sideNavHidden ? "sidenav remove" : "sidenav";
    if (!userInputHidden) className += " updateUserInputHidden";

    return (
      <div className={className}>
        <div className="toggleView">
          <p>Toggle View</p>
          <span onClick={updateTheme} className={themeClassName} />
          <span onClick={updateView} className={viewClassName} />
        </div>
        <CounterList />
        <Filter />
        <Timer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.updateTheme,
  view: state.updateView,
  sideNavHidden: state.updateSidenavHidden,
  userInputHidden: state.updateUserInputHiddenState
});

const mapDispatchToProps = dispatch => ({
  updateView: () => dispatch(updateView()),
  updateTheme: () => dispatch(updateTheme())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

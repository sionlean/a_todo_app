import React, { Component } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import { connect } from "react-redux";
import { THEME } from "./Constants";
import "./App.css";

class App extends Component {
  render() {
    const { theme } = this.props;
    let className = "App ";
    if (theme === THEME.DARK) className += THEME.DARK;
    return (
      <div className={className}>
        <Navbar />
        <div className="blank" />
        <div className="flex">
          <SideNav />
          <List />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.updateTheme
});

export default connect(mapStateToProps)(App);

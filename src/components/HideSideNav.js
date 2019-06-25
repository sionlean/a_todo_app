import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSidenavHidden } from "../actions";

class HideSideNav extends Component {
  render() {
    const { updateSidenavHidden, sideNavHidden } = this.props;
    let className = "btn btn-success sideBtn";
    if (!sideNavHidden) className += " btn-danger";
    return (
      <button onClick={updateSidenavHidden} className={className}>
        Side Nav
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSidenavHidden: () => dispatch(updateSidenavHidden())
});

const mapStateToProps = state => ({
  sideNavHidden: state.updateSidenavHidden
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HideSideNav);

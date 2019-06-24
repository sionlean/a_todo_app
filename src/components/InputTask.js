import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTitle } from "../actions";

class InputTask extends Component {
  onChange = e => {
    const title = e.target.value;
    this.props.updateTitle(title);
  };

  render() {
    const { title } = this.props;
    return (
      <input
        className="rounded form-control"
        type="text"
        name="title"
        placeholder=" Type Something..."
        onChange={this.onChange}
        value={title}
        maxLength="135"
        required
      />
    );
  }
}

const mapStateToProps = state => ({
  title: state.updateTitle
});

const mapDispatchToProps = dispatch => ({
  updateTitle: title => dispatch(updateTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTask);

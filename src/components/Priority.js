import React, { Component } from "react";
import { PRIORITY_INDEX, PRIORITY_LEVEL } from "../Constants";
import { connect } from "react-redux";
import { updatePriorityIndex } from "../actions";

class Priority extends Component {
  onChange = e => {
    const { updatePriorityIndex } = this.props;
    const value = e.target.value;
    updatePriorityIndex(value);
  };

  render() {
    const { priorityIndex } = this.props;
    return (
      <select
        className="selector selectpicker p-1 form-control"
        onChange={this.onChange}
        value={priorityIndex}
      >
        {Object.values(PRIORITY_INDEX).map(index => (
          <option
            key={index}
            value={index}
            style={{
              color: "black",
              backgroundColor: PRIORITY_LEVEL[index].color
            }}
          >
            {PRIORITY_LEVEL[index].name}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  priorityIndex: state.updatePriorityIndex
});

const mapDispatchToProps = dispatch => ({
  updatePriorityIndex: priorityIndex =>
    dispatch(updatePriorityIndex(priorityIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Priority);

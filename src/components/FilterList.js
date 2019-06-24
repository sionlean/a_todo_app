import { connect } from "react-redux";
import React, { Component } from "react";
import { CATEGORIES, CATEGORY_INDEX, CATEGORY_ALL } from "../Constants";
import { filterUpdate } from "../actions";

const mapStateToProps = state => ({
  //Naming does not matter, store contains all the state.
  currentFilter: state.filterCategory //This is gotten from the state through connect(), no link to reducers
});

const mapDispatchToProps = dispatch => ({
  filterUpdate: categoryIndex => dispatch(filterUpdate(categoryIndex))
});

class FilterList extends Component {
  select = color => {
    return color.name === "Others" ? "selected" : "";
  };

  handleChange = e => {
    const { filterUpdate } = this.props;
    const categoryIndex = e.target.value;
    filterUpdate(categoryIndex);
  };

  render() {
    const { currentFilter } = this.props; // currentFilter from mapStateToProps
    return (
      <select
        className="selector selectpicker p-1 form-control"
        value={currentFilter}
        onChange={this.handleChange}
      >
        {Object.values(CATEGORY_INDEX).map(index => (
          <option
            key={index}
            value={index}
            style={{ background: CATEGORIES[index].color }}
          >
            {CATEGORIES[index].name}
          </option>
        ))}
        <option value={CATEGORY_ALL} style={{ background: "#999" }}>
          All
        </option>
      </select>
    );
  }
}

export default connect(
  mapStateToProps, //return state
  mapDispatchToProps //return action
)(FilterList); // Will return a prop with the state and methods from mapDispatchToprops

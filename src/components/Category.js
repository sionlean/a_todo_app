import React, { Component } from "react";
import { CATEGORIES, CATEGORY_INDEX } from "../Constants";
import { updateCategoryIndex } from "../actions";
import { connect } from "react-redux";

class Category extends Component {
  select = color => {
    return color.name === "Others" ? "selected" : "";
  };

  onChange = e => {
    const { updateCategoryIndex } = this.props;
    const value = e.target.value;
    updateCategoryIndex(value);
  };

  render() {
    const { categoryIndex } = this.props;
    return (
      <select
        className="selector selectpicker p-1 form-control"
        value={categoryIndex}
        onChange={this.onChange}
      >
        {Object.values(CATEGORY_INDEX).map(index => (
          <option
            key={index}
            value={index} //Different from the name of the dropdown box
            style={{ background: CATEGORIES[index].color }}
          >
            {CATEGORIES[index].name}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  categoryIndex: state.updateCategoryIndex
});

const mapDispatchToProps = dispatch => ({
  updateCategoryIndex: categoryIndex =>
    dispatch(updateCategoryIndex(categoryIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

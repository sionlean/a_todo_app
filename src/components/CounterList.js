import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";
import { CATEGORIES, CATEGORY_INDEX } from "../Constants";

class CounterList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="counterList">
        <p> Counters </p>
        <span className="badge m-1">{items.length}</span>
        <div>
          {Object.values(CATEGORY_INDEX).map(index => {
            let count = items.filter(item => item.categoryIndex === index)
              .length;
            return (
              <Counter key={index} category={CATEGORIES[index]} count={count} />
            );
          })}
        </div>
        <br />
        <ClearCompleted />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(CounterList);

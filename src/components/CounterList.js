import React, { Component } from "react";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";
import { CATEGORIES, CATEGORY_INDEX } from "../Constants";

class CounterList extends Component {
  state = {};

  render() {
    const { items, clearCompleted } = this.props;
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
        <ClearCompleted clearCompleted={clearCompleted} />
      </div>
    );
  }
}

export default CounterList;

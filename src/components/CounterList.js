import React, { Component } from "react";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";

class CounterList extends Component {
  state = {};
  render() {
    const { items, colors, clearCompleted } = this.props;
    return (
      <div className="counterList">
        <p> Counters </p>
        <span className="badge m-1">{items.length}</span>
        <div>
          {colors.map(color => (
            <Counter key={color.name} color={color} items={items} />
          ))}
        </div>
        <br />
        <ClearCompleted clearCompleted={clearCompleted} />
      </div>
    );
  }
}

export default CounterList;

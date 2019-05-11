import React, { Component } from "react";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";

class CounterList extends Component {
  state = {};
  render() {
    return (
      <div className="counterList">
        <p> Counters </p>
        <span className="badge m-1">{this.props.items.length}</span>
        <div>
          {this.props.colors.map(color => (
            <Counter key={color.name} color={color} items={this.props.items} />
          ))}
        </div>
        <br />
        <ClearCompleted clearCompleted={this.props.clearCompleted} />
      </div>
    );
  }
}

export default CounterList;

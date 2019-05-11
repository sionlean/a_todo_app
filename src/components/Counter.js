import React, { Component } from "react";

class Counter extends Component {
  state = {};

  btnStyle = () => {
    return {
      backgroundColor: this.props.color.color,
      width: "80%",
      fontWeight: "bold"
    };
  };

  counters = () => {
    return this.props.items.filter(
      item => item.category === this.props.color.name
    ).length;
  };

  render() {
    return (
      <div>
        <button type="button" className="btn btn-basic" style={this.btnStyle()}>
          <span
            style={{ fontSize: "1.5rem", color: "#555", float: "left" }}
            className={this.props.color.icon}
          />
          {this.props.color.name}

          <span
            style={{
              backgroundColor: "#e8e8e8",
              float: "right",
              marginTop: "3px"
            }}
            className="badge"
          >
            {this.counters()}
          </span>
        </button>
      </div>
    );
  }
}
export default Counter;

import React, { Component } from "react";

class Counter extends Component {
  state = {};

  btnStyle = () => {
    const { color } = this.props;
    return {
      backgroundColor: color.color,
      width: "80%",
      fontWeight: "bold"
    };
  };

  counters = () => {
    const { items, color } = this.props;
    return items.filter(item => item.category === color.name).length;
  };

  render() {
    const { color } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-basic" style={this.btnStyle()}>
          <span
            style={{ fontSize: "1.5rem", color: "#555", float: "left" }}
            className={color.icon}
          />
          {color.name}

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

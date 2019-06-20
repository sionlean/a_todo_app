import React, { Component } from "react";

class Counter extends Component {
  btnStyle = () => {
    const { category } = this.props;
    return {
      backgroundColor: category.color,
      width: "80%",
      fontWeight: "bold"
    };
  };

  render() {
    const { category, count } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-basic" style={this.btnStyle()}>
          <span
            style={{ fontSize: "1.5rem", color: "#555", float: "left" }}
            className={category.icon}
          />
          {category.name}

          <span
            style={{
              backgroundColor: "#e8e8e8",
              float: "right",
              marginTop: "3px"
            }}
            className="badge"
          >
            {count}
          </span>
        </button>
      </div>
    );
  }
}
export default Counter;

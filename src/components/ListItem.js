import React, { Component } from "react";
import ContentEditable from "react-contenteditable";

class ListItem extends Component {
  toggle = () => {
    return {
      textDecoration: this.props.item.completed ? "line-through" : "none",
      flex: 15,
      margin: 0,
      fontSize: "1.5rem",
      color: "black",
      fontWeight: 400
    };
  };

  saveEdit = e => {
    this.props.item.title = e.target.value;
    this.props.saveEdit(this.props.item);
  };

  //Bin Icom Styling
  binStyle = {
    float: "right",
    marginRight: "50px",
    color: "#555",
    cursor: "pointer",
    fontSize: "2rem"
  };

  //Dynamically choose bg color based on category
  chooseCat = () => {
    const itemColor = this.props.colors.filter(
      color => color.name === this.props.item.category
    )[0].color;
    const filter = this.props.item.display;
    return { background: itemColor, display: filter };
  };

  //Choose Icon
  chooseIcon = () => {
    return this.props.colors.filter(
      color => color.name === this.props.item.category
    )[0].icon;
  };

  //Color Styling for priority Icon
  priorityStyle = () => {
    return {
      color: this.props.item.priorityColor,
      fontSize: "2rem",
      marginLeft: "0.5rem"
    };
  };

  //Create list items
  render() {
    const { item } = this.props;
    return (
      <div
        style={this.chooseCat()}
        className="listitem text-light p-3 clearfix rounded align-items-center"
      >
        <span
          style={{ fontSize: "2.5rem", color: "#555", width: "50px" }}
          className={this.chooseIcon()}
        />
        <span
          style={this.priorityStyle()}
          className="fa fa-exclamation-circle"
        />
        <input
          className="align-middle"
          style={{ flex: 1, width: 30, height: 30 }}
          type="checkbox"
          onChange={this.props.toggle.bind(this, item.id)}
        />
        <label style={this.toggle()}>
          <ContentEditable html={item.title} onChange={this.saveEdit} />
        </label>
        <span
          onClick={this.props.onDelete.bind(this, item.id)}
          className="fa fa-trash"
          style={this.binStyle}
        >
          {" "}
        </span>
      </div>
    );
  }
}

export default ListItem;

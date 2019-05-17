import React, { Component } from "react";
import ContentEditable from "react-contenteditable";

class ListItem extends Component {
  // const {item, toggle, onDelete, saveEdit, colors} = this.props;

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
    const { item, saveEdit } = this.props;
    item.title = e.target.value;
    saveEdit(item);
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
    const { colors, item } = this.props;
    const itemColor = colors.filter(color => color.name === item.category)[0]
      .color;
    const filter = item.display;
    return { background: itemColor, display: filter };
  };

  //Choose Icon
  chooseIcon = () => {
    const { colors, item } = this.props;
    return colors.filter(color => color.name === item.category)[0].icon;
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
    const {
      item: { id, title },
      toggle,
      onDelete,
      saveEdit
    } = this.props;
    return (
      <div
        style={this.chooseCat()}
        className="listitem listitemgrid text-light p-3 clearfix rounded align-items-center"
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
          onChange={toggle.bind(this, id)}
        />
        <label style={this.toggle()}>
          <ContentEditable html={title} onChange={saveEdit} />
        </label>
        <span
          onClick={onDelete.bind(this, id)}
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

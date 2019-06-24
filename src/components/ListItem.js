import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import { CATEGORIES, PRIORITY_LEVEL, VIEW } from "../Constants";

class ListItem extends Component {
  //for completed todo items
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

  updateEdit = e => {
    const {
      item: { id },
      editItem
    } = this.props;
    let newTitle = e.target.value;
    editItem(id, newTitle);
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
    const { item } = this.props;
    const itemColor = CATEGORIES[item.categoryIndex].color;
    const filter = item.display;

    return { background: itemColor, display: filter };
  };

  //Choose Icon
  chooseIcon = () => {
    const { item } = this.props;
    const itemIcon = CATEGORIES[item.categoryIndex].icon;
    return itemIcon;
  };

  //Color Styling for priority Icon
  priorityStyle = () => {
    const { item } = this.props;
    return {
      color: PRIORITY_LEVEL[item.priorityIndex].color,
      fontSize: "2rem",
      marginLeft: "0.5rem"
    };
  };

  //Create list items
  render() {
    const {
      currentView,
      item: { id, title },
      deleteItem,
      toggleItem
    } = this.props;
    let className =
      "listitem text-light p-3 clearfix rounded align-items-center";
    if (currentView === VIEW.BLOCK) className += " listitemgrid";
    return (
      <div style={this.chooseCat()} className={className}>
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
          onChange={toggleItem.bind(this, id)}
        />
        <label style={this.toggle()}>
          <ContentEditable html={title} onChange={this.updateEdit} />
        </label>
        <span
          onClick={deleteItem.bind(this, id)} //
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

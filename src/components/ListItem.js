import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import { CATEGORIES, PRIORITY_LEVEL, VIEW } from "../Constants";

class ListItem extends Component {
  //for completed todo items
  listItemStyle = () => {
    return {
      textDecoration: this.props.item.completed ? "line-through" : "none",
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

  //Bin Icon Styling
  binStyle = {
    float: "right",
    color: "#555",
    cursor: "pointer",
    fontSize: "2rem"
  };

  //Dynamically choose bg color based on category
  chooseCategoryStyle = () => {
    const { item } = this.props;
    const itemColor = CATEGORIES[item.categoryIndex].color;
    return { background: itemColor };
  };

  //Choose Icon
  chooseIconStyle = () => {
    const { item } = this.props;
    const itemIcon = CATEGORIES[item.categoryIndex].icon;
    return itemIcon;
  };

  //Color Styling for priority Icon
  priorityStyle = () => {
    const { item } = this.props;
    return {
      color: PRIORITY_LEVEL[item.priorityIndex].color,
      fontSize: "1.8rem"
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
      "flex listitem text-light p-3 clearfix rounded align-items-center";
    if (currentView === VIEW.BLOCK) className += " listitemgrid";
    return (
      <div style={this.chooseCategoryStyle()} className={className}>
        {/* ICON */}
        <div
          style={{ fontSize: "2rem", color: "#555" }}
          className={this.chooseIconStyle()}
        />
        {/* PRIORITY */}
        <div
          style={this.priorityStyle()}
          className="fa fa-exclamation-circle"
        />
        {/* CHECKBOX */}
        <div>
          <input
            className="align-middle"
            style={{ flex: 1, height: 30 }}
            type="checkbox"
            onChange={toggleItem.bind(this, id)}
          />
        </div>
        {/* TEXTFIELD */}
        <div style={{ flexGrow: 1, textAlign: "left" }}>
          <label style={this.listItemStyle()}>
            <ContentEditable html={title} onChange={this.updateEdit} />
          </label>
        </div>
        {/* BINICON */}
        <div
          onClick={deleteItem.bind(this, id)} //
          className="fa fa-trash"
          style={this.binStyle}
        >
          {" "}
        </div>
      </div>
    );
  }
}

export default ListItem;

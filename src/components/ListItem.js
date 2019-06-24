import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import { CATEGORIES, PRIORITY_LEVEL, VIEW } from "../Constants";
import { connect } from "react-redux";

class ListItem extends Component {
  updateEdit = e => {
    const {
      item: { id },
      editItem
    } = this.props;
    let newTitle = e.target.value;
    editItem(id, newTitle);
  };

  //Stylings//
  //TextArea Wrapper
  textAreaWrapperStyle = () => {
    const { view } = this.props;
    const style = { flexGrow: 1, textAlign: "left", width: "100%" };
    if (view === VIEW.BLOCK) {
      style["order"] = 5;
    }
    return style;
  };
  //TextArea
  textAreaStyle = () => {
    return {
      textDecoration: this.props.item.completed ? "line-through" : "none",
      margin: 0,
      fontSize: "0.9rem",
      color: "black",
      fontWeight: 400
    };
  };

  //BinIcon Styling
  binStyle = () => {
    const { view } = this.props;
    const style = {
      float: "right",
      color: "#555",
      cursor: "pointer",
      fontSize: "2rem"
    };
    if (view === VIEW.BLOCK) {
      style["order"] = 4;
      style["flexGrow"] = 1;
      style["textAlign"] = "right";
    }
    return style;
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
    let className = "flex listitem text-light clearfix rounded";
    if (currentView === VIEW.BLOCK) className += " listitemgrid";
    return (
      <div style={this.chooseCategoryStyle()} className={className}>
        {/* CHECKBOX */}
        <div>
          <input
            className="align-middle"
            style={{ flex: 1, height: 30 }}
            type="checkbox"
            onChange={toggleItem.bind(this, id)}
          />
        </div>
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

        {/* TEXTFIELD */}
        <div style={this.textAreaWrapperStyle()}>
          <label style={this.textAreaStyle()}>
            <ContentEditable html={title} onChange={this.updateEdit} />
          </label>
        </div>
        {/* BINICON */}
        <div
          onClick={deleteItem.bind(this, id)} //
          className="fa fa-trash"
          style={this.binStyle()}
        >
          {" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  view: state.updateView
});

export default connect(mapStateToProps)(ListItem);

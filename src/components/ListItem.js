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
  //Choose Icon
  categoryIconStyle = () => {
    const { item } = this.props;
    let itemIcon = CATEGORIES[item.categoryIndex].icon;
    itemIcon += " categoryIconStyle";
    return itemIcon;
  };

  //
  getTextField = () => {
    const { item } = this.props;
    let className = "textAreaStyle";
    if (item.completed) className += " completed";
    return (
      <div className="textAreaWrapper">
        <label className={className}>
          <ContentEditable html={item.title} onChange={this.updateEdit} />
        </label>
      </div>
    );
  };

  getTrashButton = () => {
    const {
      item: { id },
      deleteItem
    } = this.props;
    const className = "fa fa-trash binIconStyle";
    return (
      <div
        onClick={deleteItem.bind(this, id)} //
        className={className}
      />
    );
  };

  //Create list items
  render() {
    const {
      currentView,
      item,
      item: { id },
      toggleItem
    } = this.props;
    let className = "listitem rounded";
    if (currentView === VIEW.BLOCK) className += " listitemgrid";
    console.log(item);
    return (
      <div
        style={{ background: CATEGORIES[item.categoryIndex].color }}
        className={className}
      >
        {/* list item flex wrapper */}
        <div className="flex">
          {/* Icons flex wrapper */}
          <div className="flex flexicons">
            {/* CHECKBOX */}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={toggleItem.bind(this, id)}
            />
            {/* CATEGORY ICON */}
            <div className={this.categoryIconStyle()} />
            {/* PRIORITY */}
            <div
              style={{ color: PRIORITY_LEVEL[item.priorityIndex].color }}
              className="fa fa-exclamation-circle"
            />
            {/* filler */}
            {currentView === VIEW.BLOCK && <div className="filler" />}
            {/* BIN BUTTON */}
            {currentView === VIEW.BLOCK && this.getTrashButton()}
            {currentView === VIEW.LIST && this.getTextField()}
            {currentView === VIEW.LIST && this.getTrashButton()}
          </div>
          <div>
            {/* text box area */}
            {currentView === VIEW.BLOCK && this.getTextField()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  view: state.updateView
});

export default connect(mapStateToProps)(ListItem);

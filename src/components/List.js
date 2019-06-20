import React, { Component } from "react";
import ListItem from "./ListItem";
import { VIEW } from "../Constants";

class List extends Component {
  //To contain list items
  render() {
    const { currentView, items, onDelete, saveEdit, toggle } = this.props;

    let className = "list"; //Rerendering will cause it to always start from here, there is no need to remove the className.
    if (currentView === VIEW.BLOCK) {
      className += " listgrid";
    }
    return (
      <div className={className}>
        {items.map(item => (
          <ListItem
            currentView={currentView}
            item={item}
            key={item.id}
            onDelete={onDelete}
            saveEdit={saveEdit}
            toggle={toggle}
          />
        ))}
      </div>
    );
  }
}

export default List;

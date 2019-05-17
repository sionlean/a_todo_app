import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  //To contain list items
  render() {
    const { items, toggle, onDelete, saveEdit, colors } = this.props;
    return (
      <div className="list listgrid">
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            toggle={toggle}
            onDelete={onDelete}
            saveEdit={saveEdit}
            colors={colors}
          />
        ))}
      </div>
    );
  }
}

export default List;

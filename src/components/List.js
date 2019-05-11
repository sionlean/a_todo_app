import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  //To contain list items
  render() {
    return (
      <div className="list listgrid">
        {this.props.items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            toggle={this.props.toggle}
            onDelete={this.props.onDelete}
            saveEdit={this.props.saveEdit}
            colors={this.props.colors}
          />
        ))}
      </div>
    );
  }
}

export default List;

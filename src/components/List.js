import React, { Component } from "react";
import ListItem from "./ListItem";
import { VIEW } from "../Constants";
import { connect } from "react-redux";
import { CATEGORY_ALL } from "../Constants";
import { deleteItem, toggleItem, editItem } from "../actions";

class List extends Component {
  render() {
    const { currentView, items, deleteItem, editItem, toggleItem } = this.props;

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
            deleteItem={deleteItem}
            editItem={editItem}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const currentFilter = state.filterCategory;
  let filteredItems = state.items;
  if (currentFilter !== CATEGORY_ALL) {
    filteredItems = filteredItems.filter(
      item => item.categoryIndex === currentFilter
    );
  }
  return {
    items: filteredItems,
    currentView: state.toggleView
  };
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
  editItem: (id, newTitle) => dispatch(editItem(id, newTitle))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

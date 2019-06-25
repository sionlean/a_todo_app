import React, { Component } from "react";
import ListItem from "./ListItem";
import { VIEW } from "../Constants";
import { connect } from "react-redux";
import { CATEGORY_ALL } from "../Constants";

class List extends Component {
  render() {
    const { currentView, items } = this.props;
    let className = "list"; //Rerendering will cause it to always start from here, there is no need to remove the className.
    if (currentView === VIEW.BLOCK) {
      className += " flexGrid";
    }
    return (
      <div className={className}>
        {items.map(item => (
          <ListItem currentView={currentView} item={item} key={item.id} />
        ))}
        <div className="listitemgridfiller" />
        <div className="listitemgridfiller" />
        <div className="listitemgridfiller" />
        <div className="listitemgridfiller" />
        <div className="listitemgridfiller" />
        <div className="listitemgridfiller" />
        <div className="listitemgridfiller" />
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
    currentView: state.updateView
  };
};

export default connect(mapStateToProps)(List);

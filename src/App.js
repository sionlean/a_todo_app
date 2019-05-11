import React, { Component } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    items: [
      {
        id: uuid.v4(),
        title: "test 1",
        completed: false,
        category: "Family",
        display: "flex"
      },
      {
        id: uuid.v4(),
        title: "test 2",
        completed: false,
        category: "Friends",
        display: "flex"
      },
      {
        id: uuid.v4(),
        title: "test 3",
        completed: false,
        category: "Work",
        display: "flex"
      },
      {
        id: uuid.v4(),
        title: "test 4",
        completed: false,
        category: "Others",
        display: "flex"
      }
    ],
    colors: [
      { name: "Family", color: "#adddcf", icon: "fa fa-home" },
      { name: "Friends", color: "#fed1be", icon: "fa fa-users" },
      { name: "Work", color: "#f0e0a2", icon: "fa fa-briefcase" },
      { name: "Others", color: "#bfb1d5", icon: "fa fa-archive" }
    ],
    curCat: "Others"
  };

  //Strike through when completed
  toggle = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };

  //Remove individual listitems
  onDelete = id => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)] //Spread operator
    });
  };

  //Update Category
  curCat = cat => {
    this.setState({ curCat: cat });
  };

  //Add list items
  addList = title => {
    const newItem = {
      id: uuid.v4(),
      title: title,
      completed: false,
      category: this.state.curCat,
      display: "flex"
    };
    this.filterOff();
    this.setState({ items: [...this.state.items, newItem] });
  };

  //Reset list items
  onReset = () => {
    this.setState({ items: [] });
  };

  //Edit existing list
  saveEdit = item => {
    const items = [...this.state.items];
    items.item = item;
    this.setState({ items });
  };

  //Clear Completed
  clearCompleted = () => {
    this.setState({
      items: [...this.state.items.filter(item => item.completed !== true)]
    });
  };

  // Filter Category
  filter = cat => {
    this.setState({
      items: this.state.items.map(item => {
        return (item.display = "flex"); //remove return
      })
    });
    this.setState({
      items: this.state.items.map(item => {
        if (item.category !== cat) {
          item.display = "none";
        }
        return item;
      })
    });
  };

  //Off Filter
  filterOff = () => {
    this.setState({
      items: this.state.items.map(item => {
        item.display = "flex";
        return item;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          addList={this.addList}
          onReset={this.onReset}
          colors={this.state.colors}
          curCat={this.curCat}
        />
        <div className="blank" />
        <div className="flex">
          <SideNav
            items={this.state.items}
            colors={this.state.colors}
            clearCompleted={this.clearCompleted}
            filter={this.filter}
            filterOff={this.filterOff}
          />
          <List
            items={this.state.items}
            toggle={this.toggle}
            onDelete={this.onDelete}
            saveEdit={this.saveEdit}
            colors={this.state.colors}
          />
        </div>
      </div>
    );
  }
}

export default App;

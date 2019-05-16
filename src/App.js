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
        title: "Hi, Welcome to my very first React Application: A To-Do List",
        completed: false,
        category: "Family",
        display: "flex",
        priorityColor: "rgba(255, 255, 255, 0)"
      },
      {
        id: uuid.v4(),
        title:
          "You can type in the input box above and set the category and priority level. If you want to, you can reset all contents by clicking 'reset'",
        completed: false,
        category: "Friends",
        display: "flex",
        priorityColor: "#fdfd96"
      },
      {
        id: uuid.v4(),
        title:
          "On my left, you can toggle a simple night/day theme and switch between a block/list layout",
        completed: false,
        category: "Work",
        display: "flex",
        priorityColor: "#fdfd96"
      },
      {
        id: uuid.v4(),
        title:
          "Furthermore, I can keep track of the number of items by category and also clear all completd items with a click",
        completed: false,
        category: "Work",
        display: "flex",
        priorityColor: "#fdfd96"
      },
      {
        id: uuid.v4(),
        title:
          "For your convenience, there is filter function for filtering out the differnet category",
        completed: false,
        category: "Work",
        display: "flex",
        priorityColor: "#ff6961"
      },
      {
        id: uuid.v4(),
        title: "You can set an alert with a note within the timespan of 1 day",
        completed: false,
        category: "Work",
        display: "flex",
        priorityColor: "rgba(255, 255, 255, 0)"
      },
      {
        id: uuid.v4(),
        title:
          "You can click on me to edit the content or remove me by using the bin icon.",
        completed: false,
        category: "Others",
        display: "flex",
        priorityColor: "#fdfd96"
      },
      {
        id: uuid.v4(),
        title:
          "A yellow exclaimation mark signify mid-priority while a red signify high priority",
        completed: false,
        category: "Others",
        display: "flex",
        priorityColor: "rgba(255, 255, 255, 0)"
      },
      {
        id: uuid.v4(),
        title:
          "I am categorised based on either: family, friends, work or others. Each have it's own icon and colors",
        completed: false,
        category: "Others",
        display: "flex",
        priorityColor: "#ff6961"
      },
      {
        id: uuid.v4(),
        title:
          "Wow. You must be bored now. If you have read everything, feel free to click the reset button and start exploring. Thank You :) ",
        completed: false,
        category: "Others",
        display: "flex",
        priorityColor: "rgba(255, 255, 255, 0)"
      }
    ],
    colors: [
      { name: "Family", color: "#adbdcf", icon: "fa fa-home" },
      { name: "Friends", color: "#e9c1a1", icon: "fa fa-users" },
      { name: "Work", color: "#f0bfe1", icon: "fa fa-briefcase" },
      { name: "Others", color: "#7fd7ac", icon: "fa fa-archive" }
    ],
    curCat: "Others",
    curPri: "rgba(255, 255, 255, 0.0)",
    priority: [
      { name: "Low Priority", color: "rgba(255, 255, 255, 0.0)" },
      { name: "Mid Priority", color: "#fdfd96" },
      { name: "High Priority", color: "#ff6961" }
    ]
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
      display: "flex",
      priorityColor: this.state.curPri
    };
    this.filterOff();
    this.listView();
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

  //setting priority color to state
  handlePriority = pri => {
    const colorState = this.state.priority.filter(name => name.name === pri);
    this.setState({ curPri: colorState[0].color });
  };

  // Setting timer
  timer = (hour, min, text) => {
    let time = min * 60000 + hour * 3600000;
    setTimeout(() => {
      alert(text);
    }, time);
  };

  // setting themes and layout
  darkTheme = () => {
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("dark");
  };

  lightTheme = () => {
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("dark");
  };

  blockView = () => {
    let list = document.getElementsByClassName("list");
    let listitem = document.getElementsByClassName("listitem");

    list[0].classList.add("listgrid");
    for (let i = 0; i < listitem.length; i++) {
      listitem[i].classList.add("listitemgrid");
    }
  };

  listView = () => {
    let list = document.getElementsByClassName("list");
    let listitem = document.getElementsByClassName("listitem");

    list[0].classList.remove("listgrid");
    for (let i = 0; i < listitem.length; i++) {
      listitem[i].classList.remove("listitemgrid");
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          addList={this.addList}
          onReset={this.onReset}
          colors={this.state.colors}
          curCat={this.curCat}
          priority={this.state.priority}
          handlePriority={this.handlePriority}
        />
        <div className="blank" />
        <div className="flex">
          <SideNav
            items={this.state.items}
            colors={this.state.colors}
            clearCompleted={this.clearCompleted}
            filter={this.filter}
            filterOff={this.filterOff}
            timer={this.timer}
            darkTheme={this.darkTheme}
            lightTheme={this.lightTheme}
            blockView={this.blockView}
            listView={this.listView}
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

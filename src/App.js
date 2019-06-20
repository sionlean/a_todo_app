import React, { Component } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import "./App.css";
import CreateListItem from "./CreateListItem";
import {
  CATEGORY_INDEX,
  PRIORITY_INDEX,
  CATEGORY_ALL,
  VIEW,
  THEME
} from "./Constants";

const DEFAULT_ITEM = new CreateListItem(
  "hi",
  CATEGORY_INDEX.FAMILY,
  PRIORITY_INDEX.LOW
);
const DEFAULT_STATE = {
  items: [DEFAULT_ITEM],
  filter: CATEGORY_ALL,
  currentView: VIEW.LIST,
  currentTheme: THEME.LIGHT
};

class App extends Component {
  state = this.getStateFromLocalStorage(); // Act like a constructor so it will construct with the right state alr

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
    const updatedList = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: updatedList
    });
  };

  //Add list items
  addList = (title, categoryIndex, priorityIndex) => {
    const item = new CreateListItem(title, categoryIndex, priorityIndex);
    const list = [...this.state.items, item];
    // this.listView();
    this.setState({ items: list });
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
  filter = categoryIndex => {
    this.setState({ filter: categoryIndex }); //Async, use callback function to run save the changed state to memory.
  };

  // Setting timer
  timer = (hour, min, text) => {
    let time = min * 60000 + hour * 3600000;
    setTimeout(() => {
      alert(text);
    }, time);
  };

  toggleView = () => {
    let newView = this.state.currentView === VIEW.LIST ? VIEW.BLOCK : VIEW.LIST;
    this.setState({ currentView: newView }, this.changeTheme);
  };

  toggleTheme = () => {
    let newTheme =
      this.state.currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    this.setState({ currentTheme: newTheme }, this.changeTheme);
  };

  changeTheme = () => {
    let body = document.getElementsByTagName("body")[0];
    if (this.state.currentTheme === THEME.DARK) {
      body.classList.add(THEME.DARK);
    } else {
      body.classList.remove(THEME.DARK);
    }
  };

  //Loading local Storage
  getFromLocalStorage() {
    // SOLUTION 1
    // Object.keys(DEFAULT_STATE).forEach(stateKey => {
    //   let value = localStorage.getItem(stateKey);
    //   if (isNaN(+value)) {
    //     // if is a string number --> (+value) become a number --> isNaN(+value) will return a false
    //     // if is a string --> (+value) become a NaN --> isNaN(+value) will return a true, entering try-catch
    //     try {
    //       value = JSON.parse(value); //JSON.parse(if is not a JSON format, will return error)
    //     } catch {}
    //   }
    //   this.setState({
    //     [stateKey]: value || DEFAULT_STATE[stateKey]
    //   });
    // });

    const state = DEFAULT_STATE;
    Object.keys(DEFAULT_STATE).forEach(stateKey => {
      let value = localStorage.getItem(stateKey);
      if (isNaN(+value)) {
        // if is a string number --> (+value) become a number --> isNaN(+value) will return a false
        // if is a string --> (+value) become a NaN --> isNaN(+value) will return a true, entering try-catch
        try {
          value = JSON.parse(value); //JSON.parse(if is not a JSON format, will return error)
        } catch {}
      }

      state[stateKey] = value || state[stateKey];
    });
    this.setState(state);
  }

  getStateFromLocalStorage() {
    const state = DEFAULT_STATE;
    Object.keys(DEFAULT_STATE).forEach(stateKey => {
      let value = localStorage.getItem(stateKey);
      if (isNaN(+value)) {
        // if is a string number --> (+value) become a number --> isNaN(+value) will return a false
        // if is a string --> (+value) become a NaN --> isNaN(+value) will return a true, entering try-catch
        try {
          value = JSON.parse(value); //JSON.parse(if is not a JSON format, will return error)
        } catch {}
      }

      state[stateKey] = value || state[stateKey];
    });
    return state;
  }

  componentDidMount() {
    // this.getFromLocalStorage();
    this.changeTheme();
  }

  //Update the local storage when there is a change in the state
  componentDidUpdate(prevProps, prevState) {
    //Might need to add prevProps
    for (let key of Object.keys(DEFAULT_STATE)) {
      let value = this.state[key];
      value = typeof value !== "string" ? JSON.stringify(value) : value;
      if (prevState[key] !== value) {
        localStorage.setItem(key, value);
      }
    }
  }

  render() {
    const { filter, items } = this.state;
    let filteredItems = items;
    if (filter !== CATEGORY_ALL) {
      filteredItems = items.filter(item => item.categoryIndex === filter); // return selected category
    }
    return (
      <div className="App">
        <Navbar addList={this.addList} onReset={this.onReset} />
        <div className="blank" />
        <div className="flex">
          <SideNav
            currentFilter={this.state.filter}
            clearCompleted={this.clearCompleted}
            toggleView={this.toggleView}
            toggleTheme={this.toggleTheme}
            filter={this.filter}
            items={this.state.items}
            timer={this.timer}
          />
          <List
            currentView={this.state.currentView}
            items={filteredItems}
            onDelete={this.onDelete}
            saveEdit={this.saveEdit}
            toggle={this.toggle}
          />
        </div>
      </div>
    );
  }
}

export default App;

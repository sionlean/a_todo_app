import React, { Component } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import "./App.css";

// const DEFAULT_STATE = {};

class App extends Component {
  // state = this.getStateFromLocalStorage(); // Act like a constructor so it will construct with the right state alr

  //Loading local Storage
  // getFromLocalStorage() {
  //   // SOLUTION 1
  //   // Object.keys(DEFAULT_STATE).forEach(stateKey => {
  //   //   let value = localStorage.getItem(stateKey);
  //   //   if (isNaN(+value)) {
  //   //     // if is a string number --> (+value) become a number --> isNaN(+value) will return a false
  //   //     // if is a string --> (+value) become a NaN --> isNaN(+value) will return a true, entering try-catch
  //   //     try {
  //   //       value = JSON.parse(value); //JSON.parse(if is not a JSON format, will return error)
  //   //     } catch {}
  //   //   }
  //   //   this.setState({
  //   //     [stateKey]: value || DEFAULT_STATE[stateKey]
  //   //   });
  //   // });

  //   const state = DEFAULT_STATE;
  //   Object.keys(DEFAULT_STATE).forEach(stateKey => {
  //     let value = localStorage.getItem(stateKey);
  //     if (isNaN(+value)) {
  //       // if is a string number --> (+value) become a number --> isNaN(+value) will return a false
  //       // if is a string --> (+value) become a NaN --> isNaN(+value) will return a true, entering try-catch
  //       try {
  //         value = JSON.parse(value); //JSON.parse(if is not a JSON format, will return error)
  //       } catch {}
  //     }

  //     state[stateKey] = value || state[stateKey];
  //   });
  //   this.setState(state);
  // }

  // getStateFromLocalStorage() {
  //   const state = DEFAULT_STATE;
  //   Object.keys(DEFAULT_STATE).forEach(stateKey => {
  //     let value = localStorage.getItem(stateKey);
  //     if (isNaN(+value)) {
  //       // if is a string number --> (+value) become a number --> isNaN(+value) will return a false
  //       // if is a string --> (+value) become a NaN --> isNaN(+value) will return a true, entering try-catch
  //       try {
  //         value = JSON.parse(value); //JSON.parse(if is not a JSON format, will return error)
  //       } catch {}
  //     }

  //     state[stateKey] = value || state[stateKey];
  //   });
  //   return state;
  // }

  // componentDidMount() {
  //   // this.getFromLocalStorage();
  //   // this.changeTheme();
  // }

  // //Update the local storage when there is a change in the state
  // componentDidUpdate(prevProps, prevState) {
  //   //Might need to add prevProps
  //   for (let key of Object.keys(DEFAULT_STATE)) {
  //     let value = this.state[key];
  //     value = typeof value !== "string" ? JSON.stringify(value) : value;
  //     if (prevState[key] !== value) {
  //       localStorage.setItem(key, value);
  //     }
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="blank" />
        <div className="flex">
          <SideNav />
          <List />
        </div>
      </div>
    );
  }
}

export default App;

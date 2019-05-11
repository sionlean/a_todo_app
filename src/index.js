import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

//JS code for Toggling view

let blockView = document.getElementsByClassName("fa-th");
let listView = document.getElementsByClassName("fa-list");
let list = document.getElementsByClassName("list");
let listitem = document.getElementsByClassName("listitem");

let addClass = () => {
  list[0].classList.add("listgrid");
  for (let i = 0; i < listitem.length; i++) {
    listitem[i].classList.add("listitemgrid");
  }
};
let removeClass = () => {
  list[0].classList.remove("listgrid");
  for (let i = 0; i < listitem.length; i++) {
    listitem[i].classList.remove("listitemgrid");
  }
};

blockView[0].addEventListener("click", addClass);
listView[0].addEventListener("click", removeClass);

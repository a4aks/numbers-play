
import {add} from "./calc.js"

import("./index.css")
import react from "react";
import ReactDOM from "react-dom";

console.log(add(5,16));

// const h1 = document.createElement("h1");
// h1.textContent = "Hello Webpack";
// h1.classList.add("redtext");

// document.getElementById("root").append(h1);

  ReactDOM.render(
      React.createElement("h1", {className: "redtext"},"Hello React"),
      document.getElementById("root")
  )
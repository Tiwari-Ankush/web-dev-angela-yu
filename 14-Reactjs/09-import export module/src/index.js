import React from "react";
import ReactDOM from "react-dom";
// import pi, { doublePi, triplePi } from "./math";
import * as PI from "./math";
// import { doublePi } from "./math";
// import { triplePi } from "./math";

ReactDOM.render(
  <div>
    <h2>Pi Values.</h2>
    <ul>
      <li>{PI.default}</li>
      <li>{PI.doublePi()}</li>
      <li>{PI.triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

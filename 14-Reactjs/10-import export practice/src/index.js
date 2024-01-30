import React from "react";
import ReactDOM from "react-dom";
import * as Calc from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <div>
    <h2>CALCULATIONS.</h2>
    <ul>
      <li>{Calc.add(1, 2)}</li>
      <li>{Calc.multiply(2, 3)}</li>
      <li>{Calc.subtract(7, 2)}</li>
      <li>{Calc.divide(5, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

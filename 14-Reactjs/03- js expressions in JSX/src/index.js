import React from "react";
import ReactDOM from "react-dom";

const name = "Ankush";
const age = 25;

// ReactDOM.render(
//   <div>
//     <h1>Hello World!</h1>
//     <h2>my name is {name} </h2>
//     <h2>my lucky number is {Math.floor(Math.random() * 10)}.</h2>
//     <b>
//       <p>You are {age} years old.</p>
//     </b>
//     <p>Your age in dog years: {age * 7}</p>
//   </div>,
//   document.getElementById("root")
// );

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

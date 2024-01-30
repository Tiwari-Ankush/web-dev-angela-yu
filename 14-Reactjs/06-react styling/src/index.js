//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const currentTime = new Date();
const currentHour = currentTime.getHours();
let greeting = "";
let color = "";

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good Morning";
  color = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good Afternoon";
  color = "green";
} else {
  greeting = "Good Evening";
  color = "blue";
}

const styles = {
  color: color,
  fontSize: "2em", // Adjust the font size as needed
};

ReactDom.render(
  <h1 style={styles} className="heading">
    {greeting}
  </h1>,
  document.getElementById("root")
);

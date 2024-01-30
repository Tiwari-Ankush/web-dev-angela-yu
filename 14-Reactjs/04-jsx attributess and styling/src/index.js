import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="title" contentEditable="true" spellcheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img className="img-class" src={img} alt="" />
    <img className="img-class" src={img + "?greyScale"} alt="" />
    <img className="img-class" src={img + "?grey"} alt="" />
  </div>,
  document.getElementById("root")
);

// var generateName = require("sillyname");
// const fs = require("node:fs");
import fs from "node:fs";
import generateName from "sillyName";

var sillyName = generateName();

console.log(`sillyname: My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`superhero: I am ${name}!`);


fs.appendFile("syperheroes.txt", `I am ${name}.\n` , (err) => {
// fs.writeFile("syperheroes.txt", name, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
"use strict";

console.log("Begin in ES6...Loading App.");
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';
var fct = require("./nodefile.js");

console.log(fct.beautiful("Test Require "));

let garage = new Garage('Garage Auto 69003');
let bmw = new Voiture('BMW') 
let peugeot = new Voiture('Peugeot') 
console.log(bmw, peugeot, garage);


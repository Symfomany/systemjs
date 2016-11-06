"use strict";

console.log("Begin in ES6...Loading App.");
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';
var fct = require("./common.js");


fct.beautiful("Require & CommonJs is ok...");

let garage = new Garage('Garage Auto 69003');
let bmw = new Voiture('BMW') 
let peugeot = new Voiture('Peugeot') 

console.log(bmw, peugeot, garage);
console.log();


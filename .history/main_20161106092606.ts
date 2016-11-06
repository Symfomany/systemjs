"use strict";

console.log("Begin in ES6...Loading App.");
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';

var fct = require("./common.js");
fct.beautiful("Require & CommonJs is ok...");

const datasVehicule = {
    marque: "Audi",
    modele: 'Q3',
    color: 'Blanc',
}

const datasVoiture = {

}

let bmw = new Voiture('BMW') 
let peugeot = new Voiture('Peugeot') 

console.log(bmw, peugeot);
console.log(bmw.marque);
bmw.marque = "Audi"
console.log(bmw.marque);
console.log(Voiture.PAYS);


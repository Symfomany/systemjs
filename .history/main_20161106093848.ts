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
    immatriculation: 'AB-345-CA',
};
const datasVoiture = {
    kilometrage: 155151,
    
};

const options =  ['jantes alu', 'toit ouvrant'];
let bmw = new Voiture(datasVehicule,datasVoiture,true,options);

console.log(bmw);
console.log(bmw.marque);
bmw.marque = "Audi"
console.log(bmw.marque);

console.log(Voiture.PAYS);


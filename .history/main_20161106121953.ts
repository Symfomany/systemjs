"use strict";

console.log("Begin in ES6...Loading App.");
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';

var fct = require("./common.js");
fct.beautiful("Require & CommonJs is ok...");


// Datas for Vehicule & Voiture
const datasVehicule = {
    marque: "Audi",
    modele: 'Q3',
    color: 'Blanc',
    immatriculation: 'AB-345-CA'
};
const datasVoiture = {
    kilometrage: 155151,
    annee: 2016
};
const avis = new Avis();


// create options
const options =  ['jantes alu', 'toit ouvrant'];
let bmw = new Voiture(datasVehicule,datasVoiture,true,options);

console.log(bmw);
console.log(bmw.marque);
bmw.marque = "Alpha Romeo"
console.log(bmw.marque);


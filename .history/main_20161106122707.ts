"use strict";

console.log("Begin in ES6...Loading App.");
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';
import {Avis} from './app/Avis';

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
const user = {
    pseudo: "Juju",
    avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
    nom: "Boyer",
    ville: "Lyon"
}
let autoLyon = new Garage("Auto Moto Lyon 3");
const avis = new Avis(user, "Superbe Voiture, Eleguante!", autoLyon, new Date());
const options =  ['jantes alu', 'toit ouvrant'];


let bmw = new Voiture(datasVehicule,datasVoiture,true,options);
bmw.addAvis(avis);

console.log(bmw);
console.log(bmw.marque);
bmw.marque = "Alpha Romeo"
console.log(bmw.marque);


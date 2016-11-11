"use strict";


import * as _ from "lodash";
import * as moment from "moment";
import * as async from "async";
import * as $ from "jquery";


console.log(_.padStart("Hello TypeScript!", 20, " "));
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
console.log(moment().format('D/M/Y'));


import {Vehicule} from './app/Vehicule';
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';
import {Avis} from './app/Avis';


// Datas for Vehicule & Voiture
const datasVehicule = {
    marque: "BMW",
    modele: 'A3',
    prix: 30000,
    color: 'Noir',
    immatriculation: 'BC-446-AA'
};
const datasVehiculeTwo = {
    marque: "Audi",
    modele: 'Q3',
    prix: 25000,
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
};

let autoLyon = new Garage("Auto Moto Lyon 3");
const avis = new Avis("Superbe Voiture, Eleguante!", user);
const avisTwo = new Avis("Joli bagnole :)",  user);
const avisThree = new Avis("Super Génial !!!",  user);
const options =  ['jantes alu', 'toit ouvrant'];

let bmw = new Voiture(datasVehicule,datasVoiture,true,options, '5 portes', '6mois'); // with infos
let audi = new Voiture(datasVehiculeTwo,datasVoiture,false,options);

bmw.addAvis(avis,avisTwo,avisThree);

//remove Avis
bmw.removeAvis('Joli bagnole :)');
bmw.setAvis('Super Génial !!!', 'Bof...finalement :()');

bmw.marque = "Alpha Romeo" // modify by setter
bmw.visibilityAvis(true); //modifuy visible of avis
console.log(bmw,audi);

console.info(`La voiture la plus chère est  ${Vehicule.compare(bmw,audi).marque} à prix ${Vehicule.compare(bmw,audi).prix} € `);


//console.log(promise.response);
/*promise.then(function(response){
    console.log(response);
})*/

// Un peu de Jquery...

$(document).ready(function() {
    console.log("okkk");
    let voiture = bmw;
    let description = `<p>${voiture.marque} - ${voiture.modele} 
                        au prix de ${voiture.marque}€ <br />
                        de couleur ${voiture.color} et immatriculée ${voiture.immatriculation}</p>`;
    $('div.content h2').text(voiture.marque +" "+voiture.modele);

    $('div.content .mdl-card__supporting-text').html(description);
});



"use strict";


console.debug("Begin in ES6...Loading App :)");
import {Vehicule} from './app/Vehicule';
import {Voiture} from './app/Voiture';
import {Garage} from './app/Garage';
import {Avis} from './app/Avis';
import * as async from 'async';

var fct = require("./common.js"); // require with Browserify with node compilation
fct.beautiful("Require & CommonJs is ok...");

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
}
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

let promise = bmw.getProprietaire();

async function asyncExample() { 
    try {
        let data = await getStringFromWebServerAsync("http://localhost/GetAString");
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

asyncExample();



//console.log(promise.response);
/*promise.then(function(response){
    console.log(response);
})*/

// Un peu de Jquery
$(function(){
    let voiture = bmw;
    let description = `<p>${voiture.marque} - ${voiture.modele} 
                        au prix de ${voiture.marque}€ <br />
                        de couleur ${voiture.color} et immatriculée ${voiture.immatriculation}</p>`;

    $('div.content h2').text(voiture.marque +" "+voiture.modele);
    $('div.content .mdl-card__supporting-text').html(description);
});
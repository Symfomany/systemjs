/**
 * Launch App
 */

import * as _ from "lodash";
import { Card } from './app/Card';
import { Vehicule } from './app/Vehicule';
import { Voiture } from './app/Voiture';
import { Garage } from './app/Garage';
import { Avis } from './app/Avis';
import { MotorInterface } from './app/MotorInterface';

(function () {

    "use strict";

    const card = new Card();
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
    const avisTwo = new Avis("Joli bagnole :)", user);
    const avisThree = new Avis("Super Génial !!!", user);
    const options = ['jantes alu', 'toit ouvrant'];

    let bmw = new Voiture(datasVehicule, datasVoiture, true, options, '5 portes', '6mois'); // with infos
    let audi = new Voiture(datasVehiculeTwo, datasVoiture, false, options);

    bmw.addAvis(avis, avisTwo, avisThree);

    //remove Avis
    bmw.removeAvis('Joli bagnole :)');
    bmw.setAvis('Super Génial !!!', 'Bof...finalement :()');

    bmw.marque = "Alpha Romeo" // modify by setter
    bmw.visibilityAvis(true); //modifuy visible of avis
    console.log(bmw, audi);

    console.info(`La voiture la plus chère est  ${Vehicule.compare(bmw, audi).marque} à prix ${Vehicule.compare(bmw, audi).prix} € `);
    
    //console.log(bmw.carburant);
    let {boite, kilometrage, carburant} = bmw;
    console.log(carburant, kilometrage);

    console.log(Voiture.argus());

    let v8:MotorInterface = {
      _type: "Explosion",
      _chevaux: 4,
      soupapes: 8,
      emission: 10.25
    };
    console.log(v8); 



}());


// console.log(card.getSearchTitles().then(function (rep) {
//     console.log(rep);
// }));



/*

// console.log(_.padStart("Hello TypeScript!", 20, " "));
// console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
// console.log(moment().format('D/M/Y'));





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

// console.log(promise.response);
/*promise.then(function(response){
    console.log(response);
})
*/

// Un peu de Jquery...



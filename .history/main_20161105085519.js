"use strict";

console.log("Begin in ES6...");
let maPhrase = "Hello!";
const nombre = 123;
const texte = `Le nombres est de ${nombre}`;
console.log(texte);
console.log(maPhrase,nombre);


class Codeur {

  constructor(nom,prenom,github, languages =  [], ...infos) {
    if (!nom || !prenom) {
      throw new TypeError("Un codeur a un nom ou prénom!");
    }
    this.nom = nom;
    this.prenom = prenom;
    this.languages = languages;
    this.infos = infos;
  }
   
}

const humain = new Codeur('Boyer' , 'Julien', 'Symfomany', 28, "Lyon" )


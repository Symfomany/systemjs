"use strict";

console.log("Begin in ES6...");
let maPhrase = "Hello!";
const nombre = 123;
const texte = `Le nombres est de ${nombre}`;
console.log(texte);
console.log(maPhrase,nombre);

// Demo in ES6...
class Codeur {
    constructor(nom,prenom,github = "") {
        this.nom = nom;
        this.prenom = prenom;
        this.github = github;
    }
}
const humain = new Codeur('Boyer' , 'Julien', 'Symfomany')
console.info(humain);

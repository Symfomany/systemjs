"use strict";

console.log("Begin in ES6...");
let maPhrase = "Hello!";
const nombre = 123;
const texte = `Le nombres est de ${nombre}`;
console.log(texte);
console.log(maPhrase,nombre);


class Codeur {
  constructor() {
    // ou typeof marcherait...
    if (new.target === Person) {
      // si l'on crée une instance on  jette une exception en arretant le script 
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
  
   static displayLanguage() {
    return "Tous les Person sont terriens";
  }
}


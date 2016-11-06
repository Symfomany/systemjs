/**
 * @class Vehicule
 */
export class Vehicule {

      protected _color:string;
      protected _marque:string;
      protected _modele:string;
      protected _immatriculation:string;

    constructor(parameters) {
        this._marque = parameters.marque;
        this._modele = parameters.modele;

    }
}
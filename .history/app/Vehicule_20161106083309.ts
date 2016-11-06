/**
 * @class Vehicule
 */
export class Vehicule {

      protected _color:string;
      protected _marque:string;
      protected _modele:string;
      protected _immatriculation:string;

    /**
     * Creates an instance of Vehicule.
     * @param {any} parameters
     * @memberOf Vehicule
     */
    constructor(parameters) {

        this._marque = parameters.marque;
        this._modele = parameters.modele;
        this._color = parameters.color;
        this._immatriculation = parameters.immatriculation;
    }
}
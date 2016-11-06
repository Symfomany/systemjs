import {MotorInterface} from './MotorInterface';

/**
 * @class Vehicule
 */  
export class Vehicule implements MotorInterface {

    
     
      private _color:string;
      private _marque:string;
      private _modele:string;
      private _immatriculation:string;

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
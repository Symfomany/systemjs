import {Garage} from './Garage';


export class Voiture extends Garage {
  
  protected _color:string;
  protected _marque:string;
  protected _modele:string;
  public readonly _nbRoues: number = 4; 
  

  /**
   * Constructor
   */
  constructor(marque: string, modele: string = "", color:string = "verte") {
    this._marque = marque;
    this._modele = modele;
    this._color = color;
  }


}
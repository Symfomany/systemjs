export class Garage {
  

  protected _color:string;
  protected _marque:string;
  protected _modele:string;

  /**
   * Constructor
   */
  constructor(marque: string, modele: string = "", color:string = "verte") {
    this._marque = marque;
    this._modele = modele;
    this._color = color;
  }

}
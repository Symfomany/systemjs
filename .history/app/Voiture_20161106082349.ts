import {Garage} from './Garage';

/**
 * @export
 * @class Voiture
 * @extends {Garage}
 */
export class Voiture extends Garage {

  protected _color:string;
  protected _marque:string;
  protected _modele:string;
  protected _kilometrage:number;
  protected _annee:number;
  protected _carburant:string = "essence;
  protected _options:string[] = ['climatisation', 'GPS', 'airbags'];
  protected _vente:boolean = true;

  public readonly _nbRoues: number = 4; 
  

 /**
  * Creates an instance of Voiture.
  * 
  * @param {string} marque
  * @param {string} [modele=""]
  * @param {string} [color="verte"]
  * 
  * @memberOf Voiture
  */
  constructor(marque: string, modele: string = "", color:string = "verte") {
    super();
    this._marque = marque;
    this._modele = modele;
    this._color = color;
  }


  /**
   * @memberOf Voiture
   */
  get marque(){
    return this._marque.toLowerCase();
  }


  /**
   * Setter 
   * Set a marque
   */
  set marque(marque:string){
    if(marque.length < 2){
      throw 'Votre marque doit faire au moins 3 caractères..';
    }
    this._marque = marque;
  }

  /**
   * Getter
   */
  get color(){
    return this._color.trim();
  }

  /**
   * @returns {string}
   * @memberOf Voiture
   */
  toString():string{
    return `La voiture est une ${this._marque} et elle est de ${Garage.PAYS}`;
  }


}
import {Vehicule} from './Vehicule';

/**
 * @export
 * @class Voiture
 * @extends {Garage}
 */
export class Voiture extends Vehicule {

  
  private _kilometrage:number;
  private _annee:number;
  private _carburant:string = "essence";
  private _options:string[] = ['climatisation', 'GPS', 'airbags'];
  private _vente:boolean = true;

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
  constructor(params: any, paramsVehicule:any, vente:boolean, options:any) {
    super(params);
    this._kilometrage = paramsVehicule.kilometrage;
    this._options = options;
    this._vente = vente;
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
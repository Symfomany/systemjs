import {Garage} from './Garage';
import {Vehicule} from './Vehicule';

/**
 * @export
 * @class Voiture
 * @extends {Garage}
 */
export class Voiture extends Vehicule {

  
  private _boite:string = "Manuelle";
  private _kilometrage:number;
  private _annee:number;
  private _carburant:string = "essence";
  private _options:string[] = ['climatisation', 'GPS', 'airbags'];
  private _vente:boolean = true;

  public readonly _nbRoues: number = 4; 
  

 /**
  * Creates an instance of Voiture.
  * 
  * @param {*} paramsVehicule
  * @param {*} paramsVoiture
  * @param {boolean} vente
  * @param {*} options
  * 
  * @memberOf Voiture
  */
  constructor(paramsVehicule: any, paramsVoiture:any, vente:boolean, options:any) {
    super(paramsVehicule);

    this._kilometrage = paramsVoiture.kilometrage;
    this._annee = paramsVoiture.annee;

    this._vente = vente;

    this._options = [this.options, ...options]; // Concaténation pare décomposition (ES6)
  }


  /**
   * @memberOf Voiture
   */
  get marque(){
    return super.marque().toLowerCase();
  }


  /**
   * Setter 
   * Set a marque
   */
  set marque(marque:string){
    if(marque.length < 2){
      throw 'Votre marque doit faire au moins 3 caractères..';
    }
    this.marque = marque;
  }


  /**
   * @returns {string}
   * @memberOf Voiture
   */
  toString():string{
    return `La voiture est une ${this.marque} et elle est de ${Garage}`;
  }


	public get kilometrage(): number {
		return this._kilometrage;
	}

	public set kilometrage(value: number) {
		this._kilometrage = value;
	}

	public get annee(): number {
		return this._annee;
	}

	public set annee(value: number) {
		this._annee = value;
	}

	public get carburant(): string  {
		return this._carburant;
	}

	public set carburant(value: string ) {
		this._carburant = value;
	}

	public get options(): string[]  {
		return this._options;
	}

	public set options(value: string[] ) {
		this._options = value;
	}

	public get vente(): boolean  {
		return this._vente;
	}

	public set vente(value: boolean ) {
		this._vente = value;
	}
  


}
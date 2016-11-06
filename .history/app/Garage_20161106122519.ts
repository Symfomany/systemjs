
/**
 * Class Garage
 */
export class Garage {
  
  /**
   * @private
   * @type {string}
   * @memberOf Garage
   */
  private _nom:string;

  /**
   * @private
   * @type {string}
   * @memberOf Garage
   */
  private _description:string;

  /**
   * @private
   * @type {string}
   * @memberOf Garage
   */
  private _ville:string;

  /**
   * @private
   * @type {string}
   * @memberOf Garage
   */
  private _adresse:string;

  /**
   * @private
   * @type {string}
   * @memberOf Garage
   */
  private _phone:string;

  /**
   * @private
   * @type {boolean}
   * @memberOf Garage
   */
  private _ouvert:boolean = true;


  /**
   * @private
   * @type {number}
   * @memberOf Garage
   */
  private _avis:number = 0;

  /**
   * @private
   * @type {*}
   * @memberOf Garage
   */
  private _horaires:any = { matin: [9,12], aprem: [13,18]};


  /**
   * @private
   * @type {*}
   * @memberOf Garage
   */
  private _created:any = new Date();

  /**
   * @private
   * @static
   * @memberOf Garage
   */
  public static PAYS = "France";


  /**
   * Creates an instance of Garage.
   * @memberOf Garage
   */
  constructor(nom:string){
    this._nom = nom;
    this._ville = "Lyon";
  }

}
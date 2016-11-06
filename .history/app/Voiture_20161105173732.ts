export class Voiture {
  
  private _color:string;
  private _marque:string;
  private static _pays = 'France';

  /**
   * Constructor
   */
  constructor(marque: string, color:string = "verte") {
    this._marque = marque;
    this._color = color;
  }

  /**
   * Getter
   */
  get pays(){
    return self._pays;
  }

  /**
   * Getter
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
}
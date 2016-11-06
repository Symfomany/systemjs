export class Voiture {
  
  private _color:string;
  private _marque:string;
  
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
  get marque(){
    return this._marque.toLowerCase();
  }

  /**
   * Getter
   */
  set marque(){
    return this._marque.toLowerCase();
  }

  /**
   * Getter
   */
  get color(){
    return this._color.trim();
  }
}
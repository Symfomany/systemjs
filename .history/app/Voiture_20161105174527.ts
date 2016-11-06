export class Voiture {
  
  protected _color:string;
  protected _marque:string;
  readonly nbRoues:number;

  static PAYS = 'France';

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


  toString():string{
    return `La voiture est une ${this._marque} et elle est de ${Voiture.PAYS}`;
  }
}
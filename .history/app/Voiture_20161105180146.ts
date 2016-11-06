export class Voiture extends Garage {

  public readonly _nbRoues: number = 4; 
  static PAYS = 'France';
  
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
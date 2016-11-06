export class Voiture {
  
  private color:string;
  private _marque:string;
  
  constructor(marque: string, color:string = "verte") {
    this._marque = marque;
    this.color = color;
  }

  get marque(){
    return this._marque.toLowerCase();
  }

}
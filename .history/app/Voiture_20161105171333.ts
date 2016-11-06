export class Voiture {
  
  private _color:string;
  private _marque:string;
  
  constructor(marque: string, color:string = "verte") {
    this._marque = marque;
    this._color = color;
  }


  get marque(){
    return this._marque.toLowerCase();
  }

  
  get color(){
    return this._color.trim();
  }
}
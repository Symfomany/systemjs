export class Voiture {
  
  public marque:string;
  public color:string;
  
  constructor(marque: string, color:string = "verte") {
    this.marque = marque;
    this.color = color;
  }

  get getMarque(){
    return this.marque.toLowerCase();
  }

}
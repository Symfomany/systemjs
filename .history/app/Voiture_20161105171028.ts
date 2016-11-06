export class Voiture {
  
  public color:string;
  
  constructor(marque: string, color:string = "verte") {
    this.marque = marque;
    this.color = color;
  }

  get marque(){
    return this.marque.toLowerCase();
  }

}
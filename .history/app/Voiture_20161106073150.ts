import {Garage} from './Garage';


export class Voiture extends Garage {
  protected _color:string;
  protected _marque:string;
  protected _modele:string;
  public readonly _nbRoues: number = 4; 
  
}
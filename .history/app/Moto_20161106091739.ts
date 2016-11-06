import {Garage} from './Garage';

/**
 * @export
 * @class Moto
 * @extends {Garage}
 */
export class Moto extends Garage{

    /**
     * @private
     * @type {number}
     * @memberOf Moto
     */
    private cylindre:number = 150;


	public get $cylindre(): number  {
		return this.cylindre;
	}

	public set $cylindre(value: number ) {
		this.cylindre = value;
	}
    

}
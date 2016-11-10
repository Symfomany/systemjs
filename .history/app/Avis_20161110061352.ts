import {UserInterface} from './UserInterface';
import * as moment from 'moment';

/**
 * @export
 * @class Avis
 */
export class Avis{
    
    /**
     * @private
     * @type {*}
     * @memberOf Avis
     */
    private _user:an;

    /**
     * @private
     * @type {string}
     * @memberOf Avis
     */
    private _content:string;


    /**
     * @private
     * @type {*}
     * @memberOf Avis
     */
    private _created:any = new Date();


    /**
     * @private
     * @type {*}
     * @memberOf Avis
     */
    private _visible:boolean = false;


    /**
     * Creates an instance of Avis.
     * 
     * @param {*} user
     * @param {string} content
     * @param {*} garage
     * @param {*} created
     * 
     * @memberOf Avis
     */
	constructor( content: string,  user?: UserInterface) {
		this._user = user;
		this._content = content;
		this._created = moment();
	}


	public get user(): any {
		return this._user;
	}

	public set user(value: any) {
		this._user = value;
	}

	public get content(): string {
		return this._content;
	}

	public set content(value: string) {
		this._content = value;
	}

	public get created(): any  {
		return this._created;
	}

	public set created(value: any ) {
		this._created = value;
	}
    

	public get visible(): boolean  {
		return this._visible;
	}

	public set visible(value: boolean ) {
		this._visible = value;
	}
    

}
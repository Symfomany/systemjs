import {UserInterface} from './UserInterface';


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
    private _user:any;

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
     * Creates an instance of Avis.
     * 
     * @param {*} user
     * @param {string} content
     * @param {*} garage
     * @param {*} created
     * 
     * @memberOf Avis
     */
	constructor(user: UserInterface, content: string, created: any ) {
		this._user = user;
		this._content = content;
		this._created = created;
	}
    

}
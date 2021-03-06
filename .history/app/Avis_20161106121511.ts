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
    private _garage:any;

    /**
     * @private
     * @type {*}
     * @memberOf Avis
     */
    private _created:any = new Date();


	constructor(user: any, content: string, garage: any, created: any ) {
		this._user = user;
		this._content = content;
		this._garage = garage;
		this._created = created;
	}
    

}
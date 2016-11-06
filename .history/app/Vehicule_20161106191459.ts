import {Avis} from './Avis';
import {MotorInterface} from './MotorInterface';
import {map,remove,indexOf,find} from 'lodash';

    /**
     * @class Vehicule
     */  
    export class Vehicule implements MotorInterface {

        
        private  _prix:number;
        private _color:string;
        private _marque:string;
        private _modele:string;
        private _immatriculation:string;
        private _avis:Avis[] = [];
        
        /**
         * @type {string}
         * @memberOf MotorInterface
         */
         _type: string;

        /**
         * @type {number}
         * @memberOf MotorInterface
         */
         _chevaux: number;


        /**
         * Creates an instance of Vehicule.
         * @param {any} parameters
         * @memberOf Vehicule
         */
        constructor(parameters:any) {

            this._marque = parameters.marque;
            this._modele = parameters.modele;
            this._color = parameters.color;
            this._immatriculation = parameters.immatriculation;
        }



        public get color(): string {
            return this._color;
        }

        public set color(value: string) {
            this._color = value;
        }
        

        public get marque(): string {
            return this._marque;
        }

        public set marque(value: string) {
            this._marque = value;
        }

        public get modele(): string {
            return this._modele;
        }

        public set modele(value: string) {
            this._modele = value;
        }

        public get immatriculation(): string {
            return this._immatriculation;
        }

        public set immatriculation(value: string) {
            this._immatriculation = value;
        }
        

        public get prix(): number {
            return this._prix;
        }

        public set prix(value: number) {
            this._prix = value;
        }

        /**
         * Compare 2 véhicule by price
         * @static
         * @param {Vehicule} voitureOne
         * @param {Vehicule} voitureTwo
         * @returns
         * 
         * @memberOf Vehicule
         */
        public static compare(voitureOne:Vehicule, voitureTwo:Vehicule){
            return voitureOne.prix > voitureTwo.prix;
        }

        /**
         * @param {Avis} avis
         * @returns
         * @memberOf Vehicule
         */
        public addAvis(...avis:Avis[]){
            for(let avi of avis){
                this._avis.push(avi);
            }
            return this._avis;
        }


        /**
         * Remove an avis
         * @param {any} [datas={content: null, user: null}]
         * @memberOf Vehicule
         */
        public removeAvis(content:string = ""){
            return this._avis = remove(this._avis, (elt) => { console.log(elt.content); return elt.content != content});
        }
            


        /**
         * Remove an avis
         * @param {any} [datas={content: null, user: null}]
         * @memberOf Vehicule
         */
        public setAvis(oldContent:string, content:string = ""){
            let index = indexOf(this._avis, find(this._avis, {content: oldContent}));
            return this._avis.splice(index, 1, new Avis(content));
        }
            

        public visibilityAvis(action:boolean = true){
            this._avis.map((elt) => { elt.visible = action }); 
        }

    }
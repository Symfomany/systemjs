import {Avis} from './Avis';
import {MotorInterface} from './MotorInterface';
import {without,uniq,take,filter,remove} from 'lodash';

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
         * @param {any} [datas={content: null, user: null}]
         * @memberOf Vehicule
         */
        public setAvis(){

            this._avis = remove(this._avis, (element) => {return element.content: "Joli bagnole :)"});
            console.log(this._avis);
        }
            

    }
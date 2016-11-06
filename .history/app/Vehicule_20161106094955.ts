    import {MotorInterface} from './MotorInterface';

    /**
     * @class Vehicule
     */  
    export class Vehicule implements MotorInterface {

        
        private _prix:number;
        private _color:string;
        private _marque:string;
        private _modele:string;
        private _immatriculation:string;
        
        /**
         * @type {string}
         * @memberOf MotorInterface
         */
         type: string;

        /**
         * @type {number}
         * @memberOf MotorInterface
         */
         chevaux: number;


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
            


    }
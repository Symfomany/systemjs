import * as request from 'request';


/**
 * name
 */
export class Card {
    
        /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public all(){
             return request.get(`http://localhost:3000/data`);
        }

      /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public one(title="Nature"){
             return request.get(`http://localhost:3000/data?title=${title}`);
        }



}
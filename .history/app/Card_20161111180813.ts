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
             return [1,3,5,7];
        }

      /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public one(title="Nature"){
            return [10,20,30,50];
            //  return request.get(`http://localhost:3000/data?title=${title}`);
        }



}
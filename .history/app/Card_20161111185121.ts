import * as request from 'request';
import * as $ from "jquery";


/**
 * name
 */
export class Card {
    
        /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public async all(){
                
             let titles = await $.getJSON(`http://localhost:3000/data`,  function (rep) {
                return rep.title;
             });

             return titles;
        }

      /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public async one(title="Nature"){
             return request.get(`http://localhost:3000/data?title=${title}`);
        }



}
import * as request from 'request';
import * as $ from "jquery";
import * as _ from "lodash";


/**
 * name
 */
export class Card {
    
        /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public async all(){
             const titles =  $.getJSON(`http://localhost:3000/data`,  function (rep) {
                return await _.map(rep, 'title');
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
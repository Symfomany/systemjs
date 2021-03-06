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
                // console.log(_.map([{'one': "ok", "two": "la"},{'one': "ok", "two": "la"}], (elt) => elt.one));
             const titles = await $.getJSON(`http://localhost:3000/data`,  function (rep) {
                return _.map(rep, 'title');
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
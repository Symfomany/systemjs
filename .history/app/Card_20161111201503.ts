import * as request from 'request';
import * as $ from "jquery";
import * as _ from "lodash";


/**
 * name
 */
export class Card {
    
        /**
         * @returns
         * Async/ Await => attendre pour...
         * @memberOf Card
         */
        public async getSearchTitles(title="Nature",offset=1, limit=20){
             const titles = await $.getJSON(`http://localhost:3000/data?title=${title}&_start=20&_end=30`,  function (rep) {
                return  rep;
             });

             return _.map(titles, 'title');
        }




}
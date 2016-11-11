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
        public async getSearchTitles(title="Nature"){
             const titles = await $.getJSON(`http://localhost:3000/data?title=${title}`,  function (rep) {
                return  rep;
             });

             return _.map(titles, 'title');
        }




}
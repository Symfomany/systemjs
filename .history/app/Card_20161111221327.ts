import * as request from 'request';
import * as $ from "jquery";
import * as _ from "lodash";


/**
 * name
 */
export class Card {

        /**
         * @memberOf Card
         */
        public  static readonly url = 'http://localhost:3000/data';


        /**
         * @returns
         * Async/ Await => attendre pour...
         * @memberOf Card
         */
        public async getSearchTitles(title="Nature",offset=1, limit=20){
             const titles = await $.getJSON(`http://localhost:3000/data?title=${title}&_start=${offset}&_end=${limit}`,  function (rep) {
                return  rep;
             });

             return _.map(titles, ['title','media']);
        }


        public async create(card){
                request.post('http://service.com/upload', {form:{key:'value'}})
        }




}
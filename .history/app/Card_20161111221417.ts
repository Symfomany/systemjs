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
        public  static readonly url:string = 'http://localhost:3000/data';


        public static card:any = {
            "title": "Health",
            "subtitle": "Stimpaks are good for you",
            "media": {
                "image": {
                    "src": "assets/images/logos/fallout.png",
                    "alt": "Andrew Ryan"
                }
            },
            "text": "Cras lobortis justo vel risus pulvinar, a fermentum eros luctus. Aliquam quis tortor ornare metus bibendum consectetur. Mauris tincidunt libero eros, et tempus justo tristique nec. Proin mollis sagittis ligula ac sollicitudin. Ut imperdiet purus varius, tristique nisi eu, sagittis mauris."
        }

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


        public async create(card = {}){
                request.post('http://service.com/upload', {form:{key:'value'}})
        }




}
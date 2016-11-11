import * as request from 'request';


/**
 * name
 */
export class Card {
    
        /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public async all(){
                
             let await  titles =  request(`http://localhost:3000/data`,  function (error, response, body) {
                console.log(body);
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
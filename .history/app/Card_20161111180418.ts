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
             return request.get(`http://localhost:3000/data?title=${title}`, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return JSON.parse(body);
                }
            });
        }



}
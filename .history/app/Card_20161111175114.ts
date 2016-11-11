import * as request from 'request';

/**
 * name
 */
class Cards {
    
      /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public all(){
             return request.get(`http://localhost:3000/data`, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                        return JSON.parse(body);
                }
            });
        }




}
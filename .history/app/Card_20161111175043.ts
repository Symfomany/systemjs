/**
 * name
 */
class Cards {
    
      /**
         * @returns Promise
         * @memberOf Vehicule
         */
        public all(nat:string = "fr"){
             return request.get(`https://randomuser.me/api/?nat=${nat}`, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                        return JSON.parse(body);
                }
            });
        }




}
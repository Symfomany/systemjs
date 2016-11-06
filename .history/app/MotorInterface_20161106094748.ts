/**
 * @export
 * @interface MotorInterface
 */
export interface MotorInterface {
    
    /**
     * @type {string}
     * @memberOf MotorInterface
     */
    type: string;

    /**
     * @type {number}
     * @memberOf MotorInterface
     */
    chevaux: number;


    /**
     * @type {number}
     * @memberOf MotorInterface
     */
    soupapes?: number;


   /**
    * @type {number}
    * @memberOf MotorInterface
    */
    emission?: number;


   /**
    * @type {number}
    * @memberOf MotorInterface
    */
    refroidissement?: number;

   /**
    * @type {number}
    * @memberOf MotorInterface
    */
    puissance?: number;

   /**
    * @type {number}
    * @memberOf MotorInterface
    */
    rendement?: number;
}
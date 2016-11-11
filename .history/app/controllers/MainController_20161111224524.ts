import * as angular from 'angular';

const app = angular.module('app');

/**
 * @class MainController
 */
class MainController {
    /**
     * @type {Array<>}
     * @memberOf MainController
     */
    planets:any = [];

    /**
     * Creates an instance of MainController.
     * @memberOf MainController
     */
    constructor() {
        this.planets = [
        {name: 'Mercure', isRocky: true},
        {name: 'Venus', isRocky: true},
        {name: 'Terre', isRocky: true},
        {name: 'Mars', isRocky: true},
        {name: 'Jupiter', isRocky: false},
        {name: 'Saturne', isRocky: false},
        {name: 'Uranus', isRocky: false},
        {name: 'Neptune', isRocky: false}
        ];
    }
}

app.controller('MainController',MainController);
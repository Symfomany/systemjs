import * as angular from 'angular';

var planetsModule = angular.module('planetsModule',[]);
class PlanetsController {
    planets:Array<Planet> = [];
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
planetsModule.controller('PlanetsController',PlanetsController);
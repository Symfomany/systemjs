import * as angular from 'angular';

var appModule = angular.module('app',[]);

class MainController {
    planets:Array<> = [];
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

appModule.controller('MainController',MainController);
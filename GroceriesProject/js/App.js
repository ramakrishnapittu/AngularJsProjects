///// <reference path="C:\Users\Dell\Documents\AngularJs\AngularJsProjects\GroceriesProject\lib\angular.min.js" />
 var App = angular.module('app', [
     'ui.router'
 ]).config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
     $urlRouterProvider.otherwise('/');

     $stateProvider
        .state('home',{
            url : '/',
            templateUrl : 'Bootstrap/Bootstrap.html'
     });
 }]);
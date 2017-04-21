var app = angular.module('myApp', ['ngRoute'])
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when('/home', {
            templateUrl: 'home.html',
            controller: 'mainController',

        })
        .when('/profile', {
            templateUrl: 'profile.html',
            controller: 'secondController',

        })
        .when('/gardens', {
            templateUrl: 'gardens.html',
            controller: 'thirdController',

        })
        .otherwise({
            redirecTo: '/home'
        })
}])
var app = angular.module('myApp');

app.service('gardenService', ['$http', function($http){
    this.myGarden = function(obj){
        return $http.get('/gardens')
    }
    this.addGardenService = function(obj){
        return $http.post('/gardens', obj)
    }
}])


var app = angular.module('myApp');

app.service('gardenService', ['$http', function($http){
    this.myGarden = function(zipCode){
        if(!zipCode){
            var queryString = "";
        } else{
            var queryString = "?zipCode=" + zipCode; 
        }
        return $http.get('/gardens' + queryString)
    }
    this.addGardenService = function(obj){
        return $http.post('/gardens', obj)
    }
    this.deleteGardenService = function(id){
        return $http.delete('/gardens/' + id ) 
    }
    this.editGardenService = function(obj, garden){
        return $http.put('/gardens/' + garden._id, obj) 
    }
}])


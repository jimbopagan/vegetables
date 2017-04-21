var app = angular.module('myApp');



app.controller('mainController', ['$scope', 'gardenService', function ($scope, gardenService) {



}])

app.controller('secondController', ['$scope', 'gardenService', function ($scope, gardenService) {


}])

app.controller('thirdController', ['$scope', 'gardenService', function ($scope, gardenService) {

    $scope.gardens = [];
    $scope.myFunc = function () {
        gardenService.myGarden().then(function (res) {
            console.log(res.data);
            $scope.gardens = res.data;
        })
    }
    $scope.myFunc();
    $scope.addGarden = function (obj) {
        gardenService.addGardenService(obj).then(function (res) {
            if (res.data) {
                console.log('garden added');
                alert('garden added');
                $scope.gardens.push(res.data);
            }
            
        })
    }
}])

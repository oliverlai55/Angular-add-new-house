
var myApp = angular.module('houseList', []);
myApp.controller('housesListCtrl', housesListCtrl);
myApp.controller('editController', editController);

function housesListCtrl($scope) {

   $scope.houses = houses;
   $scope.view = 'list'

   var index = 0;

   $scope.addHouse = function(){
    $scope.houses.push(houses[index++])
}

$scope.enableAdd = function(){
    index < houses.length;
}
}

function editController($scope){
    $scope.houses = houses;
    $scope.view = 'list'
    var viewIndex = -1

    $scope.changeView = function(view){
        $scope.view = view;
    }


    $scope.addNewHouse = function(){
        $scope.houses.push(new Houses($scope.name, $scope.photo, $scope.address, $scope.forSale, $scope.price, $scope.zestimate, $scope.deal, $scope.mortgage))
        $scope.changeView('list')
        $scope.name = '';
        $scope.photo = '';
        $scope.address = '';
        $scope.forSale = '';
        $scope.price = '';
        $scope.zestimate = '';
        $scope.deal = '';
        $scope.mortgage = '';
        console.log(houses);

    }

    $scope.editHouse = function(index){
        $scope.changeView('edit');
        $scope.name = $scope.houses[index].name
        viewIndex = index;
    }

    $scope.confirmEdit = function(){
        $scope.houses[index].name = $scope.name
        $scope.name = ''
        $scope.changeView('list')
    }
}




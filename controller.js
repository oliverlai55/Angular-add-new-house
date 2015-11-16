
    angular.module('houseList', []).controller('housesListCtrl', housesListCtrl);

    function housesListCtrl($scope) {

    	$scope.houses = [];

    	var index = 0;

    	$scope.addHouse = function(){
    		$scope.houses.push(houses[index++])
    	}

    	$scope.enableAdd = function(){
    		index < houses.length;
    	}

    }


 
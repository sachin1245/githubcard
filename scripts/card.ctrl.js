myApp.controller('cardController',['$scope','$rootScope','cardService',function($scope,$rootScope,cardService){

    //initialize the cards array
	if($rootScope.count < 1 || $rootScope.count === undefined){
		$rootScope.cards = [];
		$rootScope.count++;
	}

	$scope.getCards = function(name){
		cardService.getCards(name);
	}//call getCard service

	$scope.deleteCard = function(card){
        cardService.deleteCard(card);
    }//call deleteCard service


    //initial sort with name
    $scope.sortCard = 'name';
 
    //sort function
    $scope.sort = function (sortBy) {
        $scope.sortCard = sortBy;
        
    };

}])
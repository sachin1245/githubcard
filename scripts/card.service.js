myApp.service('cardService',['$http','$location','$route','$rootScope',function($http,$location,$route,$rootScope){
	return {
		getCards:getCards,
		deleteCard: deleteCard
	}

	

	//gets the card from the github api and push it to the array
	function getCards(name){
		var url = "https://api.github.com/users/" + name;

		$http.get(url).then(function(response){

			$rootScope.cards.push(response.data);

			//saves only the unique cards
			$rootScope.cards = _.uniq($rootScope.cards,"login")

			console.log($rootScope.cards);
			$location.path('/');
			$route.reload();
		},function(e){
			console.log('Couldn\'t  fetch the card , Something went wrong');
		});
		
	}


	//deletes the card
	function deleteCard(card){

  		$rootScope.cards = _.without($rootScope.cards,card);
    	$route.reload();
	}

}]);

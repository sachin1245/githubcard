var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "views/card.html",
		controller: "cardController"
	})
	.otherwise({
        redirectTo: '/'
    });
})




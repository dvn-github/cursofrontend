
(function(){
	'use strict'
	
	angular.module('chat')
	.config(config)
	
	function config($routeProvider, $locationProvider){
		$routeProvider
			.when("/", {
				template : "<h3>Hola</h3>"
			})
			//.when("/cards", {
			//	template : "<card-component></card-component>"
			//})
			.otherwise({
				redirectTo : "/" 
			});
	}
})();

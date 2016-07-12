
(function(){
	'use strict'
	
	angular.module('pracRoutes')
	.config(config)
	
	function config($routeProvider, $locationProvider){
		$routeProvider
			.when("/", {
				template : "<h3>Hola</h3>"
			})
			.when("/cards", {
				template : "<card-component></card-component>"
			})
			.when("/contacto", {
				template : "<form-component></form-component>"
			})
			.when("/other", {
				templateUrl : "app/components/other/index.html"
			})
			.otherwise({
				redirectTo : "/" 
			});
		$locationProvider.html5Mode(true);
	}
})();

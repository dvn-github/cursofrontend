
(function(){
	'use strict'
	
	angular.module('consumoapi')
	.config(config)
	
	function config($routeProvider){
		$routeProvider
			.when("/", {
				template : "<h3>Hola</h3>"
			})
			.otherwise({
				redirectTo : "/" 
			});
	}
})();

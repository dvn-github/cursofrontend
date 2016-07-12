
(function(){
	'use strict'
	
	angular.module('login')
	.config(config)
	
	function config($routeProvider){
		$routeProvider
			.when("/", {
				template : "<add></add>"
			})
			.when("/list", {
				template : "<list></list>"
			})
			.otherwise({
				redirectTo : "/" 
			});
	}
})();

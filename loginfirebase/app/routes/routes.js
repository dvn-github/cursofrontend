
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
			.when("/registro", {
				template : "<register></register>"
			})
			.otherwise({
				redirectTo : "/" 
			});
	}
})();

(function(){
	'use strict'
	angular.module('login')
	.factory('Auth', authService);

	function authService($firebaseAuth){

		var link = new Firebase('https://cursofront-37c00.firebaseio.com/');
		return $firebaseAuth(link);
	}

	

})();
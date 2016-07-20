(function(){
	'use strict'
	var log = {
		templateUrl:"app/components/login/login.html",
		controller:loginCtrl
	}

	function authHandler(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	}
	loginCtrl.$inject = ['Auth','$location'];

	function loginCtrl(Auth, $location){
		var log = this;

		log.login = function(){
	    	firebase.auth().signInWithEmailAndPassword(
                log.email,
                log.password
            ).then(function(userData){
                console.log('User logged in with uid',userData);
                $location.path('/data');
                location.reload();
            }).catch(function(error){
                console.log(error);
            });
		}
	}

	angular
		.module('login')
		.component('log', log);

})();

(function(){
	'use strict'
	var register = {
		controller : registerCtrl,
		templateUrl : 'app/components/register/register.html'
	}
	registerCtrl.$inject = ['Auth','$location'];
	function registerCtrl(Auth, $location){
		var reg = this;
		reg.register = function(){
			firebase.auth().createUserWithEmailAndPassword(
				reg.email,
				reg.password
			).then(function(userData){
                console.log('User created with uid', userData.uid)
                //$location.path('/');
            }).catch(function(err){
		        console.log(err.message);
		    });
		}		
	}

	angular
		.module('login')
		.component('register',register)

	
})();

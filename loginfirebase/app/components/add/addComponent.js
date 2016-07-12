
(function(){
	'use strict'
	var add = {
		controller : addCtrl,
		templateUrl : 'app/components/add/add.html'
	}

	function addCtrl($firebaseArray){
		var agregar = this;
		var ref = new Firebase('https://cursofront-37c00.firebaseio.com/data');
		agregar.data = $firebaseArray(ref);
		agregar.add = function(){
			agregar.data.$add({
				nombre : agregar.name,
				correo : agregar.email,
				message : agregar.text
			});
			// LIMPIAMOS LAS VARIABLES
			agregar.name = '';
			agregar.email = '';
			agregar.text = '';
		}
	}

	angular
		.module('login')
		.component('add',add)

	
})();


(function(){
	'use strict'
	var list = {
		controller : listCtrl,
		templateUrl : 'app/components/list/list.html'
	}

	function listCtrl($firebaseArray){
		var listar = this;
		var ref = new Firebase('https://cursofront-37c00.firebaseio.com/data');
		listar.data = $firebaseArray(ref);


		$('.collapsible').collapsible({
           accordion : false
        });

	}

	angular
		.module('login')
		.component('list',list)

	
})();

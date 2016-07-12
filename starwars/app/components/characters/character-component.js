
(function(){
	'use strict'
	var character = {
		bindings:{
			id:"=",
			category:"="
		},
		controller:characterCtrl,
		templateUrl : "app/components/characters/character.html"
	}

	function characterCtrl(starwarsApi){
		var char = this;
		char.characters = starwarsApi.get({
			id:char.id,
			category:char.category
		});
		console.log(char.characters);
	}

	angular.module('starwars')
	.component('character',character)

})();

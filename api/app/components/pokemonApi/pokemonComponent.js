
(function(){
	'use strict'
	var pokemon = {
		controller : pokemonCtrl,
		templateUrl : 'app/components/pokemonApi/pokemon.html'
	}

	function pokemonCtrl(pokemonData){
		var unpokemon = this;
		unpokemon.id = 1;

		unpokemon.getPokemon = function (){
			unpokemon.data = pokemonData.get({id:unpokemon.id}, function() {});
		}
		unpokemon.id = ''
		unpokemon.data = ''
	}

	angular
		.module('consumoapi')
		.component('pokemon',pokemon)


	
})();

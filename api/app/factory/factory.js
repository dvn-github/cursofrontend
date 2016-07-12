(function(){
	'use strict'
	angular
		.module('consumoapi')
		.factory('pokemonData', pokemonData);
		function pokemonData($resource){
			return $resource('http://pokeapi.co/api/v2/pokemon/:id/');
		}
})();
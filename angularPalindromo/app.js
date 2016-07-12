
(function(){
	'use strict'
	angular
		.module('Practica1',[])
		.controller('otraMadre', pracCtrl); //El primer parametro es el alias para la vista

		function pracCtrl(){
			var first = this;
			first.cadenaNormal = '';
			first.cadenaVolteada = '';
			first.voltear = function (cadena){
				if(cadena){
					first.cadenaNormal = cadena.replace(/\s/g,'').toLowerCase();
					first.cadenaVolteada = cadena.replace(/\s/g,'').split('').reverse().join('').toLowerCase();
				} else {
					first.cadenaVolteada = '';	
				}
				return first.cadenaVolteada;
			}

			first.palindromo = function(){
				return first.cadenaNormal == first.cadenaVolteada;
			}
			
		}
})();

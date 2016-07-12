(function(){
	'use strict'
	angular
		.module('Practica1',[])
		.controller('otraMadre', pracCtrl); //El primer parametro es el alias para la vista

		function pracCtrl(){
			var first = this;
			first.name = "DVN";
			first.age = 25;
			first.number = 3;
			first.texto = "HOLA";
			first.users = [
				{name : first.name, age : first.age, pais : 'mx'},
				{name : "Ricardo", age : 26, pais : 'mx'}, 
				{name : "Peter", age : 23, pais : 'usa'}, 
				{name : "mau", age : 20, pais : 'usa'}, 
				{name : "daniel", age : 20, pais : 'ruso'}, 
				{name : "mora", age : 27, pais : 'turco'}, 
				{name : "ruth", age : 29, pais : 'mx'}
			];
			first.envejecer = function (user){
				user.age += 1;
			};

			first.click = function(){
				console.log("un click");
			}

			
		}
})();
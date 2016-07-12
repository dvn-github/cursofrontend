/*
	Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

    Strict mode helps out in a couple ways:

    It catches some common coding bloopers, throwing exceptions.
    It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
    It disables features that are confusing or poorly thought out.
*/
(function(){
	'use strict';
	var esemero = {
		controller : praCtrl,
		templateUrl : "card.html"
	};
	angular
		.module('practica2',[])
		.component('eseMero',  esemero); // la notación con mayuscula es para que en la vista se pueda usar como <ese-mero>
	
	function praCtrl(){
		var prac = this;
		prac.name = "Daniel";
	}

})();
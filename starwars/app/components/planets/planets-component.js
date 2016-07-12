
(function(){
	'use strict'
	var planet = {
		bindings:{
			id:"=",
			category:"="
		},
		controller:planetCtrl,
		templateUrl : "app/components/planets/planet.html"
	}

	function planetCtrl(starwarsApi){
		var plan = this;
		plan.planets = starwarsApi.get({
			id:plan.id,
			category:plan.category
		});

		console.log(plan.planets);
	}

	angular.module('starwars')
	.component('planetComponent',planet)

})();

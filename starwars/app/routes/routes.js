
(function(){
	'use strict'
	
	angular.module('starwars')
	.config(configuration);

	configuration.$inject = ['$routeProvider'];
	// inyecciones, se utiliza para que siempre respete en que se van a inyectar los parametros a la funcion
	function configuration($routeProvider){
		$routeProvider
			.when("/", {
				template : "<h3>HOLA</h3>"
			})
			.when("/planets", {
				template : `<planet-component category="'planets'" id='1'></planet-component>`
			})
			.when("/characters", {
				template : `<character category="'people'" id='1'></character>`
			})
			.otherwise({
				redirectTo : "/" 
			});

	}
})();

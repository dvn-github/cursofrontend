
(function(){
	'use strict'
	angular.module('myApp', [])
    .controller('dummy', ['$scope', '$sce', function ($scope, $sce) {
    	$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/qpgTC9MDx1o');

    	$scope.changeIt = function (id) {
        	$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+id);
    	}
	}]);
})();

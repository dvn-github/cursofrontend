(function(){
	'use strict'
	angular
		.module('chat')
		.factory('chatData', chatData);
		function chatData($firebaseArray){
			var link = new Firebase("https://cursofront-37c00.firebaseio.com/messages");

			return $firebaseArray(link);
		}
})();
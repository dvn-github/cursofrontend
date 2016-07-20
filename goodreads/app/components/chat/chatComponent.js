
(function(){
	'use strict'
	var chat = {
		controller : chatCtrl,
		templateUrl : 'app/components/chat/chat.html'
	}

	function chatCtrl(chatData){
		var chat = this;

		chat.messages = chatData;
		chat.addMessage = function (){
			chat.messages.$add({
				user:chat.user,
				message:chat.message
			})
			chat.message = '';
			chat.message = '';
		}
	}

	angular
		.module('chat')
		.component('chat',chat)

	
})();

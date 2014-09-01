import Ember from 'ember';

export
default Ember.Route.extend({
	actions: {
		openModal: function(content, controller) {
			controller.set('content', content);
			controller.set('reveal', true);
		}
	}
});
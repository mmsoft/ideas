import Ember from 'ember';

export
default Ember.Route.extend({
	actions: {
		openModal: function(content) {
			var reveal = this.controllerFor('reveal');
			reveal.set('content', content);
			reveal.set('reveal', true);
			//this.$('.reveal-modal').reveal();
		}
	}
});
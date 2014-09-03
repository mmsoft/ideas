import Ember from 'ember';

export
default Ember.ObjectController.extend({
	needs: ['reveal'],

	actions: {
		openModal: function(content) {
			var reveal = this.get('controllers.reveal');
			reveal.set('content', content);
			reveal.set('reveal', true);
			//this.$('.reveal-modal').reveal();
			return true;
		}
	}
});
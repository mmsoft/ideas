import Ember from 'ember';

export
default Ember.View.extend({
	revealBinding: 'controller.reveal',
	revealChanged: function() {
		if (this.get('reveal')) {
			this.$('.reveal-modal').reveal();
			this.set('reveal', false);
		}
	}.observes('reveal')
});
import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs:['reveal'],

	actions: {
		openModal: function(content) {
			this.controllers.reveal.set('content', content);
			this.controllers.reveal.set('reveal', true);

		}
	}
});

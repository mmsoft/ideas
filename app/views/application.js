import Ember from 'ember';

export
default Ember.View.extend({
	didInsertElement: function() {
		this.$().foundation('topbar');
		this.$().foundation('reveal');
		this.$().foundation('reveal-modal');
		this.$().foundation('reveal-id');
	},
	willDestroyElement: function() {
		this.$().foundation('topbar', 'off');
		this.$().foundation('reveal', 'off');
		this.$().foundation('reveal-modal', 'off');
		this.$().foundation('reveal-id', 'off');
	}
});
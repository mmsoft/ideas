import Ember from 'ember';

export
default Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('done');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos.index', {
			controller: controller
		});
	}
});
import Ember from 'ember';

export
default Ember.ObjectController.extend({
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},

		acceptChanges: function() {
			this.set('isEditing', false);

			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},

		removeTodo: function() {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	},

	updateDoneState: function() {
		var todo = this.get('model');

		todo.save();
	}.observes('done')

	/*done: function(key, value) {
		var todo = this.get('model');

		if (value === undefined) {
			return todo.get('done');
		} else {
			todo.set('done', value);
			todo.save();
			return value;
		}
	}.property('model.done')*/
});
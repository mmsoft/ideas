import Ember from 'ember';

export
default Ember.ArrayController.extend({

	actions: {
		createTodo: function() {
			// Get the todo title set by the "New Todo" text field
			var title = this.get('newTitle');

			// Create the new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				done: false
			});

			// Clear the "New Todo" text field
			this.set('newTitle', '');

			// Save the new model
			todo.save();
		},

		clearCompleted: function() {
			var completed = this.filterBy('done', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},

	allAreDone: function(key, value) {

        if (value === undefined) {
            return this.get('length') > 0 && this.isEvery('done', true);
        } else {
            this.setEach('done', value);
            this.invoke('save');
            return value;
        }
    }.property('@each.done'),

    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),

    completed: function() {
        return this.filterBy('done', true).get('length');
    }.property('@each.done'),

    remaining: function() {
        return this.filterBy('done', false).get('length');
    }.property('@each.done'),
 
    inflection: function() {
        var remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    }.property('remaining')
});
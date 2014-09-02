 import DS from 'ember-data';

 var Todo = DS.Model.extend({
 	title: DS.attr('string'),
 	done: DS.attr('boolean')
 });

 Todo.reopenClass({
 	FIXTURES: [{
 		id: 1,
 		title: "Complete Ember.js Tutorial",
 		done: false
 	}, {
 		id: 2,
 		title: "Checkout some more ember stuff",
 		done: true
 	}, {
 		id: 3,
 		title: "Solve world hunger (with Ember)",
 		done: false
 	}]
 });

 export
 default Todo;
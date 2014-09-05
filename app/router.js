import Ember from 'ember';

var Router = Ember.Router.extend({
	location: IdeasENV.locationType
});

Router.map(function() {
	this.resource('posts', {
		path: '/'
	});
	//this.resource('reveal');

	this.resource('todos', {
		path: '/task'
	}, function() {
		this.route('active');
		this.route('complete');
	});

});

export
default Router;
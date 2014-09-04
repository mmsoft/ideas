import Ember from 'ember';

var Router = Ember.Router.extend({
	location: IdeasENV.locationType
});

Router.map(function() {
	this.resource('posts', {
		path: '/posts'
	});
	//this.resource('reveal');
	//this.route('application');
	this.resource('todos', {
		path: '/'
	}, function() {
		this.route('active');
		this.route('complete');
	});

});

export
default Router;